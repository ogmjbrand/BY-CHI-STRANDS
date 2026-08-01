import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/orders";
import { initiateFlutterwavePayment } from "@/lib/flutterwave";
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
    console.error("Flutterwave payment initiation failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Card payment is unavailable right now — please place your order and we'll arrange payment by email.",
      },
      { status: 500 }
    );
  }
}
