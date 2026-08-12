"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  beforeAfterPairs,
  transformationFallbackAfter,
  type BeforeAfterPair,
} from "@/lib/before-after";

/**
 * The transformation chapter — full-bleed, scroll-driven.
 *
 * Not a slider with a draggable handle sitting in a card. The section pins to
 * the viewport and the finished work wipes across the frame as you scroll
 * through it, so the reveal *is* the scroll rather than a widget you have to
 * notice and operate. The copy sits on the image.
 *
 * Two things keep that from being a trap:
 *
 *   - Under `prefers-reduced-motion` there is no pin and no scroll-linked
 *     wipe. The two frames are shown side by side instead, which is the same
 *     information without the choreography.
 *   - A real range input is rendered for keyboard and assistive-technology
 *     users, who cannot drive a scroll-linked animation meaningfully. It is
 *     visually subtle but genuinely focusable, and it moves the same wipe.
 *
 * On the placeholder state, see lib/before-after: the "before" half of every
 * pair is a factual claim about a specific client, so it is drawn as a marked
 * panel rather than filled with an unrelated photograph.
 *
 * Palette note: this lives inside HouseHomepage, which sets its section
 * colours as literal hex rather than through the theme tokens. The values
 * here match that page's own (#0b0907 ground, #c8a45d gold, `font-serif`
 * headings, numbered eyebrow) so the chapter reads as part of the sequence
 * rather than a component borrowed from somewhere else.
 */
const GOLD = "#c8a45d";

