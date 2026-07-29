"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { posterFor } from "@/lib/media";

/**
 * Circular, photo-led shortcuts into the four collections that actually
 * carry stock today — not a full texture taxonomy padded with empty
 * results. Each still is pulled from the collection's own hero product, the
 * same asset already shown on its /collections page.
 */
const TILES = [
  { label: "Bone Straight", href: "/collections/vietnam-bone-straight", slug: "sdd-vietnam-bone-straight" },
  { label: "Pixie Curls", href: "/collections/pixie-collection", slug: "luxury-mexican-sdd-pixie" },
  { label: "Funmi", href: "/collections/funmi-collection", slug: "funmi-fringe-wig" },
  { label: "Colour", href: "/collections/colour-editions", slug: "sdd-copper-flame-straight" },
  { label: "Shop All", href: "/shop", slug: "sdd-vietnam-bone-straight-wine" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function CollectionQuickNav() {
  return (
    <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary mb-3 block">
            Shop By Collection
          </span>
          <h2 className="font-display-md text-2xl md:text-3xl text-on-surface">
            Find Your Texture
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-10 md:gap-x-12"
        >
          {TILES.map((t) => (
            <motion.div key={t.label} variants={rise}>
              <Link href={t.href} className="group flex flex-col items-center gap-4 w-24 md:w-32">
                <span className="relative block h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden ring-1 ring-outline-variant/30 transition-all duration-500 group-hover:ring-2 group-hover:ring-primary group-hover:scale-[1.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={posterFor(t.slug)}
                    alt={t.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </span>
                <span className="font-label-caps text-[11px] uppercase tracking-[0.14em] text-on-surface text-center group-hover:text-primary transition-colors">
                  {t.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
