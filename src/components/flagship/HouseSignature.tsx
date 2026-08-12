"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * A full-bleed brand statement — the house logotype set at scale over a
 * finished look, rather than another headline on a flat panel.
 *
 * The photograph is the styling reference already in the repository
 * (public/inspiration): a hand-finished updo with a melted hairline, which
 * is exactly what the copy either side of it describes. It is a finished
 * look, not a listed product, so nothing here prices it or links it to a
 * catalogue page it does not have — it links to the services that produce
 * that finish.
 */
export function HouseSignature() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Slow drift, compositor-only. Flat when reduced motion is preferred.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative isolate min-h-[92svh] overflow-hidden bg-noir">
      <motion.div style={{ y }} className="absolute inset-[-6%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/inspiration/updo-reference-01.jpg"
          alt="A hand-finished updo with a melted lace hairline and shaped face-framing waves"
          /*
           * The source is a 720x1280 portrait in a landscape frame, so a
           * centred crop lands on the ear. Biased upward to keep the updo —
           * the whole reason the photograph is here — inside the window.
           */
          className="h-full w-full object-cover object-[58%_22%] md:object-[center_38%]"
        />
      </motion.div>

      {/* Weighted to the left, where the type sits, and to the foot for the CTA. */}
      <div className="absolute inset-0 bg-[linear-gradient(95deg,_rgba(2,2,2,0.9)_0%,_rgba(2,2,2,0.6)_38%,_rgba(2,2,2,0.15)_68%,_rgba(2,2,2,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,2,2,0.55)_0%,_rgba(2,2,2,0)_30%,_rgba(2,2,2,0.2)_70%,_rgba(2,2,2,0.85)_100%)]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      <div className="relative z-10 flex min-h-[92svh] flex-col justify-end px-6 pb-20 pt-32 md:px-16 md:pb-28">
        <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold-light">
          The House Signature
        </p>

        {/* The logotype at editorial scale — one family, per the logo
            reference. Renders through the shared Wordmark so the identity
            has a single definition. */}
        <h2 className="max-w-5xl text-white">
          <Wordmark size="display" />
        </h2>

        <p className="mt-8 max-w-md font-body-xl leading-relaxed text-white/80">
          A hairline melted by hand, a shape cut to your face, a finish that
          holds until you decide otherwise. That is the whole signature — there
          is no shortcut in it.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/services"
            className="bg-gold px-9 py-4 text-center font-label-caps text-[11px] uppercase tracking-[0.22em] text-noir transition-colors duration-500 hover:bg-gold-light"
          >
            The Atelier Services
          </Link>
          <Link
            href="/book"
            className="border border-white/40 px-9 py-4 text-center font-label-caps text-[11px] uppercase tracking-[0.22em] text-white transition-colors duration-500 hover:border-gold hover:text-gold-light"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
