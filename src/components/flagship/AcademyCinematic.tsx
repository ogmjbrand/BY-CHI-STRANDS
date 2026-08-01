"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WordsPullUp } from "@/components/ui/words-pull-up";

/**
 * Full-bleed dark cinematic CTA — a single idea, a single move.
 */
export function AcademyCinematic() {
  return (
    <section className="relative bg-on-surface text-white py-40 md:py-56 px-6 md:px-16 overflow-hidden">
      <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative max-w-4xl">
        <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary-fixed-dim mb-8">
          Hair Academy
        </p>
        <WordsPullUp
          text="Master the art of the source."
          className="font-display-lg text-4xl md:text-7xl leading-[1.05] tracking-[-0.02em] mb-10"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body-xl text-lg text-surface-variant max-w-lg mb-12"
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
            className="bg-primary text-on-primary-container px-10 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] hover:bg-primary-fixed-dim transition-colors"
          >
            Enroll Now
          </Link>
          <Link
            href="/academy"
            className="group inline-flex items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em]"
          >
            Course Overview
            <span className="w-8 h-[1px] bg-white transition-all duration-500 group-hover:w-14" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
