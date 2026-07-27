import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type CheckResult = { ok: boolean; detail: string };

async function timed(
  fn: () => Promise<CheckResult>,
  ms = 8000
): Promise<CheckResult> {
  try {
    return await Promise.race([
      fn(),
      new Promise<CheckResult>((_, reject) =>
        setTimeout(() => reject(new Error(`timed out after ${ms}ms`)), ms)
      ),
    ]);
  } catch (err) {
    return { ok: false, detail: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Server-side Supabase connectivity probe: /api/health/supabase
 * Uses the anon key for public surfaces and the service role key (server-only)
 * for storage; no key material is ever included in the response.
 */
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !anon || !service) {
    return NextResponse.json(
      {
        ok: false,
        error: "Missing Supabase environment variables",
        present: {
          NEXT_PUBLIC_SUPABASE_URL: Boolean(url),
          NEXT_PUBLIC_SUPABASE_ANON_KEY: Boolean(anon),
          SUPABASE_SERVICE_ROLE_KEY: Boolean(service),
        },
      },
      { status: 500 }
    );
  }

  const auth = await timed(async () => {
    const res = await fetch(`${url}/auth/v1/health`, {
      headers: { apikey: anon },
      cache: "no-store",
    });
    return { ok: res.ok, detail: `GoTrue ${res.status}` };
  });

  const database = await timed(async () => {
    // Anon probe against a table path: 200 = table readable; PGRST205 = anon
    // JWT accepted, table simply absent. (/rest/v1/ root is service_role-only.)
    const res = await fetch(`${url}/rest/v1/products?select=*&limit=1`, {
      headers: { apikey: anon, Authorization: `Bearer ${anon}` },
      cache: "no-store",
    });
    if (res.ok) return { ok: true, detail: `PostgREST ${res.status}` };
    const body = (await res.json().catch(() => ({}))) as { code?: string };
    const authed = body.code === "PGRST205" || body.code === "42P01";
    return {
      ok: authed,
      detail: authed
        ? `PostgREST authenticated (schema empty — ${body.code})`
        : `PostgREST ${res.status} ${body.code ?? ""}`,
    };
  });

  const storage = await timed(async () => {
    const res = await fetch(`${url}/storage/v1/bucket`, {
      headers: { apikey: service, Authorization: `Bearer ${service}` },
      cache: "no-store",
    });
    const buckets = res.ok ? ((await res.json()) as unknown[]).length : 0;
    return { ok: res.ok, detail: `Storage ${res.status} · ${buckets} bucket(s)` };
  });

  const realtime = await timed(async () => {
    // The realtime gateway answers REST on the websocket host.
    const res = await fetch(`${url}/realtime/v1/api/broadcast`, {
      method: "POST",
      headers: {
        apikey: anon,
        Authorization: `Bearer ${anon}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ topic: "health", event: "ping", payload: {} }],
      }),
      cache: "no-store",
    });
    return { ok: res.status === 202, detail: `Realtime ${res.status}` };
  });

  const checks = { auth, database, storage, realtime };
  const ok = Object.values(checks).every((c) => c.ok);

  return NextResponse.json(
    { ok, project: new URL(url).hostname.split(".")[0], checks },
    { status: ok ? 200 : 503 }
  );
}
