import { NextRequest, NextResponse } from "next/server";
import { createPaymentIntent } from "@/lib/payments";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { orderId, amount } = body;

    if (!orderId || !amount) {
      return NextResponse.json(
        { error: "Missing orderId or amount" },
        { status: 400 }
      );
    }

    const intent = await createPaymentIntent(orderId, amount);

    return NextResponse.json(
      { success: true, clientSecret: intent.client_secret, intentId: intent.id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
