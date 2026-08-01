"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LuxuryManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.24),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(212,175,55,0.16),_transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-[#d4af37]/90">
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
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-[#f9e8b6] shadow-[0_0_0_1px_rgba(212,175,55,0.18)] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0b0b0b]"
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
          className="rounded-[2rem] border border-[#d4af37]/20 bg-[#111111]/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
        >
          <div className="space-y-6">
            {[
              ["Traceable", "Origin stories are clear, documented, and elevated by design."],
              ["Sculpted", "Every finish is tailored for movement, softness, and confidence."],
              ["Uncompromising", "Luxury is measured in the detail, not in excess."],
            ].map(([title, body]) => (
              <div key={title} className="border-b border-[#d4af37]/15 pb-5 last:border-b-0 last:pb-0">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/85">{title}</p>
                <p className="mt-3 text-base leading-7 text-white/75">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
