"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { collections, collectionProducts } from "@/lib/collections";
import { heroFor, posterFor } from "@/lib/media";
import { DrawnStrand, StrandBadges } from "./DrawnStrand";

/**
 * The hero, as a timed card opening.
 *
 * One collection fills the frame. The others wait as cards along the bottom
 * right. On a timer the next card *opens* — it grows out of the rail and
 * becomes the frame, while the one leaving shrinks back into the rail in its
 * place. Tapping a card opens it immediately.
 *
 * The morph is a framer-motion shared-layout animation, not a crossfade: each
 * slide owns one `layoutId`, and that id is mounted either as the full-bleed
 * frame or as a rail card, never both. So when `active` changes, two elements
 * swap roles and framer interpolates position, size and corner radius between
 * them. That is what makes the card look like it opens rather than fades.
 *
 * Content is the real collection list — names, taglines and descriptions
 * straight from lib/collections, and the lead photograph or film of each
 * collection's first piece. Nothing here is written for the hero.
 *
 * The accessibility cost of anything that moves on a timer is real, so:
 *
 *   - A visible pause control, because WCAG 2.2.2 requires one for anything
 *     that auto-advances for more than five seconds.
 *   - It pauses on hover, on keyboard focus anywhere inside, and when the tab
 *     is hidden — a rail that kept cycling in a background tab would burn
 *     battery for nobody.
 *   - Under prefers-reduced-motion nothing advances on its own and nothing
 *     morphs. The first collection is shown and the rail becomes an ordinary
 *     set of buttons.
 */

/** Long enough to read the tagline before it moves. */
const DWELL_MS = 6500;

const SLIDES = collections.map((c) => {
  const lead = collectionProducts(c.slug)[0];
  return {
    slug: c.slug,
    name: c.name,
    tagline: c.tagline,
    description: c.description,
    href: `/collections/${c.slug}`,
    media: lead ? heroFor(lead.slug) : null,
    poster: lead ? posterFor(lead.slug) : null,
  };
});

const EASE = [0.22, 1, 0.36, 1] as const;

