"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { scene, type SceneName } from "@/lib/media";

/**
 * 07 — The Craft.
 *
 * The chapter the flow calls for between the product and the transformation:
 * what the house actually does to hair, rather than what it sells.
 *
 * The steps are the real service list from lib/services — laundry, wig
 * making, ventilation, installation — not an invented factory sequence.
 * A "CUT · SORT · WEFT · BLEACH · FINISH" production line would read well and
 * would be a claim about a manufacturing process the house has not
 * documented anywhere; these are capabilities it genuinely offers and prices.
 *
 * The numbers count the work, and the row slides horizontally against the
 * scroll on wide screens so the chapter moves laterally where every other
 * section moves down. Under reduced motion it is a static grid.
 *
 * Every tile carries a real photograph of that work — the supplier trip, a
 * client's wig as it arrived, a finished install, a mentorship session. This
 * section used to be seven text cards on a brown ground, which is the exact
 * "collection of generic cards" the brief rules out, and it showed none of
 * the house's own photography while thirty pieces of it sat behind the
 * product pages. Two services have no photograph of their own yet
 * (hair tools, and the laundry bench); those tiles stay typographic rather
 * than borrowing a picture of something else.
 */
/*
 * Services with a real frame of their own. Hair tools and the laundry bench
 * have none yet, and a picture of something else would be a picture of
 * something else.
 */
const HAS_SHOT = new Set([
  "hair-laundry",
  "hair-importation-service",
  "wig-making",
  "ventilation",
  "frontal-installation",
  "training",
]);

export function HouseCraft() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // A restrained drift — the row is legible at every point, never a carousel
  // the reader has to chase.
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={ref} className="overflow-hidden bg-[#21150f] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">06 / The Craft</p>
            <h2 className="font-serif text-[clamp(3.4rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">
              What we do
              <br />
              <i>to the hair.</i>
            </h2>
          </div>
          <Link
            href="/services"
            className="w-fit border-b border-[#c8a45d]/60 pb-2 text-[8px] uppercase tracking-[.35em] text-[#c8a45d]"
          >
            All services
          </Link>
        </div>

        {/*
          Wider than its container and pulled back by half the excess, so the
          ±4% drift never walks an edge into view. At exactly 100% the row left
          a ~51px strip of bare section down the right at 1280.
        */}
        <motion.div
          style={reduceMotion ? undefined : { x }}
          className="grid w-full grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:ml-[-5%] lg:w-[110%] lg:grid-cols-4"
        >
          {services.slice(0, 7).map((s, i) => {
            const key = `craft-${s.slug}` as SceneName;
            const shot = HAS_SHOT.has(s.slug) ? scene(key) : null;
            return (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#21150f] p-7 transition-colors hover:bg-[#2a1c14] md:min-h-[380px] md:p-9"
            >
              {shot ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-[1.4s] group-hover:scale-[1.05] group-hover:opacity-60"
                  />
                  {/* The type sits on the picture, so the picture has to give
                      it a ground to sit on. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#1a100b] via-[#1a100b]/55 to-[#1a100b]/20"
                  />
                </>
              ) : null}
              <p className="relative font-serif text-3xl text-[#c8a45d]/80">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="relative">
                <h3 className="font-serif text-2xl leading-tight md:text-[1.75rem]">{s.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[8px] uppercase tracking-[.35em] text-white/40">
                  Details
                  <ArrowRight size={12} className="text-[#c8a45d] transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            );
          })}

          {/*
            Seven services into a four-column grid leaves one cell empty, and
            with a 1px gap over a light ground the hole reads as a broken
            tile. This fills it with somewhere to go rather than a spacer.
          */}
          <Link
            href="/services"
            className="group flex min-h-[240px] flex-col justify-between bg-[#2a1c14] p-7 transition-colors hover:bg-[#33231a] md:p-9"
          >
            <p className="font-serif text-3xl text-[#c8a45d]/70">08</p>
            <div>
              <h3 className="font-serif text-2xl leading-tight md:text-[1.75rem]">
                Everything else
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Consultations, home service and the full price list.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[8px] uppercase tracking-[.35em] text-[#c8a45d]">
                All services
                <ArrowRight size={12} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
