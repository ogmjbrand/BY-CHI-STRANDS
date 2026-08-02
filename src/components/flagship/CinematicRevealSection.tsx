"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CinematicRevealSection() {
  return (
    <section className="relative overflow-hidden bg-noir text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(201,162,39,0.16),_transparent_32%),radial-gradient(circle_at_80%_0%,_rgba(201,162,39,0.12),_transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2.2rem] border border-gold/25 bg-noir-high p-8 shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Signature finish</p>
          <h3 className="mt-4 font-display-lg text-3xl leading-[1.0] tracking-[-0.02em] text-white md:text-4xl">
            The kind of polish that turns heads before a single word is spoken.
          </h3>
          <p className="mt-6 text-base leading-8 text-white/70">
            Precision is not loud. It is felt in the softness of the movement, the confidence of the silhouette, and the quiet luxury of a result that looks effortless.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-noir transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light"
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
          className="relative overflow-hidden rounded-[2.2rem] border border-gold/25 shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/posters/imgi_10_0d5ce3f9eaf2c51beb8e723133b28a8e.jpg"
            alt="Sculpted wave finish, shown on the studio stand"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(13,11,8,0.92)_0%,_rgba(13,11,8,0.35)_45%,_rgba(13,11,8,0.15)_100%)]" />
          <div className="relative p-6">
            <div className="rounded-[1.5rem] border border-gold/20 bg-noir/70 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Crafted with intention</p>
              <div className="mt-8 space-y-5">
                {[
                  ["01", "Traceable origin stories"],
                  ["02", "Sculpted, hand-finished texture"],
                  ["03", "A refined, wearable finish"],
                ].map(([index, text]) => (
                  <div key={text} className="flex items-center gap-4 border-b border-gold/20 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-sm uppercase tracking-[0.3em] text-gold/80">{index}</span>
                    <p className="text-lg text-white">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
