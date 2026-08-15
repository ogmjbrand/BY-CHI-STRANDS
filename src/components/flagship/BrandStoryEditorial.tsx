"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ImageReveal } from "@/components/ui/image-reveal";
import { posterFor } from "@/lib/media";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } } };

export function BrandStoryEditorial() {
  return (
    <section id="brand-story" className="overflow-hidden bg-surface">
      <div className="grid lg:grid-cols-12">
        <div className="relative aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:h-[110vh]">
          <ImageReveal className="h-full w-full">
            <img src={posterFor("sdd-bone-straight")} alt="By Chi Strands hair unit in studio" className="h-full w-full object-cover grayscale-[12%] transition-transform duration-[2s] hover:scale-[1.025]" />
          </ImageReveal>
          <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white md:bottom-10 md:left-10">
            <span className="h-px w-10 bg-gold" />
            <span className="font-label-caps text-[9px] uppercase tracking-[0.3em]">The house / 01</span>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-24 md:px-16 lg:col-span-5 lg:py-0 xl:px-20">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8 font-label-caps text-[10px] uppercase tracking-[0.34em] text-primary">
            The By Chi standard
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.08 }} className="max-w-xl font-display-lg text-[clamp(2.8rem,4.4vw,5.5rem)] leading-[0.9] tracking-[-0.045em]">
            One donor.<br />One strand.<br /><span className="text-on-surface/40">One promise.</span>
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.16 }} className="mt-10 max-w-md text-base leading-8 text-on-surface-variant md:text-lg">
            From carefully selected raw hair to the finished piece, every decision is made for a softer, more natural and more considered result.
          </motion.p>

          <motion.ol variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.24 }} className="mt-14 border-t border-outline-variant/30">
            {[
              ["01", "Ethically sourced", "Selected with care."],
              ["02", "Single donor", "Natural cuticle alignment."],
              ["03", "Artisan crafted", "Finished by hand."],
            ].map(([n, title, body]) => (
              <li key={n} className="group grid grid-cols-[3rem_1fr] border-b border-outline-variant/30 py-6 transition-colors hover:bg-black/[0.02]">
                <span className="font-label-caps text-[9px] tracking-[0.2em] text-primary">{n}</span>
                <div>
                  <p className="font-headline-lg text-lg">{title}</p>
                  <p className="mt-1 text-sm text-on-surface-variant">{body}</p>
                </div>
              </li>
            ))}
          </motion.ol>

          <motion.a variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.32 }} href="/about" className="group mt-10 inline-flex w-fit items-center gap-4 border-b border-on-surface/30 pb-3 font-label-caps text-[10px] uppercase tracking-[0.28em] hover:border-primary hover:text-primary">
            Enter the story
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
