"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ImageReveal } from "@/components/ui/image-reveal";
import { posterFor } from "@/lib/media";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

/**
 * Asymmetric editorial split — no icon cards, no bordered "trust" tiles.
 * One large real studio image, one oversized pull-quote. The three real
 * positioning pillars (ethically sourced / single donor / artisan crafted)
 * survive as a quiet typographic list, not boxed badges.
 */
export function BrandStoryEditorial() {
  return (
    <section id="brand-story" className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:h-[110vh]">
          <ImageReveal className="h-full w-full">
            <img
              src={posterFor("sdd-vietnam-bone-straight")}
              alt="A ByChi Strands unit on a studio stand"
              className="h-full w-full object-cover grayscale-[15%]"
            />
          </ImageReveal>
        </div>

        <div className="flex flex-col justify-center px-6 py-24 md:px-16 md:py-0 lg:col-span-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary"
          >
            Brand Story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mb-10 font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] md:text-6xl"
          >
            One donor. One strand. One promise carried through every detail.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mb-12 max-w-md text-lg leading-8 text-on-surface-variant"
          >
            Every unit begins in the highlands of Vietnam, collected with fair trade principles from a single
            individual so the cuticle is never forced into compromise. It is then hand-sewn, length by length,
            in our Lagos atelier for a softer, more elevated finish.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="rounded-[2rem] border border-outline-variant/30 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <ol className="space-y-6">
              {[
                ["01", "Ethically Sourced", "Fair trade collection, village by village."],
                ["02", "Single Donor", "Cuticle alignment kept intact from root to tip."],
                ["03", "Artisan Crafted", "Hand-tied in the studio, never machine-wefted."],
              ].map(([n, title, body]) => (
                <li key={n} className="flex gap-6 border-t border-outline-variant/20 pt-6 first:border-t-0 first:pt-0">
                  <span className="pt-1 font-display-md text-sm text-primary">{n}</span>
                  <div>
                    <p className="font-headline-lg text-lg">{title}</p>
                    <p className="mt-1 font-body-sm text-on-surface-variant">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em] text-on-surface transition-colors hover:text-primary"
            >
              Read the full story
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
