"use client";

import { motion } from "framer-motion";
import { IconStrand, IconSingleThread, IconLeaf, IconGlobeRoute } from "./BrandIcons";

/**
 * Full-bleed swipe section, not a boxed strip — real photo fills the
 * viewport, the four trust signals float over it as plain text (no card
 * chrome, no dividers). Every claim already exists elsewhere on the site
 * (site.description, FAQs, product copy) — nothing new is asserted here.
 */
const SIGNALS = [
  { Icon: IconStrand, label: "Vietnamese Human Hair", detail: "Authentic & Premium Quality" },
  { Icon: IconSingleThread, label: "Single Donor Hair", detail: "One Donor, One Bundle" },
  { Icon: IconLeaf, label: "Ethically Sourced", detail: "Responsibly & Ethically Sourced" },
  { Icon: IconGlobeRoute, label: "Worldwide Shipping", detail: "Fast & Secure Delivery" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function TrustBar() {
  return (
    <section className="relative isolate min-h-[100svh] flex items-center overflow-hidden bg-noir snap-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/products/IMG-20260727-WA0045.jpg"
        alt="Copper, wine and espresso Vietnamese hair units displayed together"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/20" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14"
      >
        {SIGNALS.map((s) => (
          <motion.div key={s.label} variants={item} className="flex flex-col gap-3">
            <s.Icon className="w-8 h-8 text-gold" />
            <span className="font-display-md text-headline-lg-mobile text-white tracking-[-0.01em]">
              {s.label}
            </span>
            <span className="font-body-sm text-[13px] text-white/60">{s.detail}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
