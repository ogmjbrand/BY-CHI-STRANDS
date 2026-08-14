"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { hasScene, scene, type SceneName } from "@/lib/media";
import { SectionBackdrop } from "./SectionBackdrop";

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
 * Services with a frame of their own. A picture of something else would be a
 * picture of something else, so a service without one stays typographic.
 *
 * `hair-tools` is in the list but its scene is marked `pending` in lib/media
 * until a photograph of the tools the house actually sells is committed at
 * /services/hair-tools.jpg — `hasScene` is what decides, so dropping the file
 * in is the whole job and nothing here changes.
 */
const HAS_SHOT = new Set([
  "hair-laundry",
  "hair-importation-service",
  "wig-making",
  "ventilation",
  "frontal-installation",
  "training",
  "hair-tools",
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
    <section ref={ref} className="relative overflow-x-clip bg-[#0b0907] px-6 py-24 md:px-10 md:py-36">
      <SectionBackdrop name="backdrop-craft" />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="mb-8 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
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
          className="grid w-full grid-cols-2 gap-px bg-white/10 lg:ml-[-5%] lg:w-[110%] lg:grid-cols-4"
        >
          {services.slice(0, 7).map((s, i) => {
            /* hair-tools is the one service whose frame lives outside the
               craft-* group, because it is a product shot rather than a
               picture of the work being done. */
            const key = (s.slug === "hair-tools"
              ? "service-hair-tools"
              : `craft-${s.slug}`) as SceneName;
            const shot = HAS_SHOT.has(s.slug) && hasScene(key) ? scene(key) : null;
            return (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group relative flex min-h-[210px] flex-col justify-between overflow-hidden bg-[#0b0907] p-4 transition-colors hover:bg-[#181513] md:min-h-[380px] md:p-9"
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
                    className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-[#0b0907]/55 to-[#0b0907]/20"
                  />
                </>
              ) : null}
              <p className="relative font-serif text-2xl text-[#c8a45d]/80 md:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="relative">
                <h3 className="font-serif text-lg leading-tight md:text-[1.75rem]">{s.name}</h3>
                <p className="mt-2 hidden text-sm leading-6 text-white/55 sm:block md:mt-3">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-[8px] uppercase tracking-[.35em] text-white/40 md:mt-5">
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
            className="group flex min-h-[210px] flex-col justify-between bg-[#181513] p-4 transition-colors hover:bg-[#221e1b] md:min-h-[240px] md:p-9"
          >
            <p className="font-serif text-2xl text-[#c8a45d]/70 md:text-3xl">08</p>
            <div>
              <h3 className="font-serif text-lg leading-tight md:text-[1.75rem]">
                Everything else
              </h3>
              <p className="mt-2 hidden text-sm leading-6 text-white/55 sm:block md:mt-3">
                Consultations, home service and the full price list.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-[8px] uppercase tracking-[.35em] text-[#c8a45d] md:mt-5">
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
