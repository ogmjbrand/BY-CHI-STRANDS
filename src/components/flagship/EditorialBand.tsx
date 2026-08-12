"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * A full-width editorial band of finished units.
 *
 * These are reference photographs from the house's own image library
 * (public/media/posters), chosen for two things only: they are genuine
 * photographs rather than generated ones, and they are large enough to hold
 * up at this size — most of that library is 236px or 474px wide, which is a
 * thumbnail and looks like one when it fills a panel.
 *
 * Deliberately uncaptioned. Naming a texture or a tone under each frame
 * would assert which catalogue piece it is, and these are reference images
 * rather than shots of specific listed units. The band carries register and
 * density; the catalogue carries the claims.
 */
const FRAMES = [
  {
    src: "/media/posters/imgi_71_2929e1abda2227c8cb347e05720c9610.jpg",
    alt: "A long honey-brown body-wave unit on a display stand",
  },
  {
    src: "/media/posters/imgi_50_1257c0dfd20a5c80a321bbfc7ba316c7.jpg",
    alt: "A bone-straight unit in natural black, hanging to the waist",
  },
  {
    src: "/media/posters/imgi_69_497f33f33d93c247e1bd680d9bef091f.jpg",
    alt: "A copper deep-curl unit photographed against a pale wall",
  },
  {
    src: "/media/posters/imgi_73_7c68bb0f0c186736f25fc67a98a8a09f.jpg",
    alt: "A black body-wave unit with a deep side parting",
  },
  {
    src: "/media/posters/imgi_65_803163f161cc076f51c27945a7658d32.jpg",
    alt: "A long wavy unit styled on a stand in a salon interior",
  },
  {
    src: "/media/posters/imgi_56_dcb6f6748eac03b966c193603a9f080c.jpg",
    alt: "A rail of finished units in straight and curled textures",
  },
];

export function EditorialBand() {
  return (
    <section className="overflow-hidden bg-noir py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1800px] px-6 md:px-16">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold">
              The Register
            </p>
            <h2 className="font-display-lg text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Straight, waved, curled — and every weight between.
            </h2>
          </div>
          <Link
            href="/collections"
            className="group inline-flex shrink-0 items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-gold-light"
          >
            See the Collections
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/*
       * A rail on the phone rather than a squeezed grid: six portrait frames
       * in two mobile columns would each be about 165px wide, which is
       * smaller than the thumbnails these were rescued from. Swiping keeps
       * them at a size worth looking at. Grid from md up.
       */}
      <ul
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-16 md:pb-0 lg:grid-cols-6"
      >
        {FRAMES.map((f, i) => (
          <motion.li
            key={f.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-[68vw] shrink-0 snap-center overflow-hidden bg-surface-container sm:w-[46vw] md:w-auto"
          >
            <span className="block aspect-[3/4] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </span>
            {/* A gold hairline that draws in on hover — the house's own accent
                rather than a caption bar over the photograph. */}
            <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-gold transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
