"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { ProductMedia } from "@/components/stitch/ProductMedia";

/**
 * 09 — Social proof, as a wall of the house's own client footage.
 *
 * Not five gold stars and a pull-quote. Every tile is a real clip a client
 * filmed — a review to camera, a finished install, an order being opened —
 * and the caption describes what the clip shows rather than putting a
 * sentence in that client's mouth. lib/testimonials is written the same way
 * for the same reason: no invented quotes, no invented names.
 *
 * The tiles vary in span so the wall reads as a composition rather than a
 * uniform review grid, and each clip stays a poster frame until the visitor
 * shows interest, so a page full of video costs one image each.
 */

/*
 * Six tiles that fill a four-column grid exactly, with no holes:
 *
 *   row 1 | 0 0 1 1     row 2 | 0 0 2 3     row 3 | 4 4 5 5
 *
 * The earlier pattern mixed a col-span-2/row-span-2 with two row-span-2s and
 * left the auto-placer with gaps it could not fill — the wall rendered with
 * empty cells punched through the middle.
 */
const SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export function HouseVoices() {
  return (
    <section className="bg-[#f5f0e8] px-6 py-24 text-[#0b0907] md:px-8 md:py-36">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-12 flex flex-col gap-6 px-2 md:flex-row md:items-end md:justify-between md:px-4">
          <div>
            <p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#8b6244]">
              09 / In Their Words
            </p>
            <h2 className="font-serif text-[clamp(3.4rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">
              Filmed by
              <br />
              <i>the women wearing it.</i>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="w-fit border-b border-[#c8a45d] pb-2 text-[8px] uppercase tracking-[.35em] text-[#8b6244]"
          >
            The gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:auto-rows-[16vw] md:gap-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.clip.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-[3/4] overflow-hidden bg-[#e6ddd0] md:aspect-auto ${SPANS[i % SPANS.length]}`}
            >
              <ProductMedia
                media={t.clip}
                className="h-full w-full object-cover transition duration-[1.2s] group-hover:scale-[1.04]"
              />
              {/* Caption sits at the top: ProductMedia draws its play control
                  in the bottom-left, and the two were overlapping. */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/25" />
              <figcaption className="pointer-events-none absolute left-0 right-0 top-0 p-4 md:p-6">
                <p className="text-[8px] uppercase tracking-[.4em] text-[#c8a45d]">{t.context}</p>
                <p className="mt-2 max-w-[22ch] text-sm leading-6 text-white/85">{t.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
