"use client";

import { useState } from "react";
import Link from "next/link";
import { useStore, linePrice, lineIsQuote } from "@/context/StoreContext";
import { getProduct } from "@/lib/products";
import { posterFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

/**
 * The checkout order summary, driven by the real bag. Markup follows the
 * Luxury Checkout screen; shipping is quoted by the atelier after the order is
 * placed, which is how the house actually ships, so no invented figure is
 * shown here.
 */
export function CheckoutSummary() {
  const { cart, cartTotal, hydrated } = useStore();

  if (!hydrated) return null;

  if (cart.length === 0) {
    return (
      <div>
        <h3 className="font-headline-lg text-headline-lg mb-8">Your Atelier Bag</h3>
        <p className="text-body-md text-outline mb-8">
          Your bag is empty — there is nothing to check out yet.
        </p>
        <Link
          href="/shop"
          className="inline-block w-full text-center bg-on-surface text-surface py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary transition-all duration-500 uppercase"
        >
          Explore the Collection
        </Link>
      </div>
    );
  }

  return (
    <>
      <div>
        <h3 className="font-headline-lg text-headline-lg mb-8">Your Atelier Bag</h3>

        {cart.map((line) => {
          const product = getProduct(line.slug);
          if (!product) return null;
          return (
            <div
              key={`${line.slug}-${line.length}-${line.lace ?? ""}`}
              className="flex gap-6 items-start pb-8 mb-8 border-b border-outline-variant/20"
            >
              <Link
                href={`/shop/${product.slug}`}
                className="w-28 md:w-32 aspect-[3/4] bg-surface-container overflow-hidden shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={product.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src={posterFor(product.slug)}
                />
              </Link>

              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <h4 className="font-body-md font-bold text-on-surface mb-1">
                    {product.name}
                  </h4>
                  <div className="space-y-1">
                    <p className="text-body-sm text-outline">
                      Length: {line.length}&quot;
                    </p>
                    {line.lace ? (
                      <p className="text-body-sm text-outline">Cap: {line.lace}</p>
                    ) : null}
                    <p className="text-body-sm text-outline">
                      Quantity: {line.qty}
                    </p>
                  </div>
                </div>
                <p className="text-body-md font-semibold text-primary mt-4">
                  {lineIsQuote(line) ? "Quoted after order" : formatPrice(linePrice(line) * line.qty)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Totals */}
      <div className="space-y-4">
        <div className="flex justify-between text-body-md">
          <span className="text-outline">Subtotal</span>
          <span className="text-on-surface tabular-nums">
            {formatPrice(cartTotal)}
          </span>
        </div>
        <div className="flex justify-between text-body-md">
          <span className="text-outline">Shipping</span>
          <span className="text-on-surface">Quoted after order</span>
        </div>
        <div className="pt-6 border-t border-outline-variant flex justify-between items-baseline">
          <span className="font-headline-lg text-headline-lg">Total</span>
          <span className="font-display-md text-headline-lg text-on-surface tabular-nums">
            {formatPrice(cartTotal)}
          </span>
        </div>
        {cart.some(lineIsQuote) ? (
          <p className="text-right text-body-sm text-outline italic">
            Plus {cart.filter(lineIsQuote).length} piece
            {cart.filter(lineIsQuote).length === 1 ? "" : "s"} quoted after order
          </p>
        ) : null}
      </div>
    </>
  );
}

/**
 * The small-viewport variant: a collapsible strip showing the live total,
 * expanding to the same line detail. Mirrors the mobile checkout screen.
 */
export function MobileCheckoutSummary() {
  const { cart, cartTotal, hydrated } = useStore();
  const [open, setOpen] = useState(false);

  if (!hydrated) return null;

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 border-y border-outline-variant/20"
      >
        <div className="flex items-center gap-3">
          {/* Emphatically not a bag trigger. StoreBridge binds the nearest
              button/anchor ancestor, which here is the Show/Hide Summary
              disclosure — so marking this icon made tapping "Show Summary"
              open the cart drawer instead of expanding the summary. */}
          <Icon name="shopping_bag" className="text-primary" />
          <span className="font-label-caps text-label-caps uppercase tracking-[0.15em]">
            {open ? "Hide Summary" : "Show Summary"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
            {formatPrice(cartTotal)}
          </span>
          <Icon name="expand_more" className="transition-transform duration-300" style={{ transform: open ? "rotate(180deg)" : "none" }} />
        </div>
      </button>

      {open ? (
        <div className="pt-8 space-y-6">
          {cart.length === 0 ? (
            <p className="text-body-sm text-on-surface-variant">
              Your bag is empty.
            </p>
          ) : (
            <>
              <div className="space-y-5">
                {cart.map((line) => {
                  const product = getProduct(line.slug);
                  if (!product) return null;
                  return (
                    <div
                      key={`${line.slug}-${line.length}-${line.lace ?? ""}`}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-16 aspect-[3/4] bg-surface-container overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={product.name}
                          className="w-full h-full object-cover"
                          src={posterFor(product.slug)}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body-sm font-semibold truncate">
                          {product.name}
                        </p>
                        <p className="text-body-sm text-on-surface-variant">
                          {line.length}&quot;
                          {line.lace ? ` · ${line.lace}` : ""} · ×{line.qty}
                        </p>
                      </div>
                      <span className="font-label-caps text-label-caps tracking-[0.15em] shrink-0">
                        {lineIsQuote(line) ? "Quoted" : formatPrice(linePrice(line) * line.qty)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-outline-variant/20 pt-6 space-y-3">
                <div className="flex justify-between text-body-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-body-sm">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="text-primary italic">Quoted after order</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-outline-variant/10">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.15em]">
                    Total Due
                  </span>
                  <span className="font-headline-lg text-headline-lg text-primary">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                {cart.some(lineIsQuote) ? (
                  <p className="text-right text-body-sm text-on-surface-variant italic">
                    Plus {cart.filter(lineIsQuote).length} piece
                    {cart.filter(lineIsQuote).length === 1 ? "" : "s"} quoted after order
                  </p>
                ) : null}
              </div>
            </>
          )}
        </div>
      ) : null}
    </>
  );
}