function Frame({ slide, fill }: { slide: (typeof SLIDES)[number]; fill: boolean }) {
  const m = slide.media;
  if (!m) return <div className="h-full w-full bg-[#141110]" />;

  /*
   * Film only in the full frame. A rail card is ~120px wide, where a video
   * decode buys nothing a poster frame does not already give — and four of
   * them decoding at once behind the real one is what makes this pattern
   * stutter on a phone.
   */
  if (m.type === "video" && fill) {
    return (
      <video
        className="h-full w-full object-cover object-[center_28%] md:object-center"
        src={m.src}
        poster={m.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
    );
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={m.type === "video" ? (m.poster ?? slide.poster ?? m.src) : m.src}
      alt=""
      /* Art direction, not object-fit. Desktop keeps the centred crop the
         frame was composed for; the phone biases upward so the hair and face
         sit above the copy block instead of behind it. */
      className={
        fill
          ? "h-full w-full object-cover object-[center_28%] md:object-center"
          : "h-full w-full object-cover object-[center_30%]"
      }
      loading={fill ? undefined : "lazy"}
      decoding={fill ? undefined : "async"}
    />
  );
}

export function HouseHeroCards() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  /** Set once the visitor picks a card themselves — the timer stops for good. */
  const [taken, setTaken] = useState(false);
  const region = useRef<HTMLElement>(null);

  const go = useCallback((i: number) => setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length), []);

  const running = !reduceMotion && !paused && !taken;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => go(active + 1), DWELL_MS);
    return () => clearTimeout(t);
  }, [running, active, go]);

  /* A rail cycling in a hidden tab is work nobody sees. */
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const current = SLIDES[active];
  const rail = SLIDES.map((s, i) => ({ s, i })).filter(({ i }) => i !== active);

  return (
    <section
      ref={region}
      aria-roledescription="carousel"
      aria-label="ByChi collections"
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-black md:min-h-[calc(100svh-5rem)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      {/* The open card. Same layoutId as its rail card, so it grows out of it. */}
      <motion.div
        key={current.slug}
        layoutId={reduceMotion ? undefined : `hero-${current.slug}`}
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: 0 }}
        transition={{ duration: 0.85, ease: EASE }}
      >
        <Frame slide={current} fill />
      </motion.div>

      {/* The page's actual heading: fixed, accurate, and not on a timer. */}
      <h1 className="sr-only">
        ByChi Strands — luxury raw Vietnamese hair, sourced and finished in Lagos
      </h1>

      {/* The strand, drawn on. Behind the copy, over the image — see
          DrawnStrand for why it is split in two. Phone only: adding a
          graphic to the desktop hero is a change nobody asked for. */}
      <DrawnStrand layer="behind" className="z-[1] md:hidden" delay={0.45} />

      <div aria-hidden="true" className="absolute inset-0 bg-black/30 md:bg-black/35" />
      {/*
        A deeper plinth on the phone. The copy is bottom-anchored over a
        portrait frame where the subject fills the height, so the lower third
        has to read as a deliberate darkened ground rather than type that
        happened to land on a face.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25 md:via-black/20 md:to-black/45"
      />

      <DrawnStrand layer="front" className="z-20 md:hidden" delay={0.95} />

      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-end px-6 pb-8 pt-12 md:min-h-[calc(100svh-5rem)] md:px-10 md:pb-10 md:pt-16 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1760px] gap-7 lg:grid-cols-12 lg:items-end lg:gap-10">
          {/* The copy for whichever collection is open. */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <p className="mb-4 flex items-center gap-3 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">
                  <span aria-hidden="true" className="h-px w-8 bg-[#c8a45d]" />
                  The House of ByChi · Lagos
                </p>

                {/* Editorial seals. Small against a large frame on purpose.
                    Every line is true of every piece in the catalogue —
                    raw hair, hand-tied construction, Lagos finishing — so
                    none of it is decorative copy. */}
                <StrandBadges
                  items={["Raw hair", "Hand-tied", "Finished in Lagos"]}
                  className="mb-5 md:hidden"
                  delay={1.0}
                />
                {/*
                  h2, not h1. The page's own heading must not change every
                  six seconds — a screen-reader user landing here and asking
                  for the top-level heading would get whichever collection
                  happened to be open. The stable h1 is below, visually
                  hidden; this is the one the design makes dominant.
                */}
                <h2 className="font-serif text-[clamp(3rem,11vw,7.5rem)] leading-[.85] tracking-[-.045em] text-[#f5f0e8] md:leading-[.8] md:tracking-[-.06em]">
                  {current.name}
                </h2>
                <p className="mt-5 font-serif text-[clamp(1.15rem,4.6vw,1.85rem)] italic leading-snug text-[#c8a45d] md:mt-4">
                  {current.tagline}
                </p>
                {/* Kept on the phone: the desktop composition is eyebrow / name /
                    tagline / description, and dropping a line of it on mobile
                    changes the hierarchy rather than scaling it. Three lines,
                    then the collection page carries the rest. */}
                <p className="mt-5 line-clamp-3 max-w-xl text-[13px] leading-6 text-white/65 md:mt-6 md:line-clamp-none md:text-sm md:leading-7">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/*
              One primary CTA on a phone. The concierge route stays, but as a
              quiet line rather than a second full-width button — two of those
              stacked read as a form, not a campaign.
            */}
            {/* Both actions, as on desktop, in the same order and the same
                relative weight — gold fill primary, outlined secondary. On the
                phone they share a row at half width each rather than stacking
                into two full-width slabs. */}
            <div className="mt-7 grid grid-cols-2 gap-2 md:mt-9 md:flex md:gap-3">
              <Link
                href={current.href}
                className="group flex items-center justify-between gap-3 bg-[#c8a45d] px-4 py-4 text-[8px] font-semibold uppercase tracking-[.24em] text-[#0b0907] transition hover:bg-[#f5f0e8] md:gap-6 md:px-6 md:py-5 md:text-[9px] md:tracking-[.32em]"
              >
                Shop the House
                <ArrowRight size={14} className="shrink-0 transition group-hover:translate-x-1 md:h-4 md:w-4" />
              </Link>
              <Link
                href="/book"
                className="flex items-center justify-center border border-white/25 px-4 py-4 text-center text-[8px] uppercase tracking-[.24em] text-white/70 transition hover:border-[#c8a45d] hover:text-[#c8a45d] md:px-6 md:py-5 md:text-[9px] md:tracking-[.32em]"
              >
                Private Concierge
              </Link>
            </div>
          </div>

          {/* The cards still to open. */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-[8px] uppercase tracking-[.4em] text-white/45">
                {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </p>

              {!reduceMotion ? (
                <button
                  type="button"
                  onClick={() => setTaken((t) => !t)}
                  aria-label={taken ? "Resume the collection rail" : "Pause the collection rail"}
                  className="flex items-center gap-2 text-[8px] uppercase tracking-[.35em] text-white/45 transition-colors hover:text-[#c8a45d]"
                >
                  {taken ? <Play size={11} /> : <Pause size={11} />}
                  {taken ? "Play" : "Pause"}
                </button>
              ) : null}
            </div>

            <ul className="flex list-none gap-2 md:gap-3">
              {rail.map(({ s, i }) => (
                <li key={s.slug} className="min-w-0 flex-1">
                  <motion.button
                    type="button"
                    layoutId={reduceMotion ? undefined : `hero-${s.slug}`}
                    onClick={() => {
                      setTaken(true);
                      go(i);
                    }}
                    aria-label={`Open ${s.name}`}
                    style={{ borderRadius: 10 }}
                    transition={{ duration: 0.85, ease: EASE }}
                    className="group relative block aspect-[3/4] w-full overflow-hidden border border-white/15 bg-[#141110] text-left"
                  >
                    <Frame slide={s} fill={false} />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent transition-opacity group-hover:opacity-70"
                    />
                    <span className="absolute inset-x-0 bottom-0 p-2.5 text-[8px] uppercase leading-[1.5] tracking-[.2em] text-white/85 md:p-3 md:tracking-[.28em]">
                      {s.name}
                    </span>
                  </motion.button>
                </li>
              ))}
            </ul>

            {/* How long the open card has left. Decorative — the counter above
                already says where you are. */}
            {running ? (
              <div aria-hidden="true" className="mt-3 h-px w-full bg-white/15">
                <motion.div
                  key={`${current.slug}-progress`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: DWELL_MS / 1000, ease: "linear" }}
                  className="h-full origin-left bg-[#c8a45d]"
                />
              </div>
            ) : (
              <div aria-hidden="true" className="mt-3 h-px w-full bg-white/15" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
