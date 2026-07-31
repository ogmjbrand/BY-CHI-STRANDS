"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";
import { useStore, linePrice, lineIsQuote } from "@/context/StoreContext";
import { getProduct } from "@/lib/products";
import { posterFor } from "@/lib/media";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_shopping_bag_sidebar
 * "ByChi Strands | Shopping Bag"
 *
 * Full-page equivalent of CartDrawer for visitors who land on /cart
 * directly (several pages link here instead of opening the drawer) —
 * reads the same real useStore() cart rather than a hardcoded mockup.
 */

const money = (n: number) =>
  n.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

export default function ShoppingBagPage() {
  const { cart, updateQty, removeLine, cartTotal, hydrated } = useStore();

  return (
    <div className="scr-shopping-bag-sidebar theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <SiteHeader dark />

      <main className="flex-1 max-w-4xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-padding">
        <header className="mb-12">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-2 tracking-[-0.02em]">
            Your Selection
          </h1>
          <p className="font-body-sm text-body-sm text-tertiary tracking-wide uppercase">
            Private Concierge Experience
          </p>
        </header>

        {!hydrated ? null : cart.length === 0 ? (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-primary text-5xl mb-8 block opacity-40">
              shopping_bag
            </span>
            <p className="font-body-xl text-body-xl text-tertiary mb-10">
              Your selection is empty.
            </p>
            <Link
              href="/shop"
              className="inline-block px-12 py-4 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 rounded-lg uppercase"
            >
              Explore the Collection
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_360px] gap-16">
            <section className="space-y-10">
              {cart.map((line, i) => {
                const product = getProduct(line.slug);
                if (!product) return null;
                return (
                  <div
                    key={`${line.slug}-${line.length}-${line.density ?? ""}-${line.lace ?? ""}`}
                    className="group flex gap-6"
                  >
                    <Link
                      href={`/shop/${product.slug}`}
                      className="w-28 h-40 md:w-32 md:h-44 bg-surface-container-high relative overflow-hidden shrink-0"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={posterFor(product.slug)}
                      />
                    </Link>

                    <div className="flex flex-col justify-between py-1 flex-1">
                      <div>
                        <p className="font-body-sm text-[11px] text-primary tracking-[0.2em] uppercase mb-1">
                          {product.collection.replace(/-/g, " ")}
                        </p>
                        <h3 className="font-display-md text-body-xl font-medium mb-2">
                          <Link href={`/shop/${product.slug}`}>{product.name}</Link>
                        </h3>
                        <div className="space-y-1">
                          <p className="font-body-sm text-tertiary">
                            Length: {line.length}&quot;
                          </p>
                          {line.density ? (
                            <p className="font-body-sm text-tertiary">Density: {line.density}</p>
                          ) : null}
                          {line.lace ? (
                            <p className="font-body-sm text-tertiary">Cap: {line.lace}</p>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex justify-between items-end gap-4">
                        <div className="flex items-center border border-outline-variant/40">
                          <button
                            onClick={() => updateQty(i, line.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center text-tertiary hover:text-primary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="w-8 text-center font-body-sm tabular-nums">
                            {line.qty}
                          </span>
                          <button
                            onClick={() => updateQty(i, line.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center text-tertiary hover:text-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-body-md font-semibold text-on-surface">
                            {lineIsQuote(line) ? "Quoted after order" : money(linePrice(line) * line.qty)}
                          </p>
                          <button
                            onClick={() => removeLine(i)}
                            className="text-tertiary hover:text-error transition-colors text-xs font-label-caps border-b border-outline-variant/50 pb-0.5 mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-sm">
                    auto_awesome
                  </span>
                  <h4 className="font-label-caps text-on-surface-variant">Concierge Notes</h4>
                </div>
                <textarea
                  className="w-full bg-surface-bright border border-outline-variant/30 p-4 font-body-sm focus:border-primary-container focus:ring-0 transition-colors placeholder:text-outline/50 resize-none h-24"
                  placeholder="Add special requests for your stylist or concierge..."
                />
              </section>
            </section>

            <aside className="bg-surface-container-low border border-outline-variant/20 p-8 h-fit space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between font-body-sm text-tertiary">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{money(cartTotal)}</span>
                </div>
                <div className="flex justify-between font-body-sm text-tertiary italic">
                  <span>White-Glove Shipping</span>
                  <span className="text-primary">Complimentary</span>
                </div>
                <div className="flex justify-between items-baseline pt-3 border-t border-outline-variant/20">
                  <span className="font-label-caps text-on-surface">Total</span>
                  <span className="font-display-md text-headline-lg text-on-surface tabular-nums">
                    {money(cartTotal)}
                  </span>
                </div>
                {cart.some(lineIsQuote) ? (
                  <p className="text-right font-body-sm text-[11px] text-tertiary italic">
                    Plus {cart.filter(lineIsQuote).length} piece
                    {cart.filter(lineIsQuote).length === 1 ? "" : "s"} quoted after order
                  </p>
                ) : null}
              </div>

              <Link
                href="/checkout"
                className="block w-full text-center py-5 bg-on-surface text-surface font-label-caps tracking-[0.25em] uppercase hover:bg-primary hover:text-on-primary transition-all duration-500"
              >
                Complete Investment
              </Link>

              <div className="flex justify-center gap-8 pt-2">
                <div className="flex items-center gap-2 opacity-60">
                  <span className="material-symbols-outlined text-sm">security</span>
                  <span className="text-[10px] uppercase font-label-caps">Secure Atelier</span>
                </div>
                <a
                  href={whatsappLink("Hi ByChiStrands — I have a question about my bag.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span className="material-symbols-outlined text-sm">help</span>
                  <span className="text-[10px] uppercase font-label-caps">Concierge Help</span>
                </a>
              </div>
            </aside>
          </div>
        )}
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop py-8 text-center">
          <p className="font-body-sm text-[12px] text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} {site.name}. Timeless Vietnamese Artistry.
          </p>
        </div>
      </footer>
    </div>
  );
}
