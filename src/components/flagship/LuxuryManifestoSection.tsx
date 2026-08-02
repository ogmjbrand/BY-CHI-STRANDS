"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * The philosophy chapter — one statement, made once.
 *
 * This replaces three near-identical sections (an "editorial finish" card row,
 * a "signature finish" panel and an earlier manifesto) that each restated the
 * same abstractions — quiet luxury, refined finish, sculpted texture — in
 * boxed cards. Saying it three times in adjectives read as template; saying it
 * once, full-bleed, and anchoring each principle to something verifiable reads
 * as a house. The detail behind these three lines lives in HairOriginsSection
 * and CraftsmanshipFilm rather than being paraphrased here.
 */
const principles = [
  {
    title: "Traceable",
    body: "One donor, one braid, documented — not blended from floor collections.",
  },
  {
    title: "Hand-finished",
    body: "Wefted and tied by hand in the Lagos atelier, never machine-pressed.",
  },
  {
    title: "Worn, not displayed",
    body: "Built for five years of real wear, not for a single photograph.",
  },
];

export function LuxuryManifestoSection() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-noir text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/posters/imgi_10_0d5ce3f9eaf2c51beb8e723133b28a8e.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[72%_center] opacity-75"
      />
      {/* Directional scrim: dense where the type sits, clear where the hair reads. */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_rgba(8,7,5,0.96)_0%,_rgba(8,7,5,0.82)_38%,_rgba(8,7,5,0.35)_68%,_rgba(8,7,5,0.15)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgba(8,7,5,0.7)_0%,_rgba(8,7,5,0)_30%,_rgba(8,7,5,0.55)_100%)]" />

      <div className="relative w-full px-6 pb-20 pt-32 md:px-16 md:pb-28 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-8 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold">
            The house philosophy
          </p>
          <p className="font-display-lg text-[8vw] leading-[0.98] tracking-[-0.025em] md:text-[4.6vw]">
            Hair should feel like an extension of presence —
            <span className="text-gold-light"> never an afterthought.</span>
          </p>
        </motion.div>

        {/*
         * Principles as a hairline-ruled row rather than a card grid: the brief
         * asks for elegant dividers over boxed ecommerce components.
         *
         * divide-* rather than gap-px — a 1px grid gap only reads as a rule
         * when the parent paints a colour behind it, and this section is
         * transparent over the photograph, so the gaps rendered as nothing.
         * Rules run horizontally while the items are stacked, then switch to
         * vertical once they sit side by side.
         */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid max-w-5xl divide-y divide-gold/20 border-y border-gold/20 md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {principles.map((p) => (
            <div key={p.title} className="py-7 md:px-8 md:py-8 md:first:pl-0">
              <dt className="font-display-md text-xl text-white md:text-2xl">{p.title}</dt>
              <dd className="mt-3 max-w-xs text-sm leading-7 text-white/65">{p.body}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <Link
            href="/collections"
            className="group inline-flex items-center gap-3 bg-gold px-9 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] text-noir transition-colors duration-500 hover:bg-gold-light"
          >
            Enter the collection
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
