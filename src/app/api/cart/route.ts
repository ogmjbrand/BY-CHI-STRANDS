import { NextRequest, NextResponse } from "next/server";
import { getCart, addToCart, removeFromCart, updateCartItem, clearCart } from "@/lib/cart";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const cart = await getCart(userId);
    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const cart = await addToCart(userId, body);

    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to add to cart" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();

    if (body.clearAll) {
      await clearCart(userId);
      return NextResponse.json({ success: true, message: "Cart cleared" }, { status: 200 });
    }

    const cart = await removeFromCart(userId, body.itemId);
    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update cart" },
      { status: 500 }
    );
  }
}
