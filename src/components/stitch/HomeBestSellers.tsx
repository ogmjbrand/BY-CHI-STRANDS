import Link from "next/link";
import { products, priceFrom, type Product } from "@/lib/products";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { ProductMedia } from "./ProductMedia";
import { ProductBadges } from "./ProductBadges";

/**
 * Bestsellers first, then the rest of the catalogue — priced pieces before
 * enquiry-only ones, so the grid reads as a real price list rather than a
 * row of "Price on request".
 */
const FEATURED: Product[] = [
  ...products.filter((p) => p.badges?.includes("bestseller")),
  ...products
    .filter((p) => !p.badges?.includes("bestseller"))
    .sort((a, b) => Number(priceFrom(b) !== null) - Number(priceFrom(a) !== null)),
].slice(0, 4);

export function HomeBestSellers() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary-container mb-4 block">
              Best Sellers
            </span>
            <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface tracking-[-0.01em]">
              Loved By Thousands Of Beautiful Women
            </h2>
          </div>
          <Link
            href="/shop"
            className="font-label-caps text-label-caps uppercase tracking-[0.15em] text-on-surface border-b border-outline hover:text-primary-container hover:border-primary-container transition-colors pb-1 shrink-0"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {FEATURED.map((p) => (
            <div key={p.slug} data-slug={p.slug} className="group relative">
              <div className="relative aspect-3/4 overflow-hidden bg-surface-container-low mb-4">
                <Link href={`/shop/${p.slug}`} className="block w-full h-full">
                  <ProductMedia
                    media={heroFor(p.slug)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <ProductBadges badges={p.badges} className="absolute top-3 left-3 z-10" />
                <button
                  aria-label="Save to wishlist"
                  className="absolute top-3 right-3 w-9 h-9 bg-white/85 backdrop-blur rounded-full flex items-center justify-center text-on-surface z-10"
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>
              </div>
              <h3 className="font-headline-lg text-body-md md:text-body-xl text-on-surface">
                <Link href={`/shop/${p.slug}`} className="hover:text-primary-container transition-colors">
                  {p.name}
                </Link>
              </h3>
              <p className="font-body-md text-body-sm md:text-body-md font-semibold text-secondary mt-1">
                {formatPrice(priceFrom(p))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
