"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CinematicRevealSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2ea] text-[#111111]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(212,175,55,0.28),_transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(212,175,55,0.18),_transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2.2rem] border border-[#d4af37]/25 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(248,240,223,0.9))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.08)] backdrop-blur"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#a67c00]">Signature finish</p>
          <h3 className="mt-4 font-display-lg text-3xl leading-[1.0] tracking-[-0.02em] md:text-4xl">
            The kind of polish that turns heads before a single word is spoken.
          </h3>
          <p className="mt-6 text-base leading-8 text-[#584f43]">
            Precision is not loud. It is felt in the softness of the movement, the confidence of the silhouette, and the quiet luxury of a result that looks effortless.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b0b0b]"
          >
            See the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.2rem] border border-[#d4af37]/25 bg-[#111111] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.22)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_30%)]" />
          <div className="relative rounded-[1.5rem] border border-[#d4af37]/20 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(212,175,55,0.12))] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/90">Crafted with intention</p>
            <div className="mt-8 space-y-5">
              {[
                ["01", "Traceable origin stories"],
                ["02", "Sculpted, hand-finished texture"],
                ["03", "A refined, wearable finish"],
              ].map(([index, text]) => (
                <div key={text} className="flex items-center gap-4 border-b border-[#d4af37]/20 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-sm uppercase tracking-[0.3em] text-[#d4af37]/80">{index}</span>
                  <p className="text-lg text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
