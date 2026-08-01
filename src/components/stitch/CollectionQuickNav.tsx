"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { collections, collectionProducts } from "@/lib/collections";
import { posterFor } from "@/lib/media";

const TILES = [
  ...collections.map((c) => {
    const [firstProduct] = collectionProducts(c.slug);
    return {
      label: c.name,
      href: `/collections/${c.slug}`,
      poster: firstProduct ? posterFor(firstProduct.slug) : posterFor("sdd-vietnam-bone-straight"),
    };
  }),
  { label: "Shop All", href: "/shop", poster: posterFor("sdd-vietnam-bone-straight") },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

/** Circular photo shortcuts into the real collections — a "shop by texture" quick nav. */
export function CollectionQuickNav() {
  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop">
      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-container-max mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {TILES.map((tile) => (
          <motion.div key={tile.label} variants={item}>
            <Link href={tile.href} className="flex flex-col items-center gap-3 group">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden ring-1 ring-outline-variant/40 group-hover:ring-primary group-hover:scale-105 transition-all duration-300">
                <img src={tile.poster} alt={tile.label} className="w-full h-full object-cover" />
              </div>
              <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                {tile.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
