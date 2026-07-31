"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "./CartDrawer";
import { useToast } from "./Toast";
import { priceFor, lengthsOf, lacesOf, type Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { IconAuthTag, IconShipInsured, IconExchange } from "./BrandIcons";

/**
 * The PDP sidebar — length and lace selection driving a live price and the Add
 * to Atelier Bag action. Markup mirrors the screen; `variant` picks the desktop
 * sidebar or the compact mobile sheet. Configurations the house quotes on
 * request still go through the real bag/checkout flow with a null price
 * (never an invented figure); "Ask on WhatsApp" is a separate, always-present
 * option for shoppers who'd rather check first.
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
      <div className="space-y-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={total ?? "enquiry"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-md text-2xl text-primary"
            aria-live="polite"
          >
            {formatPrice(total)}
          </motion.p>
        </AnimatePresence>
        {total === null ? (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            This piece is quoted on request — add it to your bag with the
            length and closure you want and our concierge will confirm the
            price by email, or ask us on WhatsApp first if you&apos;d rather
            check before ordering.
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
                  ? "border border-primary bg-primary text-on-primary px-6 py-2 text-xs font-label-caps"
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
        <MagneticButton className="w-full" strength={10}>
          <button
            onClick={add}
            className="w-full bg-primary text-on-primary py-5 font-label-caps tracking-widest text-sm hover:bg-secondary transition-colors duration-500 active:scale-95 flex items-center justify-center gap-3"
          >
            {total === null ? "PLACE ORDER REQUEST" : "ADD TO ATELIER BAG"}
            <span className="material-symbols-outlined text-lg">trending_flat</span>
          </button>
        </MagneticButton>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={enquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-outline-variant py-4 font-label-caps tracking-widest text-xs hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2 text-center"
          >
            <span className="material-symbols-outlined text-base">chat_bubble</span>
            ASK ON WHATSAPP
          </a>
          <button
            onClick={() => toggleWishlist(product.slug)}
            className="border border-outline-variant py-4 font-label-caps tracking-widest text-xs hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            <span
              className={`material-symbols-outlined text-base ${saved ? "text-primary" : ""}`}
              style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
            {saved ? "SAVED" : "SAVE"}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-outline-variant/20">
          {[
            { Icon: IconAuthTag, label: "Authenticity Tag" },
            { Icon: IconShipInsured, label: "Insured Shipping" },
            { Icon: IconExchange, label: "7-Day Exchange" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-1.5 text-center pt-3"
            >
              <badge.Icon className="w-[18px] h-[18px] text-primary" />
              <span className="text-[9px] uppercase tracking-wider text-on-surface-variant leading-tight">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4 border-t border-outline-variant/20">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <strong className="text-on-surface">Order this yourself, right now</strong> —
            add to bag with the length and closure above, enter your shipping
            address at checkout, and our concierge confirms{" "}
            {total === null ? "the price and " : ""}payment by email. No need
            to message us first.
          </p>
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary text-lg shrink-0">local_shipping</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Lagos same-week courier, nationwide Nigeria in 2–4 business days,
              international via DHL Express in 3–7 business days — fully
              tracked and insured.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary text-lg shrink-0">package_2</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Every order arrives in our signature packaging: silk-wrapped
              hair inside a rigid gift box, with a care card and
              authentication tag. Wig units ship on a protective form to
              preserve the lace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
