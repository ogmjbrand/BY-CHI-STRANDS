import { NextRequest, NextResponse } from "next/server";
import { addToWishlist, removeFromWishlist } from "@/lib/cart";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const supabase = getSupabaseAdmin();
    const { data: wishlist } = await supabase
      .from("wishlists")
      .select()
      .eq("user_id", userId)
      .single();

    return NextResponse.json({ success: true, wishlist: wishlist?.product_ids || [] }, { status: 200 });
  } catch (error) {
    console.error("[api/wishlist] request failed:", error);
    return NextResponse.json({ error: "Failed to fetch wishlist" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    await addToWishlist(userId, body.productId);

    return NextResponse.json({ success: true, message: "Added to wishlist" }, { status: 200 });
  } catch (error) {
    console.error("[api/wishlist] request failed:", error);
    return NextResponse.json({ error: "Failed to update wishlist" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    await removeFromWishlist(userId, body.productId);

    return NextResponse.json({ success: true, message: "Removed from wishlist" }, { status: 200 });
  } catch (error) {
    console.error("[api/wishlist] request failed:", error);
    return NextResponse.json({ error: "Failed to update wishlist" }, { status: 500 });
  }
}