export function TransformationReveal() {
  const track = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const sliderId = useId();

  const pair: BeforeAfterPair | undefined = beforeAfterPairs[0];
  const isPlaceholder = !pair;
  const after = pair?.after ?? transformationFallbackAfter;

  /*
   * Manual override from the range input. Null means "follow the scroll" —
   * distinct from 0, which is a real position the user may have chosen.
   */
  const [manual, setManual] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: track,
    // 0 when the track's top reaches the top of the viewport (the moment the
    // frame pins), 1 when its bottom does (the moment it unpins).
    offset: ["start start", "end end"],
  });

  /*
   * The wipe runs across most of the pin, with a short hold at each end so the
   * frame reads as composed before and after rather than moving the instant it
   * sticks. Measured: a narrower range finished the reveal in the first third
   * of the track and left roughly 1100px of scrolling where nothing changed.
   */
  const scrollWipe = useTransform(scrollYProgress, [0.08, 0.88], [0, 100], {
    clamp: true,
  });

  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => scrollWipe.on("change", (v) => setScrollPct(v)), [scrollWipe]);

  const pct = reduceMotion ? 100 : (manual ?? scrollPct);

  if (reduceMotion) {
    return (
      <section className="bg-[#0b0907] px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1760px]">
          <p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">
            07 / Transformation
          </p>
          <h2 className="font-serif text-[clamp(3.5rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">
            One strand.
            <br />
            <i>A different presence.</i>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2">
            <figure className="relative aspect-[4/5] overflow-hidden bg-[#1a120d]">
              {pair ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={pair.before.src}
                  alt={pair.before.alt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <BeforePlaceholder />
              )}
              <figcaption className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[.45em] text-white/70">
                Before
              </figcaption>
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden bg-[#1a120d]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={after.src} alt={after.alt} className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[.45em] text-white/70">
                After
              </figcaption>
            </figure>
          </div>

          {isPlaceholder ? <PlaceholderNote className="mt-8" /> : null}
          {pair?.note ? (
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">{pair.note}</p>
          ) : null}

          <Link
            href="/shop"
            className="mt-10 inline-flex items-center bg-[#c8a45d] px-6 py-5 text-[9px] font-semibold uppercase tracking-[.32em] text-[#0b0907] transition hover:bg-[#f5f0e8]"
          >
            Shop the look
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={track}
      className="relative bg-[#0b0907]"
      /* Two and a bit viewports of scroll against one viewport of pinned
         frame: enough travel that the wipe feels deliberate rather than
         snapping past in a flick, without the long dead hold that 300vh
         left at the end. */
      style={{ height: "240vh" }}
      aria-label="Client transformation"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="relative h-full w-full">
          {/* The finished work sits underneath, complete. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={after.src}
            alt={after.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/*
            The starting point is laid over it and clipped away from the left
            as the wipe advances. Clipping the top layer rather than growing
            the bottom one keeps both frames pinned to the same pixels, so
            nothing slides against anything else.
          */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
            aria-hidden="true"
          >
            {pair ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={pair.before.src} alt="" className="h-full w-full object-cover" />
            ) : (
              <BeforePlaceholder />
            )}
          </div>

          {/* The seam. */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-px"
            style={{
              left: `${pct}%`,
              backgroundColor: GOLD,
              boxShadow: `0 0 24px ${GOLD}99`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/50" />

          <div className="absolute inset-0 flex flex-col justify-between px-5 py-10 md:px-10 md:py-16">
            <div className="flex items-start justify-between gap-6">
              <p className="text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">
                07 / Transformation
              </p>
              <p className="text-[8px] uppercase tracking-[.45em] text-white/45">
                {pct < 50 ? "Before" : "After"}
              </p>
            </div>

            <div className="mx-auto w-full max-w-[1760px]">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(3.2rem,7vw,8rem)] leading-[.74] tracking-[-.06em] text-white"
              >
                One strand.
                <br />
                <i>A different presence.</i>
              </motion.h2>

              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Link
                  href="/shop"
                  className="w-fit bg-[#c8a45d] px-6 py-5 text-[9px] font-semibold uppercase tracking-[.32em] text-[#0b0907] transition hover:bg-[#f5f0e8]"
                >
                  Shop the look
                </Link>

                {/*
                  The real control. A scroll-linked wipe is unusable from a
                  keyboard, so the same value is exposed as a slider rather
                  than leaving the section as decoration for anyone not using
                  a mouse wheel.
                */}
                <div className="flex items-center gap-4">
                  <label
                    htmlFor={sliderId}
                    className="text-[8px] uppercase tracking-[.35em] text-white/50"
                  >
                    Reveal
                  </label>
                  <input
                    id={sliderId}
                    type="range"
                    min={0}
                    max={100}
                    value={Math.round(pct)}
                    onChange={(e) => setManual(Number(e.target.value))}
                    aria-label="Reveal the finished result"
                    className="h-1 w-40 cursor-pointer appearance-none rounded-full bg-white/25"
                    style={{ accentColor: GOLD }}
                  />
                </div>
              </div>

              {isPlaceholder ? <PlaceholderNote className="mt-8 max-w-lg" /> : null}
              {pair?.note ? (
                <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">{pair.note}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderNote({ className = "" }: { className?: string }) {
  return (
    <p
      className={`border-l-2 bg-black/45 px-5 py-4 text-xs leading-6 text-white/65 backdrop-blur-sm ${className}`}
      style={{ borderColor: `${GOLD}b3` }}
    >
      <span className="text-[8px] uppercase tracking-[.35em]" style={{ color: GOLD }}>
        Placeholder
      </span>
      <br />
      The finished frame is a real ByChiStrands install. The starting frame is
      held until we have client before-photographs we have permission to
      publish.
    </p>
  );
}

/**
 * Deliberately reads as a held space, not a photograph. Anyone glancing at
 * the section should be able to tell at once that this half is not a client.
 */
function BeforePlaceholder() {
  return (
    <div className="relative h-full w-full bg-[#0b0907] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_11px)]">
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <p className="text-center text-[8px] uppercase leading-[2.4] tracking-[.45em] text-white/40">
          Before
          <br />
          client photography
          <br />
          pending
        </p>
      </div>
    </div>
  );
}
