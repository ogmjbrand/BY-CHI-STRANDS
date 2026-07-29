"use client";

import { motion } from "framer-motion";

/**
 * A slim credibility strip, distinct from the "Three Pillars" storytelling
 * section further down the page — this one is transactional (grade,
 * traceability, durability, shipping), the facts a buyer checks before
 * paying premium prices. Every claim here already exists elsewhere on the
 * site (FAQs, product copy): nothing new is asserted.
 */
const SIGNALS = [
  {
    icon: "workspace_premium",
    label: "Super Double Drawn",
    detail: "Full density, root to tip",
  },
  {
    icon: "fingerprint",
    label: "Single Donor Traceable",
    detail: "Every bundle, one source",
  },
  {
    icon: "history_toggle_off",
    label: "5+ Years With Care",
    detail: "Bundles outlast the trend",
  },
  {
    icon: "local_shipping",
    label: "Lagos & Worldwide",
    detail: "Same-week local, DHL abroad",
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
      className="border-y border-outline-variant/20 bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-outline-variant/15">
          {SIGNALS.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="flex flex-col items-center text-center gap-2 px-4 py-8 md:py-10"
            >
              <span className="material-symbols-outlined text-primary text-[26px] mb-1">
                {s.icon}
              </span>
              <span className="font-label-caps text-[11px] uppercase tracking-[0.14em] text-on-surface">
                {s.label}
              </span>
              <span className="font-body-sm text-[12px] text-on-surface-variant">
                {s.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
