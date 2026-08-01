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
