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
    <section ref={ref} className="relative h-[100svh] min-h-[760px] w-full overflow-hidden bg-on-surface">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-80"
          src="/products/VID-20260727-WA0027.mp4"
          poster="/media/posters/VID-20260727-WA0027.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,2,2,0.15)_0%,_rgba(2,2,2,0.55)_65%,_rgba(2,2,2,0.92)_100%)]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.04] mix-blend-overlay" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-16 md:pb-24">
        <div className="max-w-5xl">
          <p className="mb-5 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold-light">
            100% Authentic · Ethically Sourced · Hand-Tied In Lagos
          </p>
          <WordsPullUp
            text="Luxury Vietnamese Hair."
            className="font-display-lg text-[13.5vw] leading-[0.92] tracking-[-0.02em] text-white md:text-[7.4vw]"
          />
          {/* The house's signature gold script line — the brand's own accent,
              not a generic all-white editorial mast. */}
          <p className="-mt-1 font-script text-[16vw] leading-[0.85] text-gold-light md:text-[8vw]">
            Crafted for
          </p>
          <WordsPullUp
            text="Confidence."
            className="font-display-lg text-[13.5vw] leading-[0.92] tracking-[-0.02em] text-white md:text-[7.4vw]"
          />
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            Vietnamese human hair, hand-tied in Lagos. Every strand is traceable, sculpted, and styled to feel as rare as it looks.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="flex flex-wrap gap-3">
            {/* Solid champagne-gold primary — the house CTA, not a ghost pill. */}
            <Link
              href="/collections"
              className="group inline-flex items-center gap-3 bg-gold px-9 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] text-noir transition-colors duration-500 hover:bg-gold-light"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border border-white/40 px-9 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] text-white transition-colors duration-500 hover:border-gold hover:text-gold-light"
            >
              Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="max-w-sm text-sm leading-7 text-white/70">
            Crafted for clients who want presence, softness, and a finish that feels effortless from first glance.
          </div>
        </div>
      </motion.div>
    </section>
  );
}
