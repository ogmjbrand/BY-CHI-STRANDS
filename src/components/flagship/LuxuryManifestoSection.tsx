"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LuxuryManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-noir text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/posters/imgi_482_769b96d9696a394e413091dbbbe82e8a.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,_rgba(13,11,8,0.97)_0%,_rgba(13,11,8,0.9)_35%,_rgba(13,11,8,0.55)_70%,_rgba(13,11,8,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,39,0.22),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(201,162,39,0.14),_transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold">
            The manifesto
          </p>
          <h2 className="max-w-3xl font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Hair should feel like an extension of presence, not an afterthought.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Every detail is designed to feel considered: quiet luxury, refined texture, and a finish that turns ordinary moments into something unforgettable.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/15 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-gold-light shadow-[0_0_0_1px_rgba(201,162,39,0.18)] transition-all duration-300 hover:bg-gold hover:text-noir"
          >
            Enter the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-gold/20 bg-noir-high/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        >
          <div className="space-y-6">
            {[
              ["Traceable", "Origin stories are clear, documented, and elevated by design."],
              ["Sculpted", "Every finish is tailored for movement, softness, and confidence."],
              ["Uncompromising", "Luxury is measured in the detail, not in excess."],
            ].map(([title, body]) => (
              <div key={title} className="border-b border-gold/15 pb-5 last:border-b-0 last:pb-0">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{title}</p>
                <p className="mt-3 text-base leading-7 text-white/75">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
