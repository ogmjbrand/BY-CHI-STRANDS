"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    <section className="overflow-hidden bg-noir py-32 text-white md:py-48">
      <div className="mx-auto mb-16 flex max-w-7xl flex-col gap-8 px-6 md:mb-24 md:flex-row md:items-end md:justify-between md:px-16">
        <div className="max-w-3xl">
          <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary-fixed-dim">
            Craftsmanship
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 font-display-lg text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl"
          >
            Melted, not placed.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-xl text-lg text-white/70"
          >
            Your lace is tinted, plucked, and melted to your hairline by stylists who install units every single day.
            There is no template for a hairline — every install is drawn by hand.
          </motion.p>
        </div>

        <a
          href="/services"
          className="group inline-flex items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white"
        >
          View services
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 pb-4 snap-x snap-mandatory no-scrollbar md:gap-4 md:px-16">
        {showcaseItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group relative aspect-[3/4] w-[70vw] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 md:w-[26vw]"
          >
            <ProductMedia
              media={{ type: "video", src: item.video, poster: item.poster, alt: item.label }}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/90">
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
