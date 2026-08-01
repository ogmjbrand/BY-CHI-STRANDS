import { NextRequest, NextResponse } from "next/server";
import { getOrder, updateOrderStatus } from "@/lib/orders";
import { verifyFlutterwaveTransaction } from "@/lib/flutterwave";
import { sendEmail } from "@/lib/email";
import { renderOrderConfirmationHTML } from "@/lib/email-html";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Confirms payment directly with Flutterwave's API rather than trusting the
 * redirect's query params (those are shopper-controllable). Only marks the
 * order confirmed, and only sends the confirmation email, once the amount,
 * currency and tx_ref genuinely match what Flutterwave recorded.
 */
export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("order");
  const transactionId = request.nextUrl.searchParams.get("transaction_id");

  if (!orderId) {
    return NextResponse.json({ error: "Missing order id" }, { status: 400 });
  }

  const order = await getOrder(orderId);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  // Already verified on an earlier load — don't re-verify or re-email.
  if (order.status !== "pending") {
    return NextResponse.json({ verified: order.status === "confirmed", order });
  }

  if (!transactionId) {
    return NextResponse.json({ verified: false, order });
  }

  try {
    const tx = await verifyFlutterwaveTransaction(transactionId);

    const verified =
      tx.status === "successful" &&
      tx.txRef === order.id &&
      tx.currency === site.currency &&
      tx.amount >= order.total;

    if (!verified) {
      return NextResponse.json({ verified: false, order });
    }

    await updateOrderStatus(order.id, "confirmed");
    const confirmedOrder = { ...order, status: "confirmed" as const };

    const emailHtml = renderOrderConfirmationHTML(confirmedOrder);
    await sendEmail({
      to: confirmedOrder.customerEmail,
      subject: `Order Confirmed: ${confirmedOrder.orderNumber} - BY CHI STRANDS`,
      html: emailHtml,
    });

    return NextResponse.json({ verified: true, order: confirmedOrder });
  } catch (error) {
    console.error("Flutterwave verification failed:", error);
    return NextResponse.json({ verified: false, order });
  }
}
