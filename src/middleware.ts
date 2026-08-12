import { NextResponse, type NextRequest } from "next/server";

/**
 * Keeps the parts of this app that are not finished off the public internet.
 *
 * ── /admin ────────────────────────────────────────────────────────────────
 *
 * The admin pages had no access control of any kind — no middleware, no
 * session check, nothing. robots.txt disallows /admin, but robots.txt is a
 * request to well-behaved crawlers, not a lock: anyone who typed the URL got
 * the dashboard.
 *
 * ── the unused API surface ────────────────────────────────────────────────
 *
 * Nineteen endpoints across eight route files "authorise" themselves by
 * reading an `x-user-id` request header — a value the caller sends. That is
 * not authentication: anyone can put any user's id in a header and read or
 * write that person's profile, addresses, cart, wishlist or support tickets.
 * They return 401 when the header is missing, which makes them look guarded
 * while being trivially walked past.
 *
 * None of them is called by this app. The cart, the wishlist and the
 * concierge profile all live in localStorage, and the catalogue is static
 * data — so this is a live, publicly writable path into the database that
 * nothing uses. Alongside them sit a Stripe webhook whose signature check is
 * still a TODO (the house takes card payments through Flutterwave), and two
 * diagnostic endpoints that report which environment variables are set and
 * echo database errors.
 *
 * They are gated rather than deleted: the code may be the start of something
 * intended, and that is the owner's call. Nothing is lost, and nothing is
 * exposed in the meantime.
 *
 * ── what this is not ──────────────────────────────────────────────────────
 *
 * This is not authentication and does not pretend to be. It is a door that
 * stays shut until the house deliberately opens it. Set ADMIN_PREVIEW=1 to
 * reach any of it; without that every route below answers exactly as an
 * unknown path would, revealing nothing about what exists behind it.
 *
 * Before any of this is opened on a public domain it needs real
 * authentication — who may sign in, and how — which is the owner's decision.
 */

/**
 * Live and in use, listed here so the reasoning is visible rather than
 * implied by omission: orders/create, orders/track, orders/lookup,
 * orders/[id], contact, academy/enroll and payments/flutterwave/*.
 */
const GATED_API = [
  "/api/users",
  "/api/cart",
  "/api/wishlist",
  "/api/support",
  "/api/checkout",
  "/api/products",
  "/api/services",
  "/api/webhooks",
  "/api/test",
  "/api/health",
];

export function middleware(request: NextRequest) {
  if (process.env.ADMIN_PREVIEW === "1") return NextResponse.next();

  const { pathname } = request.nextUrl;
  const isApi = GATED_API.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (isApi) {
    // A bare 404 for an API path, with no body describing why.
    return new NextResponse(null, { status: 404 });
  }

  // rewrite, not redirect: the response is a normal 404 page and the URL is
  // left alone, so a probe cannot tell a gated route from a nonexistent one.
  return NextResponse.rewrite(new URL("/404-admin-disabled", request.url), {
    status: 404,
  });
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/api/users/:path*",
    "/api/cart/:path*",
    "/api/wishlist/:path*",
    "/api/support/:path*",
    "/api/checkout/:path*",
    "/api/products/:path*",
    "/api/services/:path*",
    "/api/webhooks/:path*",
    "/api/test",
    "/api/health/:path*",
  ],
};
