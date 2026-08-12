"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FRAMES = [
  { src: "/media/posters/imgi_71_2929e1abda2227c8cb347e05720c9610.jpg", alt: "Long honey-brown body-wave hair" },
  { src: "/media/posters/imgi_50_1257c0dfd20a5c80a321bbfc7ba316c7.jpg", alt: "Bone-straight natural-black hair" },
  { src: "/media/posters/imgi_69_497f33f33d93c247e1bd680d9bef091f.jpg", alt: "Copper deep-curl hair" },
  { src: "/media/posters/imgi_73_7c68bb0f0c186736f25fc67a98a8a09f.jpg", alt: "Black body-wave hair" },
  { src: "/media/posters/imgi_65_803163f161cc076f51c27945a7658d32.jpg", alt: "Long wavy hair in a salon interior" },
  { src: "/media/posters/imgi_56_dcb6f6748eac03b966c193603a9f080c.jpg", alt: "Rail of finished hair units" },
];

export function EditorialBand() {
  return (
    <section className="overflow-hidden bg-noir text-white">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-24 md:px-16 md:pb-24 md:pt-36">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6 font-label-caps text-[10px] uppercase tracking-[0.34em] text-gold"
            >
              The Register / 01
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-lg text-[clamp(3rem,7.2vw,8.5rem)] leading-[0.86] tracking-[-0.045em]"
            >
              Texture is<br />
              <span className="text-white/45">a language.</span>
            </motion.h2>
          </div>
          <Link
            href="/collections"
            className="group inline-flex items-center gap-4 border-b border-white/25 pb-3 font-label-caps text-[10px] uppercase tracking-[0.26em] transition-colors hover:border-gold hover:text-gold"
          >
            Explore collections
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="border-y border-white/10">
        <ul className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 lg:grid-cols-6">
          {FRAMES.map((frame, i) => (
            <motion.li
              key={frame.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-[76vw] shrink-0 snap-center border-r border-white/10 md:w-auto"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={frame.src}
                  alt={frame.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.18] transition-[transform,filter] duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60" />
                <span className="absolute left-5 top-5 font-label-caps text-[9px] tracking-[0.28em] text-white/60">
                  0{i + 1}
                </span>
                <span className="absolute bottom-5 left-5 h-px w-8 bg-gold transition-all duration-700 group-hover:w-16" />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-7 md:px-16">
        <p className="font-label-caps text-[9px] uppercase tracking-[0.28em] text-white/35">By Chi Strands / Hair as material</p>
        <p className="font-label-caps text-[9px] uppercase tracking-[0.28em] text-white/35">Scroll to discover</p>
      </div>
    </section>
  );
}
