"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/journal";

const FEATURED = articles.slice(0, 3);

/**
 * Magazine index: one large featured story, two smaller entries beside it —
 * not a uniform blog-card grid.
 */
export function JournalEditorial() {
  const [lead, ...rest] = FEATURED;

  return (
    <section className="bg-surface px-6 py-32 md:px-16 md:py-48">
      <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
        <div>
          <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary">
            Hair Care Journal
          </p>
          <h2 className="font-display-lg text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
            From the journal.
          </h2>
        </div>
        <Link
          href="/journal"
          className="group inline-flex shrink-0 items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em]"
        >
          Read the Journal
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {lead ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[2rem] border border-outline-variant/30 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:col-span-7"
          >
            <Link href={`/journal/${lead.slug}`} className="group block">
              {/*
               * Every article already carries a real photograph (lib/journal
               * `image`). The index was showing none of them, so the section
               * ran as three paragraphs of grey text on a page that is
               * otherwise carried by its photography.
               */}
              <span className="block aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lead.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </span>
              <span className="block p-8 lg:p-10">
              <p className="mb-4 font-label-caps text-[10px] uppercase tracking-[0.3em] text-primary">
                {lead.category}
              </p>
              <h3 className="mb-5 font-display-lg text-3xl leading-tight transition-colors duration-300 group-hover:text-primary md:text-4xl">
                {lead.title}
              </h3>
              <p className="mb-6 max-w-xl font-body-md text-on-surface-variant">{lead.excerpt}</p>
              <div className="flex items-center justify-between border-t border-outline-variant/20 pt-5">
                <p className="font-label-caps text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60">
                  {lead.readTime}
                </p>
                <span className="inline-flex items-center gap-2 font-label-caps text-[10px] uppercase tracking-[0.25em] text-on-surface-variant">
                  Continue reading
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
              </span>
            </Link>
          </motion.div>
        ) : null}

        <div className="space-y-8 lg:col-span-5">
          {rest.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-[1.5rem] border border-outline-variant/30 bg-white/[0.03]"
            >
              <Link href={`/journal/${a.slug}`} className="group flex gap-5 p-5">
                <span className="block h-24 w-20 shrink-0 overflow-hidden rounded-[0.75rem] sm:h-28 sm:w-24">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </span>
                <span className="min-w-0">
                  <span className="mb-2 block font-label-caps text-[10px] uppercase tracking-[0.3em] text-primary">
                    {a.category}
                  </span>
                  <span className="mb-2 block font-headline-lg text-lg leading-snug transition-colors duration-300 group-hover:text-primary">
                    {a.title}
                  </span>
                  <span className="block font-body-sm text-on-surface-variant line-clamp-3">
                    {a.excerpt}
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
