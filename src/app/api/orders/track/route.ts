import { NextRequest, NextResponse } from "next/server";
import { getOrderForTracking } from "@/lib/orders";

export const runtime = "nodejs";

/**
 * Guest order tracking. Requires order number *and* the email it was placed
 * with — neither alone is enough, so one can't be used to enumerate the
 * other customer's details. Returns only what tracking needs (status,
 * carrier, dates, item names); the full shipping address stays out of the
 * response.
 */
export async function POST(request: NextRequest) {
  try {
    const { orderNumber, email } = await request.json();

    if (!orderNumber || !email) {
      return NextResponse.json(
        { error: "Enter both your order number and the email you ordered with." },
        { status: 400 }
      );
    }

    const order = await getOrderForTracking(orderNumber, email);

    if (!order) {
      return NextResponse.json(
        {
          error:
            "We couldn't find an order matching that number and email. Check both and try again, or message our concierge.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      order: {
        orderNumber: order.orderNumber,
        status: order.status,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        trackingNumber: order.trackingNumber ?? null,
        carrier: order.carrier ?? null,
        estimatedDelivery: order.estimatedDelivery ?? null,
        city: order.shippingAddress?.city ?? null,
        country: order.shippingAddress?.country ?? null,
        items: order.items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          variant: item.variant ?? null,
        })),
      },
    });
  } catch (error) {
    console.error("Order tracking lookup failed:", error);
    return NextResponse.json(
      { error: "Something went wrong looking up that order. Please try again." },
      { status: 500 }
    );
  }
}
