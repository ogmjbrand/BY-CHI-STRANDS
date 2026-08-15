"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The provenance chapter — the part of the story that actually justifies the
 * price. Every claim here is drawn from the house's own published answers in
 * lib/faqs.ts (raw grade, single-braid cut, steam-set texture, low-porosity
 * cuticle) rather than invented luxury adjectives: specifics are what separate
 * a real atelier from a dropshipper, so the copy leans on facts, not mood.
 */
const chapters = [
  {
    index: "01",
    title: "Cut from a single braid",
    body: "Every bundle is taken from one braid, from one donor. Nothing is blended from floor collections, which is why the cuticle runs in one direction and the hair never tangles against itself.",
  },
  {
    index: "02",
    title: "Never chemically altered",
    body: "No acid baths. No silicone coating. No relaxing, no dye. Raw is the only grade we import, and texture is set with steam alone — so what you receive behaves like healthy growing hair.",
  },
  {
    index: "03",
    title: "Thick cuticle, low porosity",
    body: "raw hair holds shine without coatings, keeps colour longer, and resists tangling by nature rather than by treatment. The quality is structural, not applied.",
  },
  {
    index: "04",
    title: "Built to outlast the trend",
    body: "Bundles last five years or more with proper care. Most of our earliest clients are still wearing their first purchase — the truest measure of the grade.",
  },
];

export function HairOriginsSection() {
  return (
    <section className="relative overflow-hidden bg-noir text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/posters/imgi_320_d2566257b40c7ee5e6b6826508a4f263.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(13,11,8,0.9)_0%,_rgba(13,11,8,0.95)_45%,_rgba(13,11,8,0.99)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,_rgba(201,162,39,0.16),_transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-40">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* The heading column stays with you while the chapters scroll past. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold">
              Provenance
            </p>
            <h2 className="font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
              Where the hair comes from is the whole product.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-white/70">
              Raw hair, imported directly. The grade is decided long before it reaches
              the atelier — which is why we can tell you exactly what it is, and exactly what it is not.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.25em] text-noir transition-all duration-300 hover:-translate-y-[1px] hover:bg-gold-light"
              >
                The house standard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faqs"
                className="inline-flex items-center gap-3 rounded-full border border-gold/35 px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.25em] text-gold-light transition-colors duration-300 hover:border-gold hover:bg-gold/10"
              >
                Read the detail
              </Link>
            </div>
          </motion.div>

          <div>
            {chapters.map((chapter, i) => (
              <motion.article
                key={chapter.index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-gold/15 py-9 first:pt-0 last:border-b-0 last:pb-0 md:gap-10"
              >
                <span className="font-display-md text-2xl text-gold/70 md:text-3xl">
                  {chapter.index}
                </span>
                <div>
                  <h3 className="font-display-md text-2xl leading-[1.15] text-white md:text-[2rem]">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/65">{chapter.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
