import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";
import type { Order, CreateOrderRequest } from "@/types/orders";

export async function createOrder(data: CreateOrderRequest): Promise<Order> {
  const supabase = getSupabaseAdmin();

  const orderNumber = `BCH-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      order_number: orderNumber,
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      items: data.items,
      subtotal: data.subtotal,
      tax: data.tax,
      shipping: data.shipping,
      total: data.total,
      status: "pending",
      shipping_address: data.shippingAddress,
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create order: ${error.message}`);

  return mapOrderFromDB(order);
}

export async function getOrder(orderId: string): Promise<Order | null> {
  const supabase = getSupabaseAdmin();

  const { data: order, error } = await supabase.from("orders").select().eq("id", orderId).single();

  if (error) return null;
  if (!order) return null;

  return mapOrderFromDB(order);
}

export async function updateOrderStatus(
  orderId: string,
  status: Order["status"],
  trackingData?: { trackingNumber: string; carrier: string; estimatedDelivery: string }
) {
  const supabase = getSupabaseAdmin();

  const updateData: any = { status };
  if (trackingData) {
    updateData.tracking_number = trackingData.trackingNumber;
    updateData.carrier = trackingData.carrier;
    updateData.estimated_delivery = trackingData.estimatedDelivery;
  }

  const { error } = await supabase.from("orders").update(updateData).eq("id", orderId);

  if (error) throw new Error(`Failed to update order: ${error.message}`);
}

/**
 * Order history for the account page, authorised by a pair.
 *
 * getOrderByEmail below takes an email and nothing else. That is safe to call
 * from trusted server code, and it was also being served straight out of a
 * public GET — so anyone who knew or guessed a customer's email address got
 * her full order history back, shipping street included. Email addresses are
 * not secret.
 *
 * The rule this site already applies to guest tracking applies here too, in
 * getOrderForTracking's own words: "the email alone would let anyone
 * enumerate another customer's address, so tracking requires the pair". One
 * order number proves the caller actually placed an order, and only then is
 * the rest of that email's history returned — trimmed to what a list needs,
 * with no address in it at all.
 */
export interface OrderSummary {
  id: string;
  orderNumber: string;
  status: Order["status"];
  total: number;
  itemCount: number;
  createdAt: string;
}

export async function getOrderHistory(
  orderNumber: string,
  email: string
): Promise<OrderSummary[] | null> {
  // the pair is the authorisation
  const proof = await getOrderForTracking(orderNumber, email);
  if (!proof) return null;

  const orders = await getOrderByEmail(proof.customerEmail);
  return orders.map((o) => ({
    id: o.id,
    orderNumber: o.orderNumber,
    status: o.status,
    total: o.total,
    itemCount: o.items.length,
    createdAt: o.createdAt,
  }));
}

/** Server-side only. See getOrderHistory before exposing this to a request. */
export async function getOrderByEmail(email: string): Promise<Order[]> {
  const supabase = getSupabaseAdmin();

  const { data: orders, error } = await supabase
    .from("orders")
    .select()
    .eq("customer_email", email)
    .order("created_at", { ascending: false });

  if (error) return [];
  if (!orders) return [];

  return orders.map(mapOrderFromDB);
}

/**
 * Looks up a single order by its order number *and* the email it was placed
 * with. Both must match: the order number alone is guessable-ish and the
 * email alone would let anyone enumerate another customer's address, so
 * tracking requires the pair — the standard guest-tracking pattern.
 */
export async function getOrderForTracking(
  orderNumber: string,
  email: string
): Promise<Order | null> {
  const supabase = getSupabaseAdmin();

  const { data: order, error } = await supabase
    .from("orders")
    .select()
    .eq("order_number", orderNumber.trim())
    .ilike("customer_email", email.trim())
    .maybeSingle();

  if (error) return null;
  if (!order) return null;

  return mapOrderFromDB(order);
}

function mapOrderFromDB(order: any): Order {
  return {
    id: order.id,
    orderNumber: order.order_number,
    customerId: order.customer_id,
    customerName: order.customer_name,
    customerEmail: order.customer_email,
    items: order.items,
    subtotal: order.subtotal,
    tax: order.tax,
    shipping: order.shipping,
    total: order.total,
    status: order.status,
    shippingAddress: order.shipping_address,
    trackingNumber: order.tracking_number,
    carrier: order.carrier,
    estimatedDelivery: order.estimated_delivery,
    createdAt: order.created_at,
    updatedAt: order.updated_at,
  };
}
