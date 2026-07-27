"use client";

import { useEffect, useMemo, useState } from "react";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "./CartDrawer";
import { useToast } from "./Toast";
import { priceFor, lengthsOf, lacesOf, type Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";

/**
 * The PDP sidebar — length and lace selection driving a live price and the Add
 * to Atelier Bag action. Markup mirrors the screen; `variant` picks the desktop
 * sidebar or the compact mobile sheet. Configurations the house quotes on
 * enquiry swap the bag button for a pre-filled WhatsApp message rather than
 * showing an invented figure.
 */

export function ProductConfigurator({
  product,
  variant = "desktop",
}: {
  product: Product;
  variant?: "desktop" | "mobile";
}) {
  const { addToCart, trackView, wishlist, toggleWishlist, hydrated } = useStore();
  const { openCart } = useCartUi();
  const { notify } = useToast();

  const lengths = useMemo(() => lengthsOf(product), [product]);
  const [length, setLength] = useState(lengths[0]);
  const laces = useMemo(() => lacesOf(product, length), [product, length]);
  const [lace, setLace] = useState(laces[0]);

  // Keep the lace valid when the chosen length offers a different set.
  useEffect(() => {
    if (!laces.includes(lace)) setLace(laces[0]);
  }, [laces, lace]);

  useEffect(() => {
    trackView(product.slug);
  }, [product.slug, trackView]);

  const total = useMemo(
    () => priceFor(product, length, lace),
    [product, length, lace]
  );

  const saved = hydrated && wishlist.includes(product.slug);

  const enquiry = whatsappLink(
    `Hi ByChiStrands — I'd like a price for the ${product.name}, ${length}" ${lace}.`
  );

  const add = () => {
    addToCart({ slug: product.slug, length, lace });
    notify("Added to your selection", `${product.name} · ${length}"`);
    openCart();
  };

  const compact = variant === "mobile";

  return (
    <div className={compact ? "space-y-6" : "space-y-8"}>
      {/* Price */}
      <div className="space-y-2">
        <p className="font-display-md text-2xl text-primary" aria-live="polite">
          {formatPrice(total)}
        </p>
        {total === null ? (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            This piece is quoted on enquiry — message us and we&apos;ll send the
            price and availability straight back.
          </p>
        ) : null}
      </div>

      {/* Length */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <label className="font-label-caps text-xs">LENGTH</label>
          <span className="text-xs text-on-surface-variant underline cursor-pointer">
            Sizing Guide
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {lengths.map((l) => (
            <button
              key={l}
              onClick={() => setLength(l)}
              aria-pressed={l === length}
              className={
                l === length
                  ? "border border-primary bg-primary text-white px-6 py-2 text-xs font-label-caps"
                  : "border border-outline-variant hover:border-primary px-6 py-2 text-xs font-label-caps transition-colors"
              }
            >
              {l}&quot;
            </button>
          ))}
        </div>
      </div>

      {/* Lace */}
      {laces.length ? (
        <div className="space-y-4">
          <label className="font-label-caps text-xs">CLOSURE / LACE</label>
          <div className="space-y-3">
            {laces.map((l) => {
              const on = l === lace;
              const at = priceFor(product, length, l);
              return (
                <button
                  key={l}
                  onClick={() => setLace(l)}
                  aria-pressed={on}
                  className={`w-full text-left flex items-center gap-4 border p-4 cursor-pointer group transition-colors ${
                    on ? "border-primary" : "border-outline-variant hover:border-primary/60"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      on ? "border-primary" : "border-outline-variant"
                    }`}
                  >
                    {on ? <div className="w-2 h-2 rounded-full bg-primary" /> : null}
                  </div>
                  <div className="flex-1">
                    <p className="font-label-caps text-xs">{l}</p>
                  </div>
                  <span className="text-body-sm text-on-surface-variant">
                    {formatPrice(at)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* CTA */}
      <div className="pt-4 space-y-4">
        {total === null ? (
          <a
            href={enquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-on-surface text-surface py-5 font-label-caps tracking-widest text-sm hover:bg-primary transition-all duration-500 scale-100 active:scale-95 flex items-center justify-center gap-3"
          >
            ENQUIRE ON WHATSAPP
            <span className="material-symbols-outlined text-lg">trending_flat</span>
          </a>
        ) : (
          <button
            onClick={add}
            className="w-full bg-on-surface text-surface py-5 font-label-caps tracking-widest text-sm hover:bg-primary transition-all duration-500 scale-100 active:scale-95 flex items-center justify-center gap-3"
          >
            ADD TO ATELIER BAG
            <span className="material-symbols-outlined text-lg">trending_flat</span>
          </button>
        )}

        <button
          onClick={() => toggleWishlist(product.slug)}
          className="w-full border border-outline-variant py-4 font-label-caps tracking-widest text-xs hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <span
            className={`material-symbols-outlined text-base ${saved ? "text-primary" : ""}`}
            style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
          {saved ? "SAVED" : "SAVE FOR LATER"}
        </button>

        <p className="text-center text-[10px] text-on-surface-variant tracking-wider uppercase">
          Nationwide delivery from Lagos · Worldwide on request
        </p>
      </div>
    </div>
  );
}
