"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { ProductMedia } from "@/components/stitch/ProductMedia";

const SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

/**
 * Immersive varying-tile mosaic of the house's own review/install/unboxing
 * footage — the visual antithesis of a uniform review-card grid.
 */
export function TransformationMosaic() {
  return (
    <section className="bg-surface-container-lowest py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-3xl mb-16 md:mb-24">
        <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary mb-6">
          Transformation Gallery
        </p>
        <h2 className="font-display-lg text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
          Every install, on camera.
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[28vw] md:auto-rows-[16vw] gap-3 md:gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.clip.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden bg-surface-container ${SPANS[i % SPANS.length]}`}
          >
            <ProductMedia
              media={t.clip}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-4 left-4 right-4 font-body-sm text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {t.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
