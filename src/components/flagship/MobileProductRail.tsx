"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, priceFrom, type Product } from "@/lib/products";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { ORIGINS, TEXTURES } from "@/lib/products";

/**
 * The desktop product row, re-flowed for a phone.
 *
 * The card is the desktop card — same 4:5 frame, same label / name / arrow
 * beneath it, same serif at the same relative weight. What changes is the
 * container: four across becomes one and a bit across on a horizontal rail,
 * so a card stays at the size the design intended rather than shrinking to a
 * quarter of a phone screen. The partial card at the right edge is the only
 * affordance the pattern needs — no dots, no arrows.
 *
 * Native scroll-snap does the gesture, so momentum and rubber-banding are the
 * platform's own rather than a JS carousel reimplementing them badly.
 *
 * Below `md` only. The desktop grid is untouched above it.
 */
export function MobileProductRail({
  items,
  eyebrow,
  title,
  href = "/shop",
  cta = "Shop all",
  tone = "dark",
}: {
  items: Product[];
  eyebrow: string;
  title: React.ReactNode;
  href?: string;
  cta?: string;
  /** The ground the rail sits on. Drives the accent, not the layout. */
  tone?: "dark" | "light";
}) {
  const reduceMotion = useReducedMotion();

  /*
   * #c8a45d is the house gold and reads correctly on noir. On the cream
   * ground it lands at roughly 2:1 against #f5f0e8 — well under the 4.5:1
   * small text needs — so the light tone uses the darker #8b6244 the cream
   * chapters already use for their eyebrows.
   */
  const light = tone === "light";
  const accent = light ? "text-[#8b6244]" : "text-[#c8a45d]";
  const accentBg = light ? "bg-[#8b6244]" : "bg-[#c8a45d]";
  const muted = light ? "text-[#0b0907]/55" : "text-white/50";
  const ctaText = light ? "text-[#0b0907]/70 hover:text-[#8b6244]" : "text-white/70 hover:text-[#c8a45d]";
  const rule = light ? "border-[#0b0907]/20" : "border-white/15";

  return (
    <div className="md:hidden">
      <div className="px-6">
        <p className={`mb-4 flex items-center gap-3 text-[8px] uppercase tracking-[.5em] ${accent}`}>
          <span aria-hidden="true" className={`h-px w-6 ${accentBg}`} />
          {eyebrow}
        </p>
        <h2 className="font-serif text-[clamp(2.4rem,10vw,3.5rem)] leading-[.9] tracking-[-.04em]">
          {title}
        </h2>
      </div>

      {/*
        Full-bleed rail: it starts at the page's 24px gutter and runs off the
        right edge, so the partial card at the end is the affordance.
        `snap-x` with `snap-start` on each card means a swipe lands on a
        piece rather than between two.
      */}
      <ul
        className="mt-8 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((p, i) => {
          const media = heroFor(p.slug);
          const from = priceFrom(p);
          /* Lengths live on the variants, not the product. */
          const ls = p.variants.map((v) => v.length).filter(Boolean).sort((a, b) => a - b);
          const lengths = ls.length
            ? ls[0] === ls[ls.length - 1]
              ? `${ls[0]}"`
              : `${ls[0]}–${ls[ls.length - 1]}"`
            : null;
          return (
            <motion.li
              key={p.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: Math.min(i, 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              /* 78% leaves a clear slice of the next card at every width from
                 320 up, which is the whole point of the rail. */
              className="w-[78%] shrink-0 snap-start"
            >
              <Link href={`/shop/${p.slug}`} className="group block">
                {/*
                  The desktop card, at phone width — not a different card.
                  Same 4:5 frame, same label / name / arrow line beneath it,
                  same serif. The desktop grid renders this composition four
                  across; the rail renders it one and a bit across. Nothing
                  about the card itself changes.
                */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#141110]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={media.type === "video" ? (media.poster ?? media.src) : media.src}
                    alt={media.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[center_25%] transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-active:scale-[1.03]"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 pt-4">
                  <div className="min-w-0">
                    <p className={`text-[8px] uppercase tracking-[.35em] ${accent}`}>
                      {ORIGINS[p.origin]} {p.sdd ? "SDD" : ""}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl leading-tight">{p.name}</h3>
                    <p className={`mt-2 text-[13px] leading-6 ${muted}`}>
                      {TEXTURES[p.texture]}
                      {lengths ? ` · ${lengths}` : ""}
                      {from !== null ? ` · from ${formatPrice(from)}` : ""}
                    </p>
                  </div>
                  <ArrowRight
                    size={17}
                    className={`mt-2 shrink-0 ${accent} transition group-hover:translate-x-1`}
                  />
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-8 px-6">
        <Link
          href={href}
          className={`group flex items-center justify-between border-t ${rule} pt-5 text-[9px] uppercase tracking-[.32em] ${ctaText} transition-colors`}
        >
          {cta}
          <ArrowRight size={15} className={`${accent} transition group-hover:translate-x-1`} />
        </Link>
      </div>
    </div>
  );
}

/** The pieces the homepage rail shows — the first of each collection. */
export function houseRailProducts(): Product[] {
  const seen = new Set<string>();
  const picked: Product[] = [];
  for (const p of products) {
    if (p.collection && !seen.has(p.collection)) {
      seen.add(p.collection);
      picked.push(p);
    }
  }
  return picked.length >= 4 ? picked : products.slice(0, 6);
}
