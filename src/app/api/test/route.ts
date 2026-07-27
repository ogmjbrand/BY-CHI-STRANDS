import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface HealthCheck {
  resend: { configured: boolean; hasKey: boolean };
  supabase: { configured: boolean };
  environment: string;
}

export async function GET() {
  const check: HealthCheck = {
    resend: {
      configured: Boolean(process.env.RESEND_API_KEY),
      hasKey: Boolean(process.env.RESEND_API_KEY),
    },
    supabase: {
      configured: Boolean(
        process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
      ),
    },
    environment: process.env.NODE_ENV || "development",
  };

  const allConfigured = check.resend.configured && check.supabase.configured;

  return NextResponse.json(
    {
      status: allConfigured ? "ready" : "incomplete",
      checks: check,
      message: allConfigured
        ? "✓ Backend is configured and ready"
        : "✗ Missing configuration - see checks for details",
      setupGuide: "See BACKEND_SETUP.md for configuration steps",
    },
    { status: allConfigured ? 200 : 503 }
  );
}
