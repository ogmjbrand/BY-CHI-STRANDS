"use client";

import Link from "next/link";
import { useStore, linePrice } from "@/context/StoreContext";
import { getProduct } from "@/lib/products";
import { posterFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";

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
    <div className="scr-shopping-bag-sidebar bg-surface text-on-surface font-body-md min-h-screen">
      <header className="border-b border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-6">
        <div className="max-w-container-max mx-auto flex items-center justify-between">
          <Link href="/" className="font-display-md text-2xl tracking-tighter">
            ByChi Strands
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
          <div className="border border-outline-variant/30 bg-surface-container-lowest p-16 text-center">
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-8">
              Your bag is empty.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-on-surface text-surface px-10 py-4 font-label-caps tracking-widest hover:bg-primary transition-all duration-500 uppercase"
            >
              Explore the Collection
            </Link>
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
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <Link href={`/shop/${product.slug}`} className="font-display-md text-xl hover:text-primary transition-colors">
                          {product.name}
                        </Link>
                        <div className="mt-2 space-y-1 font-body-sm text-on-surface-variant">
                          <p>Length: {line.length}&quot;</p>
                          {line.lace ? <p>Cap: {line.lace}</p> : null}
                        </div>
                      </div>
                      <div className="flex items-end justify-between mt-6">
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
                        <div className="flex items-center gap-6">
                          <p className="font-body-md font-semibold text-primary">
                            {formatPrice(linePrice(line) * line.qty)}
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
