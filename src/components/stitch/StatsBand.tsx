"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TEXTURES, products } from "@/lib/products";

/**
 * Bold, high-contrast numbers pulled straight from the live catalogue data
 * (src/lib/products.ts) — nothing here is invented copy. Distinct from
 * TrustBar (which sells the product) and CollectionQuickNav (which
 * navigates); this one is a graphic, editorial "about the house" moment.
 */
const STATS = [
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
    <section className="relative overflow-hidden bg-noir py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary-container/20 blur-3xl" />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary-container/80">
              The House at a Glance
            </p>
            <h2 className="max-w-2xl font-display-lg text-3xl leading-[1.02] tracking-[-0.02em] text-white md:text-4xl">
              An inventory shaped by scarcity, craft, and a precise point of view.
            </h2>
          </div>
          <a
            href="/collections"
            className="group inline-flex items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em] text-white/75 transition-colors hover:text-white"
          >
            Browse the edit
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={rise}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-center md:text-left"
            >
              <p className="font-display-lg text-[13vw] leading-none tracking-[-0.03em] text-primary-container md:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 font-label-caps text-[11px] uppercase tracking-[0.18em] text-white/70">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
