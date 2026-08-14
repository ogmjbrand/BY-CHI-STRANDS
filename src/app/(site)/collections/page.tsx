import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { collections } from "@/lib/collections";
import { BoutiqueHeader } from "@/components/stitch/BoutiqueHeader";
import { BoutiqueGrid } from "@/components/stitch/BoutiqueGrid";
import { heroFor, scene } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { priceFrom } from "@/lib/products";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_the_boutique
 * "ByChi Strands | The Boutique"
 */

export const metadata: Metadata = {
  title: "The Boutique",
};

export default function TheBoutiquePage() {
  return (
    <div className="scr-the-boutique theme-noir bg-background font-body-md text-on-background">
      {/* Editorial Hero — real curl-unit lineup as the full-bleed background */}
      <header className="relative isolate min-h-[70vh] flex items-end overflow-hidden pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/products/boutique-lineup-1.jpg"
          alt="Curly lace-front units shown at 12, 14, 16 and 18 inches on studio stands"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/20" />
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-20 md:pb-28">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
              The Art of Hair
            </span>
            {" "}
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8 fade-in-up md:tracking-[-0.02em]" style={{ animationDelay: "0.2s" }}>
              The Boutique
            </h1>
            {" "}
            <p className="font-body-xl text-body-xl text-white/70 max-w-2xl fade-in-up" style={{ animationDelay: "0.3s" }}>
              Curated masterpieces for the discerning collector. Each piece is a testament to the artisan's hand, crafted with the world's most exquisite silk-grade hair.
            </p>
          </div>
        </div>
      </header>
      <BoutiqueGrid collectionLinks={collections} />
      {/* Artisan Curation Section */}
      <section className="bg-surface-container-low py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-10"></div>
              {" "}
              <img
                className="w-full aspect-square object-cover shadow-2xl"
                alt={scene("collections-sourcing").alt}
                src={scene("collections-sourcing").src}
              />
              {" "}
              <div className="absolute bottom-8 -right-8 bg-surface p-8 max-w-xs shadow-xl hidden md:block">
                <p className="font-headline-lg text-primary italic">Hand-tied, strand by strand, in our atelier.</p>
              </div>
            </div>
            {" "}
            <div className="order-1 lg:order-2 space-y-8">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em]">Curated Selection</span>
              {" "}
              <h2 className="font-display-md text-display-md-mobile md:text-display-md leading-tight md:leading-[1.2] md:tracking-[-0.01em]">
                House Favourites
              </h2>
              {" "}
              <p className="font-body-xl text-on-surface-variant">
                The two pieces clients ask for most — Super Double Drawn quality, built and finished in our atelier.
              </p>
              {" "}
              <div className="flex flex-col gap-6 py-8">
                {products
                  .filter((p) => p.badges?.includes("bestseller"))
                  .map((p, i) => {
                    const price = priceFrom(p);
                    return (
                      <Link
                        key={p.slug}
                        href={`/shop/${p.slug}`}
                        className="flex items-center gap-6 group cursor-pointer"
                      >
                        <div className="w-20 h-20 overflow-hidden bg-surface-container shrink-0">
                          <ProductMedia media={heroFor(p.slug)} className="w-full h-full object-cover" />
                        </div>
                        {" "}
                        <div>
                          <h3 className="font-label-caps text-label-caps uppercase mb-1 tracking-[0.15em] group-hover:text-primary transition-colors">
                            {String(i + 1).padStart(2, "0")}. {p.name}
                          </h3>
                          {" "}
                          <span className="text-primary font-semibold">
                            {price === null ? "Enquire for Price" : formatPrice(price)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
              </div>
              {" "}
              <Link
                href="/shop"
                className="inline-block bg-primary text-on-primary px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all duration-300"
              >
                Shop House Favourites
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* The ByChi Standard */}
      <section className="py-section-padding border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md mb-4 md:tracking-[-0.01em]">
              The ByChi Standard
            </h2>
            {" "}
            <div className="w-20 h-px bg-primary mx-auto"></div>
          </div>
          {" "}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <Icon name="verified" className="text-primary text-3xl" />
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-4">Super Double Drawn</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant">
                Every bundle is hand-sorted so it stays as full at the ends as it is at the root —
                no thinning, no tapering.
              </p>
            </div>
            {" "}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <Icon name="eco" className="text-primary text-3xl" />
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-4">Vietnam, China & Mexico</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant">
                Every unit is graded and traced back to one of our three import origins, named on
                its product page.
              </p>
            </div>
            {" "}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <Icon name="front_hand" className="text-primary text-3xl" />
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-4">Hand-Finished In Atelier</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant">
                Closures, frontals and colour work are all finished by hand in-house, not
                outsourced.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
</div>
  );
}
