import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/orders";
import { sendEmail } from "@/lib/email";
import { renderOrderConfirmationHTML } from "@/lib/email-html";
import type { CreateOrderRequest } from "@/types/orders";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body: CreateOrderRequest = await request.json();

    // Validate required fields
    if (!body.customerName || !body.customerEmail || !body.items?.length) {
      return NextResponse.json(
        { error: "Missing required fields: customerName, customerEmail, items" },
        { status: 400 }
      );
    }

    // Create order in database
    const order = await createOrder(body);

    // Render and send confirmation email
    const emailHtml = renderOrderConfirmationHTML(order);

    await sendEmail({
      to: order.customerEmail,
      subject: `Order Confirmed: ${order.orderNumber} - BY CHI STRANDS`,
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        order: {
          id: order.id,
          orderNumber: order.orderNumber,
          status: order.status,
          total: order.total,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create order" },
      { status: 500 }
    );
  }
}
