"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { posterFor } from "@/lib/media";

/*
 * One photograph per featured service. Only the frontal installation has a
 * photograph of the service itself; the other two are accompanied by real
 * house units, and the alt text says so rather than implying the shot was
 * taken during that service.
 */
const IMAGERY: Record<string, { src: string; alt: string }> = {
  "frontal-installation": {
    src: "/services/frontal-installation-1.jpg",
    alt: "A frontal installation finished in the Lagos atelier",
  },
  "wig-making": {
    src: posterFor("sdd-vietnam-bone-straight"),
    alt: "A Super Double Drawn Vietnamese unit built on closure lace",
  },
  "hair-laundry": {
    src: posterFor("sdd-vietnam-bone-straight-wine"),
    alt: "A wine and dark-root unit, washed and steam-set",
  },
};

const FEATURED = ["frontal-installation", "wig-making", "hair-laundry"]
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

/**
 * A quiet, numbered editorial list — no pricing cards, no icon tiles.
 * Luxury services pages don't sell on price; the real model here is
 * quote-on-consultation, so the layout never implies otherwise.
 *
 * Each row carries its own photograph. On a desktop it sits in the row and
 * scales on hover; on a phone it leads the row full width, because a
 * hover-revealed image is no image at all on a touch screen.
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
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:items-center py-10 border-t border-outline-variant/20 last:border-b"
          >
            <span className="order-2 md:order-none md:col-span-1 font-display-md text-primary/85 text-lg tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>

            {IMAGERY[svc.slug] ? (
              <span className="order-1 md:order-none md:col-span-3 block aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-sm bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGERY[svc.slug].src}
                  alt={IMAGERY[svc.slug].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
              </span>
            ) : null}

            <h3 className="order-3 md:order-none md:col-span-3 font-display-lg text-2xl md:text-3xl group-hover:text-primary transition-colors">
              {svc.name}
            </h3>
            <p className="order-4 md:order-none md:col-span-3 font-body-sm text-on-surface-variant">{svc.short}</p>
            <div className="order-5 md:order-none md:col-span-2 flex md:justify-end">
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
