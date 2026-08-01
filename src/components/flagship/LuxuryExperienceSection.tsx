"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    title: "Traceable sourcing",
    body: "Each unit begins with a documented origin story, so the beauty is felt long before the first wear.",
    icon: BadgeCheck,
  },
  {
    title: "Hand-finished elegance",
    body: "Every strand is curated, sealed, and styled by hand in our Lagos atelier for a softer, more deliberate finish.",
    icon: Sparkles,
  },
  {
    title: "Luxury confidence",
    body: "The result is a polished, wearable experience made for movement, portraiture, and long-lasting presence.",
    icon: ShieldCheck,
  },
];

export function LuxuryExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#060606] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_45%),radial-gradient(circle_at_90%_10%,_rgba(255,255,255,0.08),_transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-white/60">
              The House Promise
            </p>
            <h2 className="font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] text-white md:text-6xl">
              Beauty that feels private, polished, and unmistakably intentional.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              From sourcing to styling, every detail is designed to feel rare. The experience is calm, cinematic, and made to elevate the way hair is worn.
            </p>
            <a
              href="#collections"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-[#060606]"
            >
              Explore the edit
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-8"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-white/60">
              <Sparkles className="h-4 w-4 text-primary" />
              Crafted for modern luxury
            </div>
            <div className="mt-8 space-y-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full border border-primary/30 bg-primary/10 p-2 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                          0{index + 1}
                        </p>
                        <h3 className="mt-2 text-xl text-white">{pillar.title}</h3>
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
