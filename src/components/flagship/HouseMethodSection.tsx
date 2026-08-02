"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Scissors, Sparkles, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Texture-led consultation",
    body: "Every appointment begins with a deliberate study of your hair’s movement, density, and rhythm.",
    icon: Scissors,
  },
  {
    title: "Bespoke finish",
    body: "Each look is shaped for softness, structure, and a finish that feels effortless in real life.",
    icon: Sparkles,
  },
  {
    title: "Aftercare intimacy",
    body: "We guide the styling, maintenance, and ritual so the feeling lasts beyond the appointment.",
    icon: Droplets,
  },
  {
    title: "Quiet confidence",
    body: "The result is polished presence that feels composed, luminous, and unmistakably personal.",
    icon: ShieldCheck,
  },
];

export function HouseMethodSection() {
  return (
    <section className="relative overflow-hidden bg-noir text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/posters/imgi_63_3205cd12704a2671c63e2f9419cba1ef.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,_rgba(4,4,4,0.96)_0%,_rgba(4,4,4,0.85)_45%,_rgba(4,4,4,0.6)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.18),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(201,162,39,0.12),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold">
              The House Method
            </p>
            <h2 className="font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] text-white md:text-6xl">
              A private ritual, designed around your natural elegance.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              We don’t rush beauty. Each appointment is shaped with care, precision, and the calm confidence of a truly bespoke finish.
            </p>
            <a
              href="/book"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/15 px-5 py-3 text-sm uppercase tracking-[0.25em] text-gold-light shadow-[0_0_0_1px_rgba(201,162,39,0.18)] transition-all duration-300 hover:bg-gold hover:text-noir"
            >
              Begin your consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-gold/20 bg-noir-high/85 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-8"
          >
            <div className="space-y-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-gold/20 bg-black/25 p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full border border-gold/30 bg-gold/10 p-2 text-gold">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-xl text-white">{pillar.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/70">{pillar.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
