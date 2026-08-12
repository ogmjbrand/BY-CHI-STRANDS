"use client";

import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { getProduct, priceFor } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { StitchHeader, StitchFooter } from "@/components/stitch/SiteChrome";
import { posterFor } from "@/lib/media";
import { Icon } from "@/components/ui/icon";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, hydrated } = useStore();
  const items = wishlist.map(getProduct).filter(Boolean);

  return (
    <div className="scr-wishlist theme-noir bg-surface text-on-surface font-body-md overflow-x-hidden">
      <StitchHeader />
      <header className="pt-40 pb-16 md:pt-60 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
          Saved Pieces
        </span>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8">
          The Wishlist
        </h1>
        <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
          Pieces you have set aside. They remain here on this device until you
          are ready.
        </p>
      </header>

      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-padding">
        {!hydrated ? null : items.length === 0 ? (
          <div className="border border-outline-variant/30 bg-surface-container-lowest p-16 text-center">
            {/* Decorative empty state, not an affordance. */}
            <Icon name="favorite" className="text-primary text-5xl mb-8 block" />
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-10">
              Nothing saved yet.
            </p>
            <Link
              className="bg-on-surface text-surface px-12 py-5 rounded-lg font-label-caps tracking-widest hover:bg-primary transition-all duration-500 uppercase inline-block"
              href="/shop"
            >
              Explore the Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-20">
            {items.map((product) => (
              <div key={product!.slug} className="group">
                <Link href={`/shop/${product!.slug}`}>
                  <div className="aspect-[4/5] overflow-hidden bg-surface-dim mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={product!.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={posterFor(product!.slug)}
                    />
                  </div>
                  <h2 className="font-display-md text-headline-lg mb-2">
                    {product!.name}
                  </h2>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="font-body-md text-body-sm text-on-surface-variant uppercase tracking-widest">
                    {formatPrice(priceFor(product!))}
                  </p>
                  <button
                    className="font-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
                    onClick={() => toggleWishlist(product!.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <StitchFooter />
    </div>
  );
}
