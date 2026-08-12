"use client";

import Link from "next/link";
import { useStore, linePrice, lineIsQuote } from "@/context/StoreContext";
import { getProduct } from "@/lib/products";
import { posterFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_shopping_bag_sidebar
 * "ByChi Strands | Shopping Bag"
 *
 * Rebuilt on the real cart (useStore()) — the previous version was a fully
 * static mockup showing an invented "$5,970.00" bag regardless of what was
 * actually in localStorage.
 */
export default function ShoppingBagPage() {
  const { cart, cartTotal, hydrated, updateQty, removeLine } = useStore();

  return (
    /*
     * theme-noir: without it this page fell back to the light Editorial
     * Couture cream while every other page — including the checkout it hands
     * off to — is noir, so the bag was a white interruption mid-funnel.
     */
    <div className="scr-shopping-bag-sidebar theme-noir bg-surface text-on-surface font-body-md min-h-screen">
      <header className="border-b border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-6">
        <div className="max-w-container-max mx-auto flex items-center justify-between">
          <Link href="/">
            <Wordmark size="sm" withSeal />
          </Link>
          <Link href="/shop" className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
            Continue Shopping
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <h1 className="font-display-lg text-3xl md:text-5xl mb-2">Your Selection</h1>
        <p className="font-body-sm text-on-surface-variant mb-12">Private concierge experience.</p>

        {!hydrated ? null : cart.length === 0 ? (
          /*
           * The empty bag is a real moment, not a dead end: a way into the
           * catalogue, a way to be guided to a piece, and a way to reach a
           * person. All three destinations exist.
           */
          <div className="border-t border-outline-variant/25 pt-16 md:pt-20">
            <p className="font-display-md text-2xl leading-snug text-on-surface md:text-3xl">
              Nothing chosen yet.
            </p>
            <p className="mt-5 max-w-md font-body-md leading-relaxed text-on-surface-variant">
              Every piece is imported raw and finished by hand in Lagos, so the
              collection is deliberately small. Start with a texture, or let us
              narrow it for you.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/shop"
                className="bg-primary px-9 py-4 text-center font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-primary transition-opacity hover:opacity-90"
              >
                Explore the Collection
              </Link>
              <Link
                href="/hair-finder"
                className="border border-outline/40 px-9 py-4 text-center font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                Take the Hair Finder
              </Link>
            </div>

            <div className="mt-14 border-t border-outline-variant/25 pt-10">
              <p className="font-label-caps text-[11px] uppercase tracking-[0.25em] text-primary">
                Not sure what you need?
              </p>
              <p className="mt-4 max-w-md font-body-md leading-relaxed text-on-surface-variant">
                Tell the concierge your texture, your length and how you wear it,
                and we will tell you honestly what suits — including when the
                answer is nothing we currently stock.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block w-fit border-b border-primary pb-1 font-label-caps text-[11px] uppercase tracking-[0.2em] text-primary"
              >
                Ask the Concierge
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-10 mb-16">
              {cart.map((line, i) => {
                const product = getProduct(line.slug);
                if (!product) return null;
                return (
                  <div
                    key={`${line.slug}-${line.length}-${line.lace ?? ""}`}
                    className="flex gap-6 pb-10 border-b border-outline-variant/20"
                  >
                    <Link
                      href={`/shop/${product.slug}`}
                      className="w-28 md:w-32 aspect-[3/4] bg-surface-container overflow-hidden shrink-0"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover"
                        src={posterFor(product.slug)}
                      />
                    </Link>
                    <div className="min-w-0 flex-1 flex flex-col justify-between py-1">
                      <div>
                        <Link href={`/shop/${product.slug}`} className="font-display-md text-xl hover:text-primary transition-colors">
                          {product.name}
                        </Link>
                        <div className="mt-2 space-y-1 font-body-sm text-on-surface-variant">
                          <p>Length: {line.length}&quot;</p>
                          {line.lace ? <p>Cap: {line.lace}</p> : null}
                        </div>
                      </div>
                      <div className="mt-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-4">
                        <div className="flex items-center border border-outline-variant/40">
                          <button
                            onClick={() => updateQty(i, line.qty - 1)}
                            aria-label="Decrease quantity"
                            className="w-9 h-9 flex items-center justify-center hover:text-primary transition-colors"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-label-caps">{line.qty}</span>
                          <button
                            onClick={() => updateQty(i, line.qty + 1)}
                            aria-label="Increase quantity"
                            className="w-9 h-9 flex items-center justify-center hover:text-primary transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6">
                          <p className="font-body-md font-semibold text-primary">
                            {lineIsQuote(line)
                              ? "Quoted after order"
                              : formatPrice(linePrice(line) * line.qty)}
                          </p>
                          <button
                            onClick={() => removeLine(i)}
                            className="text-on-surface-variant hover:text-error transition-colors text-xs font-label-caps border-b border-outline-variant/50 pb-0.5"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex justify-between font-body-md">
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="tabular-nums">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between font-body-md">
                <span className="text-on-surface-variant">Shipping</span>
                <span className="text-primary italic">Quoted after order</span>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-baseline">
                <span className="font-headline-lg text-xl">Total</span>
                <span className="font-display-md text-xl tabular-nums">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full block text-center py-5 bg-on-surface text-surface font-label-caps tracking-[0.2em] uppercase hover:bg-primary transition-all duration-500"
            >
              Proceed to Checkout
            </Link>
          </>
        )}
      </main>
    </div>
  );
}
