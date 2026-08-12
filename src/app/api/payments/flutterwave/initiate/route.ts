import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/orders";
import { initiateFlutterwavePayment, isFlutterwaveConfigured } from "@/lib/flutterwave";
import { site } from "@/lib/site";
import type { CreateOrderRequest } from "@/types/orders";

export const runtime = "nodejs";

/**
 * Creates the order (status "pending", no email yet — that fires on verified
 * payment, not on checkout attempt) and starts a real Flutterwave Standard
 * charge. Only reachable when every item has a real price: quote-only pieces
 * have no confirmed amount to charge, so they stay on the concierge
 * place-order flow instead of being charged an invented figure.
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateOrderRequest = await request.json();

    if (!body.customerName || !body.customerEmail || !body.items?.length) {
      return NextResponse.json(
        { error: "Missing required fields: customerName, customerEmail, items" },
        { status: 400 }
      );
    }

    const hasQuoteItem = body.items.some((item) => item.price === null);
    if (hasQuoteItem) {
      return NextResponse.json(
        {
          error:
            "One or more pieces in this order are quoted on request and can't be charged automatically. Please place the order and our concierge will confirm the price by email.",
        },
        { status: 400 }
      );
    }

    if (body.total <= 0) {
      return NextResponse.json({ error: "Nothing to charge." }, { status: 400 });
    }

    /*
     * Checked before createOrder, not after. initiateFlutterwavePayment would
     * throw on the missing key anyway, but by then the pending order row
     * exists — so every attempt while the key is unset left an orphan order
     * behind. The shopper is told what to do next; the reason lives in the
     * server log, because "FLUTTERWAVE_SECRET_KEY is missing" is our problem
     * to fix, not something to show someone trying to buy hair.
     */
    if (!isFlutterwaveConfigured()) {
      console.error(
        "Card payment attempted but FLUTTERWAVE_SECRET_KEY is not set in this environment."
      );
      return NextResponse.json(
        {
          error:
            "Card payment is unavailable right now. Please place your order and our concierge will arrange payment with you directly.",
        },
        { status: 503 }
      );
    }

    const order = await createOrder(body);

    const origin = request.headers.get("origin") ?? new URL(request.url).origin;

    const { link } = await initiateFlutterwavePayment({
      txRef: order.id,
      amount: order.total,
      currency: site.currency,
      redirectUrl: `${origin}/order-confirmation?order=${order.id}`,
      customerEmail: order.customerEmail,
      customerName: order.customerName,
      title: `${site.name} Order`,
      description: `Order ${order.orderNumber}`,
    });

    return NextResponse.json({ order: { id: order.id }, paymentLink: link });
  } catch (error) {
    // Logged in full, reported in general terms. The thrown message can carry
    // Flutterwave's own API text or our configuration state; neither belongs
    // in a response to the shopper.
    console.error("Flutterwave payment initiation failed:", error);
    return NextResponse.json(
      {
        error:
          "Card payment is unavailable right now — please place your order and we'll arrange payment by email.",
      },
      { status: 500 }
    );
  }
}
