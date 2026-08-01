"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/lib/journal";

const FEATURED = articles.slice(0, 3);

/**
 * Magazine index: one large featured story, two smaller entries beside it —
 * not a uniform blog-card grid.
 */
export function JournalEditorial() {
  const [lead, ...rest] = FEATURED;

  return (
    <section className="bg-surface py-32 md:py-48 px-6 md:px-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
        <div>
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary mb-6">
            Hair Care Journal
          </p>
          <h2 className="font-display-lg text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
            From the journal.
          </h2>
        </div>
        <Link
          href="/journal"
          className="group inline-flex items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em] shrink-0"
        >
          Read the Journal
          <span className="w-8 h-[1px] bg-on-surface transition-all duration-500 group-hover:w-14" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {lead ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <Link href={`/journal/${lead.slug}`} className="group block">
              <p className="font-label-caps text-[10px] uppercase tracking-widest text-primary mb-4">
                {lead.category}
              </p>
              <h3 className="font-display-lg text-3xl md:text-4xl leading-tight mb-5 group-hover:text-primary transition-colors">
                {lead.title}
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-xl mb-4">{lead.excerpt}</p>
              <p className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                {lead.readTime}
              </p>
            </Link>
          </motion.div>
        ) : null}

        <div className="lg:col-span-5 space-y-10">
          {rest.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-outline-variant/20 pt-8"
            >
              <Link href={`/journal/${a.slug}`} className="group block">
                <p className="font-label-caps text-[10px] uppercase tracking-widest text-primary mb-3">
                  {a.category}
                </p>
                <h4 className="font-headline-lg text-xl mb-3 group-hover:text-primary transition-colors">
                  {a.title}
                </h4>
                <p className="font-body-sm text-on-surface-variant">{a.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
