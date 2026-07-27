import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";
import type { Cart, CartItem, AddToCartRequest } from "@/types/cart";

export async function getCart(userId: string): Promise<Cart | null> {
  const supabase = getSupabaseAdmin();
  const { data: cart, error } = await supabase.from("carts").select().eq("user_id", userId).single();

  if (error || !cart) return null;
  return mapCartFromDB(cart);
}

export async function addToCart(userId: string, data: AddToCartRequest): Promise<Cart> {
  const supabase = getSupabaseAdmin();

  let cart = await getCart(userId);

  if (!cart) {
    const { data: newCart, error } = await supabase
      .from("carts")
      .insert({
        user_id: userId,
        items: [
          {
            id: `item-${Date.now()}`,
            product_id: data.productId,
            quantity: data.quantity,
            variant: data.variant,
          },
        ],
      })
      .select()
      .single();

    if (error) throw new Error("Failed to create cart");
    return mapCartFromDB(newCart);
  }

  const existingItem = cart.items.find((i) => i.productId === data.productId);

  if (existingItem) {
    existingItem.quantity += data.quantity;
  } else {
    cart.items.push({
      id: `item-${Date.now()}`,
      productId: data.productId,
      productName: "",
      price: 0,
      quantity: data.quantity,
      image: "",
      variant: data.variant,
    });
  }

  const { data: updated, error } = await supabase
    .from("carts")
    .update({ items: cart.items })
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error("Failed to add to cart");
  return mapCartFromDB(updated);
}

export async function removeFromCart(userId: string, itemId: string): Promise<Cart> {
  const supabase = getSupabaseAdmin();
  const cart = await getCart(userId);

  if (!cart) throw new Error("Cart not found");

  const items = cart.items.filter((i) => i.id !== itemId);

  const { data: updated, error } = await supabase
    .from("carts")
    .update({ items })
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error("Failed to remove from cart");
  return mapCartFromDB(updated);
}

export async function updateCartItem(userId: string, itemId: string, quantity: number): Promise<Cart> {
  const supabase = getSupabaseAdmin();
  const cart = await getCart(userId);

  if (!cart) throw new Error("Cart not found");

  const item = cart.items.find((i) => i.id === itemId);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      return removeFromCart(userId, itemId);
    }
  }

  const { data: updated, error } = await supabase
    .from("carts")
    .update({ items: cart.items })
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error("Failed to update cart");
  return mapCartFromDB(updated);
}

export async function clearCart(userId: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  await supabase.from("carts").update({ items: [] }).eq("user_id", userId);
}

export async function addToWishlist(userId: string, productId: string): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { data: wishlist } = await supabase
    .from("wishlists")
    .select()
    .eq("user_id", userId)
    .single();

  if (wishlist) {
    const productIds = [...new Set([...wishlist.product_ids, productId])];
    await supabase.from("wishlists").update({ product_ids: productIds }).eq("user_id", userId);
  } else {
    await supabase.from("wishlists").insert({
      user_id: userId,
      product_ids: [productId],
    });
  }
}

export async function removeFromWishlist(userId: string, productId: string): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { data: wishlist } = await supabase
    .from("wishlists")
    .select()
    .eq("user_id", userId)
    .single();

  if (wishlist) {
    const productIds = wishlist.product_ids.filter((id: string) => id !== productId);
    await supabase.from("wishlists").update({ product_ids: productIds }).eq("user_id", userId);
  }
}

function mapCartFromDB(cart: any): Cart {
  return {
    id: cart.id,
    userId: cart.user_id,
    items: cart.items || [],
    subtotal: cart.subtotal || 0,
    tax: cart.tax || 0,
    shipping: cart.shipping || 0,
    discount: cart.discount || 0,
    total: cart.total || 0,
    couponCode: cart.coupon_code,
    createdAt: cart.created_at,
    updatedAt: cart.updated_at,
  };
}
