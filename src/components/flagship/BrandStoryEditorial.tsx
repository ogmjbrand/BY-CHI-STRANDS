"use client";

import { motion } from "framer-motion";
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
        <div className="lg:col-span-7 aspect-[4/5] lg:aspect-auto lg:h-[110vh]">
          <ImageReveal className="w-full h-full">
            <img
              src={posterFor("sdd-vietnam-bone-straight")}
              alt="A ByChi Strands unit on a studio stand"
              className="w-full h-full object-cover grayscale-[15%]"
            />
          </ImageReveal>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center px-6 md:px-16 py-24 md:py-0">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary mb-8"
          >
            Brand Story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display-lg text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em] mb-10"
          >
            One donor. One strand. One promise kept.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-body-xl text-lg text-on-surface-variant max-w-md mb-12"
          >
            Every unit begins in the highlands of Vietnam, collected with fair trade principles from a single
            individual so the cuticle never has to be untangled from another donor&apos;s hair. It is then hand-sewn,
            length by length, in our Lagos atelier.
          </motion.p>

          <motion.ol
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {[
              ["01", "Ethically Sourced", "Fair trade collection, village by village."],
              ["02", "Single Donor", "Cuticle alignment kept intact from root to tip."],
              ["03", "Artisan Crafted", "Hand-tied in the studio, never machine-wefted."],
            ].map(([n, title, body]) => (
              <li key={n} className="flex gap-6 border-t border-outline-variant/20 pt-6">
                <span className="font-display-md text-primary text-sm pt-1">{n}</span>
                <div>
                  <p className="font-headline-lg text-lg">{title}</p>
                  <p className="font-body-sm text-on-surface-variant mt-1">{body}</p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
