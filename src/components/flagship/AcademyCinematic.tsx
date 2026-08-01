"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { WordsPullUp } from "@/components/ui/words-pull-up";

/**
 * Full-bleed dark cinematic CTA — a single idea, a single move.
 */
export function AcademyCinematic() {
  return (
    <section className="relative overflow-hidden bg-on-surface px-6 py-40 text-white md:px-16 md:py-56">
      <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.06)_0%,_transparent_45%,_rgba(255,255,255,0.04)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="mb-8 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary-fixed-dim">
            Hair Academy
          </p>
          <WordsPullUp
            text="Master the art of the source."
            className="mb-10 font-display-lg text-4xl leading-[1.05] tracking-[-0.02em] md:text-7xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 max-w-lg font-body-xl text-lg text-surface-variant"
          >
            Training in importation, quality assessment and business scaling for luxury hair entrepreneurs —
            taught by the house that imports its own.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-10"
          >
            <Link
              href="/academy/enroll"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] text-on-primary-container transition-colors hover:bg-primary-fixed-dim"
            >
              Enroll Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/academy"
              className="group inline-flex items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em]"
            >
              Course Overview
              <span className="h-[1px] w-8 bg-white transition-all duration-500 group-hover:w-14" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-white/60">
            <GraduationCap className="h-4 w-4 text-primary" />
            The educational arm of the house
          </div>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full border border-primary/30 bg-primary/10 p-2 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl text-white">A rigorous, real-world curriculum</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    Learn how luxury hair is sourced, assessed, and built into a business with substance and lasting appeal.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full border border-primary/30 bg-primary/10 p-2 text-primary">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl text-white">Designed for founders and stylists</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    The academy offers both artistry and operational insight, with a premium standard from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
