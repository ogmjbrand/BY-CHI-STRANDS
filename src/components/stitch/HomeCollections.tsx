import Link from "next/link";
import { collections, collectionProducts } from "@/lib/collections";
import { priceFrom } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { heroFor } from "@/lib/media";
import { ProductMedia } from "./ProductMedia";

function fromPrice(slug: string): string {
  const prices = collectionProducts(slug)
    .map(priceFrom)
    .filter((p): p is number => p !== null);
  return prices.length ? `From ${formatPrice(Math.min(...prices))}` : "Enquire for Price";
}

export function HomeCollections() {
  return (
    <section className="bg-surface-container-low py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary-container mb-4 block">
            Featured Collections
          </span>
          <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface tracking-[-0.01em] mb-8">
            Luxury Hair, Designed For You
          </h2>
          <Link
            href="/collections"
            className="bg-primary-container text-on-primary-container px-8 py-3 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-secondary transition-colors"
          >
            View All Collections
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c) => {
            const heroProduct = collectionProducts(c.slug)[0];
            return (
              <Link key={c.slug} href={`/collections/${c.slug}`} className="group block">
                <div className="relative aspect-3/4 overflow-hidden bg-surface-container mb-4">
                  {heroProduct ? (
                    <ProductMedia
                      media={heroFor(heroProduct.slug)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <h3 className="font-headline-lg text-body-md md:text-body-xl text-on-surface group-hover:text-primary-container transition-colors">
                  {c.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {fromPrice(c.slug)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
