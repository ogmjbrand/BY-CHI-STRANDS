"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { showcaseItems } from "@/components/stitch/ProductServiceShowcase";

/**
 * Cinematic craftsmanship section: one large dark narrative panel (real
 * Frontal Installation copy from services.ts, paraphrased here as brand
 * voice), then a horizontal scroll-snap film strip of the same real footage
 * ProductServiceShowcase uses elsewhere — no bordered thumbnail grid.
 */
export function CraftsmanshipFilm() {
  return (
    <section className="bg-on-surface text-white py-32 md:py-48 overflow-hidden">
      <div className="px-6 md:px-16 mb-16 md:mb-24 max-w-3xl">
        <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary-fixed-dim mb-6">
          Craftsmanship
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display-lg text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em] mb-8"
        >
          Melted, not placed.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-body-xl text-lg text-surface-variant"
        >
          Your lace is tinted, plucked and melted to your hairline by stylists who install units every single day.
          There is no template for a hairline — every install is drawn by hand.
        </motion.p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 md:px-16 pb-4">
        {showcaseItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group relative shrink-0 w-[70vw] md:w-[26vw] aspect-[3/4] snap-center overflow-hidden bg-white/5"
          >
            <ProductMedia
              media={{ type: "video", src: item.video, poster: item.poster, alt: item.label }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
