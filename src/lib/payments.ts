import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";

export async function getShippingRates(zipCode: string): Promise<any[]> {
  const supabase = getSupabaseAdmin();

  const { data: rates, error } = await supabase
    .from("shipping_rates")
    .select()
    .eq("active", true)
    .order("cost", { ascending: true });

  if (error) return [];
  return rates || [];
}

export async function validateCoupon(couponCode: string, orderTotal: number): Promise<any | null> {
  const supabase = getSupabaseAdmin();

  const { data: coupon, error } = await supabase
    .from("coupons")
    .select()
    .eq("code", couponCode.toUpperCase())
    .eq("active", true)
    .single();

  if (error || !coupon) return null;

  const now = new Date();
  const expiresAt = new Date(coupon.expires_at);

  if (expiresAt < now) return null;
  if (coupon.used_count >= coupon.max_uses) return null;
  if (coupon.min_order_amount && orderTotal < coupon.min_order_amount) return null;

  return {
    id: coupon.id,
    code: coupon.code,
    type: coupon.type,
    value: coupon.value,
    discount: coupon.type === "percentage" ? (orderTotal * coupon.value) / 100 : coupon.value,
  };
}

export async function applyCoupon(couponCode: string): Promise<void> {
  const supabase = getSupabaseAdmin();

  await supabase
    .from("coupons")
    .update({ used_count: supabase.rpc("increment_coupon_usage", { code: couponCode }) })
    .eq("code", couponCode.toUpperCase());
}

export async function calculateShipping(
  zipCode: string,
  weight: number,
  carrier?: string
): Promise<number> {
  const rates = await getShippingRates(zipCode);

  if (!rates.length) return 10.0;

  let selectedRate = rates[0];

  if (carrier) {
    selectedRate = rates.find((r) => r.carrier === carrier) || rates[0];
  }

  return selectedRate.cost || 10.0;
}

export async function createPaymentIntent(orderId: string, amount: number): Promise<any> {
  const supabase = getSupabaseAdmin();

  const clientSecret = `pi_${Date.now()}_${Math.random().toString(36).substring(7)}`;

  const { data: intent, error } = await supabase
    .from("payment_intents")
    .insert({
      order_id: orderId,
      amount,
      currency: "USD",
      status: "pending",
      client_secret: clientSecret,
    })
    .select()
    .single();

  if (error) throw new Error("Failed to create payment intent");
  return intent;
}

export async function updatePaymentStatus(intentId: string, status: string): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { error } = await supabase
    .from("payment_intents")
    .update({ status })
    .eq("id", intentId);

  if (error) throw new Error("Failed to update payment status");
}
