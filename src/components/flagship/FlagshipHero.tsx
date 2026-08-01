"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
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
        <div className="max-w-6xl">
          <p className="mb-4 font-label-caps text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/90">
            ByChi Strands · Luxury Hair, Reimagined
          </p>
          <WordsPullUp
            text="Quiet Luxury, Worn Beautifully"
            className="font-display-lg text-[13vw] leading-[0.9] tracking-[-0.02em] text-white md:text-[8vw]"
          />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
            Refined texture, private craftsmanship, and a finish that carries presence from the first glance to the final movement.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="flex flex-wrap gap-3">
            <a
              href="#brand-story"
              className="group inline-flex items-center gap-3 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-[#f9e8b6] shadow-[0_0_0_1px_rgba(212,175,55,0.15)] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#060606]"
            >
              Discover the story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#collections"
              className="inline-flex items-center gap-3 rounded-full border border-[#d4af37]/25 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-[#f0d98d] transition-all duration-300 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 hover:text-[#ffe7a3]"
            >
              <Play className="h-4 w-4" />
              View collections
            </a>
          </div>

          <div className="max-w-sm text-sm leading-7 text-white/70">
            Crafted for clients who want softness, structure, and a finish that feels timeless, intentional, and quietly unforgettable.
          </div>
        </div>
      </motion.div>
    </section>
  );
}
