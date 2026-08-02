"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { faqGroups } from "@/lib/faqs";

/**
 * The objection-handling chapter, set as editorial rather than a support
 * widget. Pulls the real published answers from lib/faqs.ts — the first
 * question of the three most purchase-relevant groups — so the homepage
 * answers what actually stops a sale (is it real hair, how does it ship,
 * how do appointments work) without duplicating the full /faqs page.
 */
const featured = faqGroups
  .filter((g) => ["Hair & Quality", "Orders & Shipping", "Services & Bookings"].includes(g.title))
  .flatMap((group) => group.faqs.slice(0, 2).map((faq) => ({ ...faq, group: group.title })));

export function HomeFaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-noir-high text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_rgba(201,162,39,0.14),_transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold">
              Considered answers
            </p>
            <h2 className="font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
              Everything you would ask before spending this much.
            </h2>
            <Link
              href="/faqs"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/35 px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.25em] text-gold-light transition-colors duration-300 hover:border-gold hover:bg-gold/10"
            >
              All questions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="divide-y divide-gold/15 border-y border-gold/15">
            {featured.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                  >
                    <span className="flex-1">
                      <span className="mb-2 block font-label-caps text-[10px] uppercase tracking-[0.28em] text-gold/70">
                        {faq.group}
                      </span>
                      <span className="font-display-md text-xl leading-[1.25] text-white transition-colors duration-300 group-hover:text-gold-light md:text-2xl">
                        {faq.q}
                      </span>
                    </span>
                    <Plus
                      className={`mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-base leading-8 text-white/65">{faq.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
