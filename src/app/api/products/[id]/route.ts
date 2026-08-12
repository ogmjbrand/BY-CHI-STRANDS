import { NextRequest, NextResponse } from "next/server";
import { getProductById, getProductReviews } from "@/lib/product-api";

export const runtime = "nodejs";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const reviews = await getProductReviews(id);

    return NextResponse.json(
      { success: true, product, reviews },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
