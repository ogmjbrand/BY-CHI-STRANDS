import Link from "next/link";
import { collections, collectionProducts } from "@/lib/collections";
import { heroFor } from "@/lib/media";
import { ProductMedia } from "./ProductMedia";

/**
 * The reference template's "Our Collections" grid — four framed banners,
 * each with a "Shop [X]" overlay — rebuilt with the real four collections
 * and their real taglines instead of generic category placeholders.
 */
export function HomeCollections() {
  return (
    <section className="bg-noir py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-gold mb-4 block">
            Our Collections
          </span>
          <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-white tracking-[-0.01em]">
            Luxury Hair, Designed For You
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((c) => {
            const heroProduct = collectionProducts(c.slug)[0];
            return (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden border border-gold/30"
              >
                {heroProduct ? (
                  <ProductMedia
                    media={heroFor(heroProduct.slug)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/95 via-noir/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <h3 className="font-headline-lg text-body-md md:text-body-xl text-white mb-1">
                    {c.name}
                  </h3>
                  <p className="font-body-sm text-[11px] md:text-body-sm text-white/70 mb-3 hidden sm:block">
                    {c.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 font-label-caps text-[10px] uppercase tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors">
                    Shop Now
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/collections"
            className="border border-gold text-gold px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-gold hover:text-noir transition-colors"
          >
            Shop All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
