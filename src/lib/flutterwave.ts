import "server-only";

const FLW_BASE = "https://api.flutterwave.com/v3";

function secretKey(): string {
  const key = process.env.FLUTTERWAVE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "Card payment isn't configured yet — FLUTTERWAVE_SECRET_KEY is missing."
    );
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
