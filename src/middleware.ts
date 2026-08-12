import { NextResponse, type NextRequest } from "next/server";

/**
 * Keeps /admin off the public site.
 *
 * The admin pages had no access control of any kind — no middleware, no
 * session check, nothing. robots.txt disallows /admin, but robots.txt is a
 * request to well-behaved crawlers, not a lock: anyone who typed the URL got
 * the dashboard. It rendered order tables, revenue figures and customer names,
 * which is exactly the shape of thing that should never answer to an
 * anonymous request.
 *
 * This is not authentication and does not pretend to be. It is a door that
 * stays shut until the house deliberately opens it, so nothing is exposed
 * while real auth is decided. Set ADMIN_PREVIEW=1 in the environment to reach
 * the pages; without it every /admin route 404s exactly as an unknown path
 * would, revealing nothing about whether an admin area exists.
 *
 * Before this is opened on a public domain it needs real authentication —
 * who may sign in, and how — which is the owner's decision to make.
 */
export function middleware(request: NextRequest) {
  if (process.env.ADMIN_PREVIEW === "1") return NextResponse.next();

  // rewrite, not redirect: the response is a normal 404 page and the URL is
  // left alone, so a probe cannot tell a gated route from a nonexistent one.
  return NextResponse.rewrite(new URL("/404-admin-disabled", request.url), {
    status: 404,
  });
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
