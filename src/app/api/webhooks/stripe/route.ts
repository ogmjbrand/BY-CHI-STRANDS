import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Stripe webhook handler — placeholder for payment processing
 * Update to handle Stripe events (charge.succeeded, charge.failed, etc.)
 *
 * To set up:
 * 1. Install @stripe/stripe-js: npm install stripe
 * 2. Get webhook signing secret from Stripe dashboard
 * 3. Add to .env.local: STRIPE_WEBHOOK_SECRET=whsec_...
 * 4. Configure Stripe to send webhooks to: https://your-domain.com/api/webhooks/stripe
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }

    // TODO: Verify webhook signature with Stripe
    // const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    // TODO: Handle events
    // switch (event.type) {
    //   case 'charge.succeeded':
    //     // Update order status
    //     break;
    //   case 'charge.failed':
    //     // Handle payment failure
    //     break;
    // }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Webhook processing failed" },
      { status: 500 }
    );
  }
}
