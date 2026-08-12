"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { showcaseItems } from "@/components/stitch/ProductServiceShowcase";

/**
 * Editorial craftsmanship chapter. The footage is treated as campaign media,
 * not as a conventional thumbnail/card grid.
 */
export function CraftsmanshipFilm() {
  return (
    <section className="relative overflow-hidden bg-noir py-28 text-white md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 font-label-caps text-[10px] uppercase tracking-[0.34em] text-primary-fixed-dim">
              The craft
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl font-display-lg text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.88] tracking-[-0.045em]"
            >
              Melted, not placed.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-base leading-8 text-white/65 md:text-lg"
            >
              Your lace is tinted, plucked, and melted to your hairline by stylists who install units every day. Every finish is drawn by hand.
            </motion.p>
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 font-label-caps text-[10px] uppercase tracking-[0.28em] text-white/85 transition-colors hover:text-primary-fixed-dim"
            >
              View services
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-x-auto no-scrollbar md:mt-28">
        <div className="flex min-w-max gap-5 px-6 md:gap-8 md:px-16">
          {showcaseItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative w-[82vw] shrink-0 md:w-[43vw] lg:w-[31vw]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <ProductMedia
                  media={{ type: "video", src: item.video, poster: item.poster, alt: item.label }}
                  className="h-full w-full object-cover grayscale transition duration-[1200ms] ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-80" />
                <div className="absolute left-5 top-5 font-label-caps text-[10px] uppercase tracking-[0.25em] text-white/55 md:left-7 md:top-7">
                  0{index + 1}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="font-display-md text-2xl tracking-[-0.02em] md:text-3xl">{item.label}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-label-caps text-[9px] uppercase tracking-[0.25em] text-white/70 transition-colors group-hover:text-white">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
