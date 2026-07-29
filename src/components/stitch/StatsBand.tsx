"use client";

import { motion } from "framer-motion";
import { ORIGINS, TEXTURES, products } from "@/lib/products";

/**
 * Bold, high-contrast numbers pulled straight from the live catalogue data
 * (src/lib/products.ts) — nothing here is invented copy. Distinct from
 * TrustBar (which sells the product) and CollectionQuickNav (which
 * navigates); this one is a graphic, editorial "about the house" moment.
 */
const STATS = [
  { value: String(Object.keys(ORIGINS).length), label: "Sourcing Origins" },
  { value: String(Object.keys(TEXTURES).length), label: "Signature Textures" },
  { value: `${products.length}+`, label: "Curated Pieces" },
  { value: "Lagos", label: "Studio, Shipped Worldwide" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-on-surface py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary-container/20 blur-3xl" />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={rise} className="text-center md:text-left">
            <p className="font-display-lg text-[13vw] leading-none tracking-[-0.03em] text-primary-container md:text-6xl">
              {s.value}
            </p>
            <p className="font-label-caps text-[11px] uppercase tracking-[0.18em] text-surface/70 mt-3">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
