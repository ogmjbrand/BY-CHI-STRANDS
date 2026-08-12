import { NextRequest, NextResponse } from "next/server";
import { getProductReviews, createProductReview, updateProductRating } from "@/lib/product-api";

export const runtime = "nodejs";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const reviews = await getProductReviews(id);

    return NextResponse.json({ success: true, reviews }, { status: 200 });
  } catch (error) {
    console.error("[api/products/[id]/reviews] request failed:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const review = await createProductReview(id, userId, {
      rating: body.rating,
      title: body.title,
      content: body.content,
    });

    await updateProductRating(id);

    return NextResponse.json({ success: true, review }, { status: 201 });
  } catch (error) {
    console.error("[api/products/[id]/reviews] request failed:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
