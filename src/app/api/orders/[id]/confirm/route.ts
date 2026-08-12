import { NextRequest, NextResponse } from "next/server";
import { getOrder, updateOrderStatus } from "@/lib/orders";
import { sendEmail } from "@/lib/email";
import { renderShippingNotificationHTML } from "@/lib/email-html";

export const runtime = "nodejs";

interface ConfirmOrderRequest {
  trackingNumber: string;
  carrier: string;
  estimatedDelivery: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: ConfirmOrderRequest = await request.json();

    // Validate required fields
    if (!body.trackingNumber || !body.carrier || !body.estimatedDelivery) {
      return NextResponse.json(
        { error: "Missing required fields: trackingNumber, carrier, estimatedDelivery" },
        { status: 400 }
      );
    }

    // Get order
    const order = await getOrder(id);
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Update order status with tracking
    await updateOrderStatus(id, "shipped", {
      trackingNumber: body.trackingNumber,
      carrier: body.carrier,
      estimatedDelivery: body.estimatedDelivery,
    });

    // Send shipping notification email
    const emailHtml = renderShippingNotificationHTML(
      order,
      body.trackingNumber,
      body.carrier,
      body.estimatedDelivery
    );

    await sendEmail({
      to: order.customerEmail,
      subject: `Your Order is Shipped: ${order.orderNumber} - BY CHI STRANDS`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: "Order confirmed and customer notified" }, { status: 200 });
  } catch (error) {
    console.error("Order confirmation failed:", error);
    return NextResponse.json(
      { error: "Failed to confirm order" },
      { status: 500 }
    );
  }
}
