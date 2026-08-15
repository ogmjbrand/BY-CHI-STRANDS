"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { WordsPullUp } from "@/components/ui/words-pull-up";

/**
 * Full-viewport cinematic hero — one responsive tree, no separate mobile
 * block. The video parallaxes slower than scroll (translateY tied to scroll
 * progress through the hero itself) rather than the whole-page
 * MotionSystem.tsx parallax, so it works standalone regardless of what
 * follows it in the DOM.
 */
export function FlagshipHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[760px] w-full overflow-hidden bg-noir">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-80"
          src="/products/VID-20260727-WA0027.mp4"
          poster="/media/posters/VID-20260727-WA0027.jpg"
          autoPlay
          muted
          loop
          playsInline
          /*
           * Without this the attribute defaults to "auto" and Chromium pulls
           * the whole 5.1 MB file before first paint. The poster carries the
           * frame while the footage streams in behind it.
           */
          preload="metadata"
        />
        {/*
         * Two scrims, not one: a vertical wash for the mast and lower copy,
         * plus a left-weighted wash so the display type keeps its contrast
         * where the footage is brightest. The single soft gradient left the
         * white headline reading as grey against the lit side of the frame.
         */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,2,2,0.5)_0%,_rgba(2,2,2,0.35)_35%,_rgba(2,2,2,0.7)_75%,_rgba(2,2,2,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(2,2,2,0.82)_0%,_rgba(2,2,2,0.45)_45%,_rgba(2,2,2,0.1)_75%,_rgba(2,2,2,0)_100%)]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.04] mix-blend-overlay" />
      </motion.div>

      {/*
       * pt clears the fixed mast (announcement bar + nav). Without it the
       * justify-end column overflows upward and the eyebrow line collides
       * with the navigation on short viewports.
       */}
      {/* pb clears the scroll cue that sits at the foot of the frame. */}
      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 pt-32 md:px-16 md:pb-24 md:pt-40">
        <div className="max-w-5xl">
          <p className="mb-5 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold-light">
            100% Authentic · Ethically Sourced · Hand-Tied In Lagos
          </p>

          {/*
           * Each line gets its own block. WordsPullUp is itself an inline-flex,
           * so stacking the three lines directly would let them share a line
           * box. Honest leading, no negative margin.
           */}
          <h1 className="sr-only">Luxury ese Hair. Crafted for Confidence.</h1>

          <div aria-hidden="true">
            <div>
              <WordsPullUp
                text="Luxury ese Hair."
                className="font-display-lg text-[10.5vw] leading-[1.02] tracking-[-0.02em] text-white md:text-[5.4vw]"
              />
            </div>
            <p className="font-display-lg text-[10.5vw] italic leading-[1.05] tracking-[-0.02em] text-gold-light md:text-[5.4vw]">
              Crafted for
            </p>
            <div>
              <WordsPullUp
                text="Confidence."
                className="font-display-lg text-[10.5vw] leading-[1.02] tracking-[-0.02em] text-white md:text-[5.4vw]"
              />
            </div>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            human hair, hand-tied in Lagos. Every strand is traceable, sculpted, and styled to feel as rare as it looks.
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-8">
          {/*
           * Two equal columns on a phone rather than wrapped inline pills:
           * at 390px the padded buttons broke onto separate rows at unequal
           * widths, which read as a mistake rather than a pair.
           */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap">
            {/* Solid champagne-gold primary — the house CTA, not a ghost pill. */}
            <Link
              href="/collections"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap bg-gold px-3 py-4 font-label-caps text-[9px] uppercase tracking-[0.1em] text-noir transition-colors duration-500 hover:bg-gold-light md:justify-start md:gap-3 md:px-9 md:text-[11px] md:tracking-[0.25em]"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white/40 px-3 py-4 font-label-caps text-[9px] uppercase tracking-[0.1em] text-white transition-colors duration-500 hover:border-gold hover:text-gold-light md:justify-start md:gap-3 md:px-9 md:text-[11px] md:tracking-[0.25em]"
            >
              Our Story
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/*
           * The closing line is desktop-only. On a phone it pushed the CTAs
           * above the fold boundary and duplicated the register of the
           * subhead directly above it.
           */}
          <div className="hidden max-w-sm text-sm leading-7 text-white/70 md:block">
            Crafted for clients who want presence, softness, and a finish that feels effortless from first glance.
          </div>
        </div>
      </motion.div>

      {/*
       * Scroll cue: a gold hairline that draws itself downward on a loop. Tied
       * to the same scroll-driven opacity as the hero copy so it retires as
       * soon as the visitor takes the hint, and hidden from assistive tech
       * since it communicates nothing a screen-reader user needs.
       */}
      <motion.div
        style={{ opacity }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center md:bottom-7"
      >
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <span className="font-label-caps text-[9px] uppercase tracking-[0.3em] text-white/50 md:text-[10px]">
            Scroll
          </span>
          <span className="relative block h-8 w-px overflow-hidden bg-white/15 md:h-14">
            <motion.span
              className="absolute inset-x-0 top-0 block h-1/2 bg-gold"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
