"use client";

import { useStore } from "@/context/StoreContext";
import { formatPrice } from "@/lib/utils";

/** Real cart total for the sticky mobile "Complete Purchase" button. */
export function CheckoutTotal({ prefix = "Complete Purchase" }: { prefix?: string }) {
  const { cartTotal, hydrated } = useStore();
  return <>{prefix}{hydrated ? ` — ${formatPrice(cartTotal)}` : ""}</>;
}
