import { NextRequest, NextResponse } from "next/server";
import { updateCartItem } from "@/lib/cart";

export const runtime = "nodejs";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ itemId: string }> }
) {
  try {
    const { itemId } = await params;
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const cart = await updateCartItem(userId, itemId, body.quantity);

    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (error) {
    console.error("[api/cart/[itemId]] request failed:", error);
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}
