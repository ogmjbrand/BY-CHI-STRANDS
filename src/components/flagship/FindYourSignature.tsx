"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { scene } from "@/lib/media";

/**
 * The closing chapter.
 *
 * The page used to end on the journal and drop straight into the footer,
 * which left the whole sequence without a last word — the reader arrives at
 * the bottom of a story about the house and is handed a sitemap. This is the
 * closing statement and the one unambiguous way through to the catalogue:
 * full-bleed frame, the type sitting on it, one destination.
 *
 * The image drifts slightly against the scroll. Slightly is the point — the
 * frame is over-scaled just enough to cover the travel, so nothing exposes an
 * edge, and under reduced motion the drift is dropped entirely rather than
 * shortened.
 */
export function FindYourSignature() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 110% scale covers ±5% of travel with room to spare.
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-noir"
    >
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { y }}
        className="absolute inset-0 -z-10 scale-110"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={scene("services-install").src}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-noir via-noir/55 to-noir/25"
      />

      <div className="w-full px-6 pb-20 md:px-16 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-8 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary">
            The last word
          </p>

          <h2 className="font-display-lg text-[15vw] leading-[0.88] tracking-[-0.03em] text-white md:text-[8vw]">
            Find your
            <br />
            signature.
          </h2>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link
              href="/shop"
              className="w-fit bg-primary px-12 py-5 font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-gold-light"
            >
              Shop all hair
            </Link>
            <Link
              href="/book"
              className="w-fit border border-white/30 px-12 py-5 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:border-primary hover:text-primary"
            >
              Book a consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
