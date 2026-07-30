"use client";

import { motion } from "framer-motion";

/**
 * Gold credibility strip directly under the hero. Every claim already exists
 * elsewhere on the site (site.description, FAQs, product copy) — nothing new
 * is asserted here.
 */
const SIGNALS = [
  {
    icon: "workspace_premium",
    label: "Vietnamese Human Hair",
    detail: "Authentic & Premium Quality",
  },
  {
    icon: "fingerprint",
    label: "Single Donor Hair",
    detail: "One Donor, One Bundle",
  },
  {
    icon: "eco",
    label: "Ethically Sourced",
    detail: "Responsibly & Ethically Sourced",
  },
  {
    icon: "public",
    label: "Worldwide Shipping",
    detail: "Fast & Secure Delivery",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function TrustBar() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="bg-primary-container"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-on-primary-container/15">
          {SIGNALS.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="flex flex-col items-center text-center gap-2 px-4 py-8 md:py-10"
            >
              <span className="material-symbols-outlined text-on-primary-container text-[26px] mb-1">
                {s.icon}
              </span>
              <span className="font-label-caps text-[11px] uppercase tracking-[0.14em] text-on-primary-container">
                {s.label}
              </span>
              <span className="font-body-sm text-[12px] text-on-primary-container/70">
                {s.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
