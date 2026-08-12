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
 */
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
    The wipe runs across most of the pin, with a short hold at each end so the
    frame reads as composed before and after rather than moving the instant it
    sticks. Measured: a narrower range finished the reveal in the first third
    of the track and left roughly 1100px of scrolling where nothing changed.
  */
  const scrollWipe = useTransform(scrollYProgress, [0.08, 0.88], [0, 100], {
    clamp: true,
  });

  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => scrollWipe.on("change", (v) => setScrollPct(v)), [scrollWipe]);

  const pct = reduceMotion ? 100 : (manual ?? scrollPct);

  if (reduceMotion) {
    return (
      <section className="bg-surface-container-lowest px-6 py-32 md:px-16 md:py-48">
        <Header isPlaceholder={isPlaceholder} service={pair?.service} />
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <figure className="relative aspect-[4/5] overflow-hidden bg-surface-container">
            {pair ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={pair.before.src} alt={pair.before.alt} className="h-full w-full object-cover" />
            ) : (
              <BeforePlaceholder />
            )}
            <figcaption className="absolute bottom-4 left-4 font-label-caps text-[10px] uppercase tracking-[0.25em] text-white/90">
              Before
            </figcaption>
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden bg-surface-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={after.src} alt={after.alt} className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 font-label-caps text-[10px] uppercase tracking-[0.25em] text-white/90">
              After
            </figcaption>
          </figure>
        </div>
        <Closing note={pair?.note} isPlaceholder={isPlaceholder} />
      </section>
    );
  }

  return (
    <section
      ref={track}
      className="relative bg-surface-container-lowest"
      /* Two and a bit viewports of scroll against one viewport of pinned
         frame: enough travel that the wipe feels deliberate rather than
         snapping past in a flick, without the long dead hold that 300vh
         left at the end. */
      style={{ height: "240vh" }}
      aria-label="Client transformation"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
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
              <img
                src={pair.before.src}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <BeforePlaceholder />
            )}
          </div>

          {/* The seam. */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-px bg-primary/80 shadow-[0_0_24px_rgba(201,162,39,0.55)]"
            style={{ left: `${pct}%` }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/45" />

          <div className="absolute inset-0 flex flex-col justify-between px-6 py-12 md:px-16 md:py-20">
            <div className="flex items-start justify-between gap-6">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.3em] text-white/70">
                {pct < 50 ? "Before" : "After"}
              </p>
              {isPlaceholder ? <PlaceholderTag /> : null}
            </div>

            <div className="max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display-lg text-4xl leading-[1.02] tracking-[-0.02em] text-white md:text-7xl"
              >
                One strand.
                <br />
                A completely different presence.
              </motion.h2>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <Link
                  href="/shop"
                  className="w-fit bg-primary px-10 py-4 font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-gold-light"
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
                    className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-white/60"
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
                    className="h-1 w-40 cursor-pointer appearance-none rounded-full bg-white/25 accent-[var(--color-primary)]"
                  />
                </div>
              </div>

              {pair?.note ? (
                <p className="mt-6 max-w-xl font-body-sm leading-relaxed text-white/60">
                  {pair.note}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderTag() {
  return (
    <p className="max-w-xs border-l-2 border-primary/70 bg-black/45 px-4 py-3 font-body-sm text-[12px] leading-relaxed text-white/75 backdrop-blur-sm">
      <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-primary">
        Placeholder
      </span>
      <br />
      The finished frame is real. The starting frame is held until we have
      client before-photographs we have permission to publish.
    </p>
  );
}

/**
 * Deliberately reads as a held space, not a photograph. Anyone glancing at
 * the section should be able to tell at once that this half is not a client.
 */
function BeforePlaceholder() {
  return (
    <div className="relative h-full w-full bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_11px)] bg-noir">
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <p className="text-center font-label-caps text-[10px] uppercase leading-[2] tracking-[0.28em] text-white/45">
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

function Header({
  isPlaceholder,
  service,
}: {
  isPlaceholder: boolean;
  service?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary">
        {service ?? "Transformation"}
      </p>
      <h2 className="font-display-lg text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
        One strand. A completely different presence.
      </h2>
      {isPlaceholder ? (
        <p className="mt-6 font-body-sm leading-relaxed text-on-surface-variant/80">
          The finished frame is a real ByChiStrands install. The starting frame
          is held until we have client before-photographs we have permission to
          publish.
        </p>
      ) : null}
    </div>
  );
}

function Closing({ note, isPlaceholder }: { note?: string; isPlaceholder: boolean }) {
  return (
    <div className="mt-12">
      {note ? (
        <p className="max-w-xl font-body-sm leading-relaxed text-on-surface-variant/70">{note}</p>
      ) : null}
      <Link
        href="/shop"
        className="mt-8 inline-block bg-primary px-10 py-4 font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-gold-light"
      >
        Shop the look
      </Link>
    </div>
  );
}
