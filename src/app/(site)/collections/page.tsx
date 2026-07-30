import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { collections } from "@/lib/collections";
import { BoutiqueHeader } from "@/components/stitch/BoutiqueHeader";
import { BoutiqueGrid } from "@/components/stitch/BoutiqueGrid";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { priceFrom } from "@/lib/products";
import { ProductMedia } from "@/components/stitch/ProductMedia";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_the_boutique
 * "ByChi Strands | The Boutique"
 */

export const metadata: Metadata = {
  title: "The Boutique",
};

export default function TheBoutiquePage() {
  return (
    <div className="scr-the-boutique bg-background font-body-md text-on-background">
      <BoutiqueHeader />
      {/* Editorial Hero */}
      <header className="pt-40 pb-20 md:pt-60 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
            The Art of Hair
          </span>
          {" "}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 fade-in-up md:tracking-[-0.02em]" style={{ animationDelay: "0.2s" }}>
            The Boutique
          </h1>
          {" "}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl fade-in-up" style={{ animationDelay: "0.3s" }}>
            Curated masterpieces for the discerning collector. Each piece is a testament to the artisan's hand, crafted with the world's most exquisite silk-grade hair.
          </p>
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
                alt="A master artisan hand-tying individual hair strands onto a fine lace base in the atelier"
                src="/stitch/img-014.jpg"
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
                          <h4 className="font-label-caps text-label-caps uppercase mb-1 tracking-[0.15em] group-hover:text-primary transition-colors">
                            {String(i + 1).padStart(2, "0")}. {p.name}
                          </h4>
                          {" "}
                          <span className="text-primary font-semibold">
                            {price === null ? "Price on request" : formatPrice(price)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
              </div>
              {" "}
              <Link
                href="/shop"
                className="inline-block bg-primary text-white px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all duration-300"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
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
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
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
                <span className="material-symbols-outlined text-primary text-3xl">front_hand</span>
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
      <footer className="bg-background border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display-lg text-[32px] text-primary">ByChi Strands</span>
            {" "}
            <p className="font-body-sm text-on-surface-variant text-center md:text-left">Redefining the standard of luxury hair through artisan excellence.</p>
          </div>
          {" "}
          <div className="flex gap-8">
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/privacy">
              Privacy Policy
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/terms">
              Terms of Service
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              Sustainability
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/contact">
              Contact Atelier
            </Link>
          </div>
          {" "}
          <div className="text-secondary dark:text-secondary-fixed font-body-sm text-body-sm tracking-wide">
            © {new Date().getFullYear()} ByChi Strands. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
