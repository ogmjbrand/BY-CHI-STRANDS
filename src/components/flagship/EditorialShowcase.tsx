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
    <section className="relative overflow-hidden bg-[#f5efe7] text-[#111111]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.06),_transparent_35%),radial-gradient(circle_at_100%_0%,_rgba(0,0,0,0.05),_transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-[#8b6f4d]">
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
            <p className="text-lg leading-8 text-[#4a4239]">
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
              className="rounded-[1.75rem] border border-[#d7c9b4] bg-white/70 p-7 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b6f4d]">{card.accent}</p>
              <h3 className="mt-4 text-2xl text-[#111111]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#584f43]">{card.body}</p>
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
            className="inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:translate-y-[-1px]"
          >
            Explore the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="text-sm uppercase tracking-[0.25em] text-[#6f6555]">
            Crafted for clients who value detail
          </span>
        </motion.div>
      </div>
    </section>
  );
}
