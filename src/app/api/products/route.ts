import { NextRequest, NextResponse } from "next/server";
import { getAllProducts, getFeaturedProducts } from "@/lib/product-api";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const featured = searchParams.get("featured");
    const category = searchParams.get("category");
    const texture = searchParams.get("texture");
    const tone = searchParams.get("tone");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const search = searchParams.get("search");

    let products;

    if (featured === "true") {
      const limit = parseInt(searchParams.get("limit") || "6");
      products = await getFeaturedProducts(limit);
    } else {
      products = await getAllProducts({
        category: category || undefined,
        texture: texture || undefined,
        tone: tone || undefined,
        minPrice: minPrice ? parseInt(minPrice) : undefined,
        maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
        search: search || undefined,
      });
    }

    return NextResponse.json({ success: true, products }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
