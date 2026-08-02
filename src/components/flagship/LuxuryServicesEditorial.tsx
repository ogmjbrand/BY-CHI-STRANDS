"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

const FEATURED = ["frontal-installation", "wig-making", "hair-laundry"]
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

/**
 * A quiet, numbered editorial list — no pricing cards, no icon tiles.
 * Luxury services pages don't sell on price; the real model here is
 * quote-on-consultation, so the layout never implies otherwise.
 */
export function LuxuryServicesEditorial() {
  return (
    <section className="bg-surface py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-3xl mb-16 md:mb-24">
        <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary mb-6">Luxury Services</p>
        <h2 className="font-display-lg text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
          The atelier, by appointment.
        </h2>
      </div>

      <div className="max-w-5xl">
        {FEATURED.map((svc, i) => (
          <motion.div
            key={svc.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 border-t border-outline-variant/20 last:border-b"
          >
            <span className="md:col-span-1 font-display-md text-primary/85 text-lg tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="md:col-span-4 font-display-lg text-2xl md:text-3xl group-hover:text-primary transition-colors">
              {svc.name}
            </h3>
            <p className="md:col-span-5 font-body-sm text-on-surface-variant">{svc.short}</p>
            <div className="md:col-span-2 flex md:justify-end">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 font-label-caps text-[11px] uppercase tracking-[0.2em]"
              >
                Reserve
                <span className="material-symbols-outlined text-sm">north_east</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
