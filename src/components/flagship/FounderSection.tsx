"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The founder chapter — built strictly from facts the house already publishes.
 *
 * There is no founder biography, quote or personal history anywhere in this
 * codebase, so none is invented here: attributing beliefs or words to a real,
 * identifiable person would be a fabrication of the worst kind. What this
 * section states instead is what the house verifiably does — every line below
 * traces to lib/faqs.ts, lib/site.ts or the About page — set against a real
 * portrait. If a written founder statement is supplied later, it belongs in
 * the space above the pillars rather than replacing them.
 */
const pillars = [
  {
    title: "Imported directly",
    body: "Raw hair, bought at source rather than through a middle market.",
  },
  {
    title: "Made on the floor",
    body: "Installation, ventilation and Hair Laundry happen in the Lagos atelier — not outsourced.",
  },
  {
    title: "Taught, not gatekept",
    body: "The house trains entrepreneurs to import and grade hair through the ByChiStrands Academy.",
  },
];

export function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-noir text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(201,162,39,0.14),_transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:px-16 md:py-36 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Offset gold rule behind the portrait — a frame, not a card. */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full border border-gold/30 md:-left-6 md:-top-6"
          />
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/services/ceo-portrait-2.jpeg"
              alt="The ByChi Strands founder, wearing a wine-toned unit from the house"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(13,11,8,0)_55%,_rgba(13,11,8,0.55)_100%)]" />
          </div>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold">
            The house
          </p>
          <h2 className="max-w-2xl font-display-lg text-4xl leading-[0.98] tracking-[-0.02em] md:text-6xl">
            Founded in Lagos, and still run from the atelier floor.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            ByChi Strands imports raw hair directly, hand-ties every unit in its Lagos
            atelier, and ships worldwide. The work is done in-house — which is why the house can
            say precisely what its hair is, and precisely what it is not.
          </p>

          <dl className="mt-12 max-w-xl divide-y divide-gold/15 border-y border-gold/15">
            {pillars.map((p) => (
              <div key={p.title} className="py-6">
                <dt className="font-display-md text-xl text-white">{p.title}</dt>
                <dd className="mt-2 text-sm leading-7 text-white/65">{p.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] text-noir transition-colors duration-500 hover:bg-gold-light"
            >
              Our craft
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center gap-3 border border-gold/35 px-8 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] text-gold-light transition-colors duration-300 hover:border-gold hover:bg-gold/10"
            >
              The Academy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
