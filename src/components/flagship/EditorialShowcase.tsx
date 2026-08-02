"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "The sculpted finish",
    body: "A softer, more fluid silhouette designed to move with presence and confidence.",
    accent: "Silk Motion",
  },
  {
    title: "The signature texture",
    body: "A luminous, healthy look that reads polished from every angle.",
    accent: "Luminous Texture",
  },
  {
    title: "The luxurious wear",
    body: "Made to feel effortless in motion, portrait, and the everyday rituals of life.",
    accent: "Everyday Luxury",
  },
];

export function EditorialShowcase() {
  return (
    <section className="relative overflow-hidden bg-noir text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/posters/imgi_215_1a37e89078939bbcc89c43b697f0d5f4.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(13,11,8,0.55)_0%,_rgba(13,11,8,0.88)_55%,_rgba(13,11,8,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.16),_transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold">
              Editorial Finish
            </p>
            <h2 className="font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
              Designed to look intentional from the first glance.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <p className="text-lg leading-8 text-white/70">
              The result is a finish that feels fluid, refined, and quietly powerful — a luxury experience made visible in every strand.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[1.75rem] border border-gold/25 bg-black/40 p-7 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{card.accent}</p>
              <h3 className="mt-4 text-2xl text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{card.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-noir transition-all duration-300 hover:bg-gold-light hover:-translate-y-[1px]"
          >
            Explore the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="text-sm uppercase tracking-[0.25em] text-white/50">
            Crafted for clients who value detail
          </span>
        </motion.div>
      </div>
    </section>
  );
}
