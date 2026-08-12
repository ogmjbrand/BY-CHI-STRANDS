"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoldSeal } from "./GoldSeal";
import { ProductMedia } from "./ProductMedia";
import type { Media } from "@/lib/media";
import { Icon } from "@/components/ui/icon";

const fadeUp = (delay: number) => ({
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/** Real catalogue footage, not stock — the same assets used on Shop/PDP. */
const SLIDES: Media[] = [
  {
    type: "image",
    src: "/products/IMG-20260727-WA0017.jpg",
    alt: "Honey deep curl frontal unit on a studio stand",
  },
  {
    type: "video",
    src: "/products/VID-20260727-WA0027.mp4",
    poster: "/media/posters/VID-20260727-WA0027.jpg",
    alt: "Bone straight unit combed through to show the blunt hemline",
  },
  {
    type: "video",
    src: "/products/VID-20260727-WA0041.mp4",
    poster: "/media/posters/VID-20260727-WA0041.jpg",
    alt: "Funmi fringe unit with the curl bouncing at the ends",
  },
];

/**
 * Full-bleed dark hero — headline over real rotating catalogue footage
 * instead of the split panel/plain-surface version. The 01/02/03 index on
 * the left is a real, working slide control (click or auto-advance), not a
 * decorative static readout.
 */
export function HomeHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const scrollToNext = () => {
    const hero = document.getElementById("home-hero");
    const next = hero?.nextElementSibling;
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home-hero" className="relative min-h-[100svh] overflow-hidden bg-noir text-white snap-start">
      <AnimatePresence mode="sync">
        <motion.div
          key={SLIDES[active].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <ProductMedia media={SLIDES[active]} className="h-full w-full object-cover" autoPlay />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/70 to-noir/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent" />

      {/* Slide index rail */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col gap-4">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-pressed={i === active}
            className="flex flex-col items-center gap-2"
          >
            <span
              className={`font-label-caps text-[11px] tracking-[0.2em] transition-colors ${
                i === active ? "text-gold" : "text-white/40"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`h-6 w-px transition-colors ${i === active ? "bg-gold" : "bg-white/25"}`}
            />
          </button>
        ))}
      </div>

      <div className="relative z-10 flex min-h-[94vh] items-center px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl pl-6 sm:pl-4">
          <motion.span
            {...fadeUp(0)}
            className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold-light mb-6 block"
          >
            100% Authentic · Ethically Sourced · Hand-Tied In Lagos
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display-lg text-headline-lg-mobile md:text-display-lg leading-[1.05] tracking-[-0.01em] uppercase mb-2"
          >
            Luxury
            <br />
            Vietnamese Hair.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-display-lg italic text-gold-light text-[40px] md:text-[56px] leading-none my-4"
          >
            Crafted for
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-display-lg text-headline-lg-mobile md:text-display-lg leading-[1.05] tracking-[-0.01em] uppercase mb-8"
          >
            Confidence.
          </motion.h1>

          <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-4">
            <Link
              href="/collections"
              className="bg-gold text-noir px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-gold-light transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-colors"
            >
              Our Story
              <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      <GoldSeal className="hidden lg:block absolute bottom-10 right-10 z-10 h-28 w-28 text-gold-light/80" />

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors lg:left-auto lg:right-10 lg:translate-x-0 lg:bottom-44"
        aria-label="Scroll to discover more"
      >
        <span className="font-label-caps text-[10px] uppercase tracking-[0.3em]">
          Scroll to Discover
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
          <Icon name="arrow_downward" className="text-[16px]" />
        </span>
      </button>
    </section>
  );
}
