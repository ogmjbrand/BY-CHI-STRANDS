"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WordsPullUp } from "@/components/ui/words-pull-up";

/**
 * Full-bleed video hero for the homepage. Adapted from a template built for
 * an art collective ("Prisma") — the floating pill navbar was dropped since
 * the site already has a real header (SiteChrome-equivalent markup) on every
 * page, and the background video is real ByChiStrands footage: the bone
 * straight bestseller combed out to show the blunt hemline in-studio, not a
 * stock/placeholder clip. Copy is the site's existing hero line, not new
 * marketing claims.
 */
export function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/media/posters/VID-20260727-WA0027.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        src="/products/VID-20260727-WA0027.mp4"
      />

      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/70" />

      <div className="absolute bottom-0 left-0 right-0 px-margin-mobile md:px-margin-desktop pb-section-padding">
        <div className="grid grid-cols-12 items-end gap-4 max-w-container-max mx-auto">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-display-lg font-medium leading-[0.85] tracking-[-0.03em] text-white text-[15vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[7.5vw]"
            >
              <WordsPullUp text="ByChi Strands" />
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2 lg:pb-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-body-md text-white/80 text-sm md:text-base"
            >
              Premium Vietnamese hair artistry for the modern connoisseur of elegance.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-6 pr-1 font-label-caps text-label-caps text-on-primary transition-all hover:gap-3"
              >
                Explore the Collection
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-on-surface transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[18px] text-surface">arrow_forward</span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
