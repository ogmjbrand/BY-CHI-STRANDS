import { NextRequest, NextResponse } from "next/server";
import { getOrderHistory } from "@/lib/orders";

export const runtime = "nodejs";

/**
 * Order history for the account page.
 *
 * This was a GET taking `?email=` and nothing else, handing back every order
 * for that address with the full shipping street in each one. An email is not
 * a secret, so that let anyone who knew a customer's address read where she
 * lives.
 *
 * It now takes the same pair guest tracking does — one order number and the
 * email it was placed with — and returns a summary per order with no address
 * in it. POST rather than GET so the pair is not sitting in a URL, server log
 * or browser history.
 */
export async function POST(request: NextRequest) {
  try {
    const { orderNumber, email } = await request.json();

    if (!orderNumber || !email) {
      return NextResponse.json(
        {
          error:
            "Enter your email and any one of your order numbers — the pair is what unlocks your history.",
        },
        { status: 400 }
      );
    }

    const orders = await getOrderHistory(orderNumber, email);

    if (!orders) {
      return NextResponse.json(
        {
          error:
            "We couldn't match that order number to that email. Check both and try again, or message our concierge.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    console.error("[api/orders/lookup] request failed:", error);
    return NextResponse.json(
      { error: "Something went wrong looking up your orders. Please try again." },
      { status: 500 }
    );
  }
}
