/*
 * Flutterwave Standard.
 *
 * `server-only` is load-bearing: importing this from a client component is a
 * build error, not a runtime surprise. The secret is read from the
 * environment on each call and never returned, logged, or embedded in a
 * response — and the variable deliberately has no NEXT_PUBLIC_ prefix, so
 * Next cannot inline it into the client bundle even by accident.
 *
 * Standard means Flutterwave hosts the card form: we exchange an order for a
 * redirect link and the shopper enters their card on Flutterwave's domain.
 * Card numbers never touch this server, which is the whole reason to use it.
 *
 * FLUTTERWAVE_SECRET_KEY must be set in the Vercel project's environment
 * variables. Until it is, `isConfigured()` returns false and checkout falls
 * back to the concierge flow rather than failing mid-payment.
 */
import "server-only";

const FLW_BASE = "https://api.flutterwave.com/v3";

/**
 * Whether card payment can be attempted at all.
 *
 * Callers should check this *before* doing any work with side effects.
 * Without it the missing-key error surfaces from inside `initiate...`, which
 * runs after the order row has already been written — leaving an orphan
 * pending order behind on every attempt.
 */
export function isFlutterwaveConfigured(): boolean {
  return Boolean(process.env.FLUTTERWAVE_SECRET_KEY);
}

function secretKey(): string {
  const key = process.env.FLUTTERWAVE_SECRET_KEY;
  if (!key) {
    // Reaching here means a caller skipped isFlutterwaveConfigured(). The
    // message names the variable because it is for the server log, and it
    // must not be forwarded to the shopper.
    throw new Error("FLUTTERWAVE_SECRET_KEY is not set");
  }
  return key;
}

export interface FlutterwaveInitPayload {
  txRef: string;
  amount: number;
  currency: string;
  redirectUrl: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  title: string;
  description: string;
}

/** Initiates a Flutterwave Standard payment — returns the hosted checkout link to redirect the shopper to. */
export async function initiateFlutterwavePayment(
  payload: FlutterwaveInitPayload
): Promise<{ link: string }> {
  const res = await fetch(`${FLW_BASE}/payments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tx_ref: payload.txRef,
      amount: payload.amount,
      currency: payload.currency,
      redirect_url: payload.redirectUrl,
      customer: {
        email: payload.customerEmail,
        name: payload.customerName,
        phonenumber: payload.customerPhone,
      },
      customizations: {
        title: payload.title,
        description: payload.description,
      },
    }),
  });

  const data = await res.json();
  if (!res.ok || data.status !== "success" || !data.data?.link) {
    throw new Error(data.message || "Flutterwave payment initiation failed");
  }

  return { link: data.data.link as string };
}

export interface FlutterwaveVerification {
  status: string;
  amount: number;
  currency: string;
  txRef: string;
}

/** Verifies a completed transaction directly with Flutterwave — never trust the redirect query params alone. */
export async function verifyFlutterwaveTransaction(
  transactionId: string
): Promise<FlutterwaveVerification> {
  const res = await fetch(`${FLW_BASE}/transactions/${transactionId}/verify`, {
    headers: { Authorization: `Bearer ${secretKey()}` },
  });

  const data = await res.json();
  if (!res.ok || data.status !== "success") {
    throw new Error(data.message || "Flutterwave verification failed");
  }

  return {
    status: data.data.status as string,
    amount: data.data.amount as number,
    currency: data.data.currency as string,
    txRef: data.data.tx_ref as string,
  };
}
