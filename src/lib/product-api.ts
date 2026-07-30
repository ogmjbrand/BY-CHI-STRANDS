import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";
import type { Product } from "./products";

export async function getAllProducts(filters?: {
  category?: string;
  texture?: string;
  tone?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}): Promise<Product[]> {
  const supabase = getSupabaseAdmin();
  let query = supabase.from("products").select();

  if (filters?.category) query = query.eq("category", filters.category);
  if (filters?.texture) query = query.eq("texture", filters.texture);
  if (filters?.tone) query = query.eq("tone", filters.tone);
  if (filters?.minPrice) query = query.gte("price", filters.minPrice);
  if (filters?.maxPrice) query = query.lte("price", filters.maxPrice);
  if (filters?.search) query = query.ilike("name", `%${filters.search}%`);

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) return [];
  return (data || []).map((p: any) => ({
    slug: p.id,
    name: p.name,
    category: p.category,
    collection: p.collection,
    origin: p.origin,
    texture: p.texture,
    tone: p.tone,
    sdd: p.sdd,
    variants: p.variants,
    short: p.short,
    description: p.description,
    details: p.details,
    care: p.care,
  }));
}

export async function getProductById(productId: string): Promise<Product | null> {
  const supabase = getSupabaseAdmin();
  const { data: product, error } = await supabase
    .from("products")
    .select()
    .eq("id", productId)
    .single();

  if (error) return null;
  if (!product) return null;

  return {
    slug: product.id,
    name: product.name,
    category: product.category,
    collection: product.collection,
    origin: product.origin,
    texture: product.texture,
    tone: product.tone,
    sdd: product.sdd,
    variants: product.variants,
    short: product.short,
    description: product.description,
    details: product.details,
    care: product.care,
  };
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("featured", true)
    .limit(limit)
    .order("created_at", { ascending: false });

  if (error) return [];
  return (data || []).map((p: any) => ({
    slug: p.id,
    name: p.name,
    category: p.category,
    collection: p.collection,
    origin: p.origin,
    texture: p.texture,
    tone: p.tone,
    sdd: p.sdd,
    variants: p.variants,
    short: p.short,
    description: p.description,
    details: p.details,
    care: p.care,
  }));
}

export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
  createdAt: string;
}

export async function getProductReviews(productId: string): Promise<ProductReview[]> {
  try {
    const supabase = getSupabaseAdmin();
    const { data: reviews, error } = await supabase
      .from("product_reviews")
      .select()
      .eq("product_id", productId)
      .order("created_at", { ascending: false });

    if (error) return [];
    return reviews || [];
  } catch {
    // Statically generated product pages call this at build time, before
    // Supabase credentials are necessarily available — degrade to "no
    // reviews yet" rather than failing the build.
    return [];
  }
}

export async function createProductReview(
  productId: string,
  userId: string,
  data: { rating: number; title: string; content: string }
): Promise<ProductReview> {
  const supabase = getSupabaseAdmin();

  const { data: review, error } = await supabase
    .from("product_reviews")
    .insert({
      product_id: productId,
      user_id: userId,
      rating: data.rating,
      title: data.title,
      content: data.content,
      verified: true,
    })
    .select()
    .single();

  if (error) throw new Error("Failed to create review");
  return review;
}

export async function updateProductRating(productId: string) {
  const supabase = getSupabaseAdmin();

  const { data: reviews, error } = await supabase
    .from("product_reviews")
    .select("rating")
    .eq("product_id", productId);

  if (error || !reviews?.length) return;

  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  await supabase.from("products").update({ rating: avgRating }).eq("id", productId);
}
