"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * 08 — The Founder.
 *
 * The flow asks for Chi to appear before the social proof, so the reader
 * meets a person rather than a logo. What is missing is a written founder
 * statement in her own voice — that has to come from her, and putting words
 * in a founder's mouth is the one thing this chapter must not do.
 *
 * So it carries the three facts the house already stands on everywhere else
 * on the site (sourced at origin, made in the Lagos atelier, taught through
 * the Academy) against her real portrait. When a statement is supplied it
 * belongs in the space above the pillars, replacing nothing.
 */
const PILLARS = [
  {
    title: "Imported directly",
    body: "Raw Vietnamese hair, bought at source rather than through a middle market.",
  },
  {
    title: "Made on the floor",
    body: "Installation, ventilation and Hair Laundry happen in the Lagos atelier — not outsourced.",
  },
  {
    title: "Taught, not gatekept",
    body: "The house trains entrepreneurs to import and grade hair through the ByChiStrands Academy.",
  },
];

export function HouseFounder() {
  return (
    <section className="bg-[#0b0907] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1760px] items-end gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#141110]">
            <Image
              src="/services/ceo-portrait-1.jpeg"
              alt="Chi, founder of ByChiStrands, wearing a wine-toned unit from the house"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-[8px] uppercase tracking-[.4em] text-white/40">
            Chi · Founder · Lagos
          </figcaption>
        </motion.figure>

        <div className="lg:col-span-7">
          <p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">08 / The Founder</p>
          <h2 className="font-serif text-[clamp(3.2rem,6.5vw,7.5rem)] leading-[.74] tracking-[-.06em]">
            This is
            <br />
            <i>By Chi.</i>
          </h2>

          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-[#0b0907] py-7 sm:px-6 sm:py-8">
                <h3 className="font-serif text-xl text-[#c8a45d]">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{p.body}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-10 inline-block border-b border-[#c8a45d] pb-2 text-[8px] uppercase tracking-[.35em] text-[#c8a45d]"
          >
            Inside the house
          </Link>
        </div>
      </div>
    </section>
  );
}
