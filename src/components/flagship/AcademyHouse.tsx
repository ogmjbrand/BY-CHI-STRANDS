"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { scene, type SceneName } from "@/lib/media";
import { SectionBackdrop } from "./SectionBackdrop";
import { SectionMark } from "./SectionMark";
import { whatsappLink } from "@/lib/site";

/**
 * The Academy, rebuilt as a chapter sequence in ByChi Strands' own language.
 *
 * What it replaced: a hero, a three-column ethos strip, and a 2×2 grid of
 * four 500px cards captioned MODULE 01–04 — the exact "collection of generic
 * cards" the brief rules out, on a page that also carried its own hand-rolled
 * navigation with a dead cart icon while every other Academy route already
 * used the real SiteHeader.
 *
 * The curriculum is now a single column of oversized numbered chapters
 * scrolling against one pinned frame that changes as you pass each one. The
 * reading order is the same; nothing is behind a hover.
 *
 * NOTHING HERE IS INVENTED. There is no cohort size, no start date, no
 * duration, no price, no graduate count, no testimonial. ByChi Strands takes no
 * payment through this page and states none. The four modules are the four
 * the masterclass already advertised; the certificate is the one in the
 * photograph; the mentorship session is the one bookable on WhatsApp today.
 *
 * Palette: the literal hex the flagship homepage uses (#0b0907 ground,
 * #c8a45d gold, #f5f0e8 cream), not the theme tokens, so the chapter numbers
 * and type scale read continuously with the rest of the site.
 */

const GOLD = "#c8a45d";

interface Module {
  n: string;
  title: string;
  copy: string;
  frame: SceneName;
}

/** The four modules the masterclass has always listed. */
const MODULES: Module[] = [
  {
    n: "01",
    title: "Sourcing",
    copy: "How ByChi Strands sources raw hair — finding and vetting a supplier, what to ask before you pay anyone, and planning a first order you can afford to be wrong about.",
    frame: "academy-sourcing",
  },
  {
    n: "02",
    title: "Grading",
    copy: "Developing the hands-on eye that tells raw hair from blended, processed imitation. What single-donor hair feels like wet, how a cuticle should run, and the tests you can do in a market stall.",
    frame: "academy-grading",
  },
  {
    n: "03",
    title: "Scaling",
    copy: "Landed cost, inventory and the logistics decisions that quietly decide your margin — which lengths to hold, what a shipment really costs by the time it reaches you, and when to reorder.",
    frame: "academy-scaling",
  },
  {
    n: "04",
    title: "Marketing",
    copy: "Positioning, photography and content that make a new hair brand read as premium from its first post — and the difference between selling a bundle and building a house.",
    frame: "academy-marketing",
  },
];

export function AcademyHouse() {
  return (
    /*
     * overflow-x-clip, never overflow-x-hidden: `hidden` on either axis makes
     * this a scroll container, which would become the containing block for
     * the pinned frame in the curriculum chapter and stop it pinning at all.
     */
    <div className="overflow-x-clip bg-[#0b0907] text-[#f5f0e8] selection:bg-[#c8a45d] selection:text-[#0b0907]">
      <AcademyHero />
      <AcademyStatement />
      <AcademyCurriculum />
      <AcademyClassroom />
      <AcademyAudience />
    </div>
  );
}

/* ── 01 · The hero ─────────────────────────────────────────────────────── */

function AcademyHero() {
  const hero = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section ref={hero} className="relative min-h-[100svh] overflow-hidden bg-black">
      <motion.div
        style={reduceMotion ? undefined : { scale, y }}
        className="absolute inset-0"
      >
        <video
          className="h-full w-full object-cover"
          src="/media/academy/academy-hero.mp4"
          poster="/media/academy/academy-portrait.jpeg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="ByChi Strands Academy"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/40" />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { opacity }}
        className="relative z-10 flex min-h-[100svh] items-end px-5 pb-12 md:px-10 md:pb-16 lg:px-16"
      >
        <div className="grid w-full max-w-[1760px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-9">
            <p className="mb-6 text-[8px] uppercase tracking-[.6em] text-[#c8a45d]">
              ByChi Strands Academy · Lagos
            </p>
            <h1 className="font-serif text-[clamp(3.6rem,10vw,12rem)] leading-[.7] tracking-[-.07em]">
              <span className="block">The art</span>
              <span className="block pl-[8vw] italic text-[#c8a45d]">of the</span>
              <span className="block">source.</span>
            </h1>
            <p className="mt-9 max-w-xl text-sm leading-7 text-white/65 md:text-base">
              The Hair Importation Masterclass — sourcing, grading, scaling
              and marketing, taught by ByChi Strands, which imports its own hair.
            </p>
          </div>
          <div className="md:col-span-3">
            <Link
              href="/academy/enroll"
              className="group flex items-center justify-between bg-[#c8a45d] px-6 py-5 text-[9px] font-semibold uppercase tracking-[.32em] text-[#0b0907] transition hover:bg-[#f5f0e8]"
            >
              Apply for intake
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <a
              href="#curriculum"
              className="mt-3 block border border-white/25 px-6 py-5 text-center text-[9px] uppercase tracking-[.32em] text-white/70 transition hover:border-[#c8a45d] hover:text-[#c8a45d]"
            >
              The curriculum
            </a>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-5 right-6 z-10 flex items-center gap-2 text-[8px] uppercase tracking-[.35em] text-white/45 md:bottom-6 md:right-8 md:gap-3 md:tracking-[.45em]">
        Scroll <ArrowDown size={13} className="text-[#c8a45d]" />
      </div>
    </section>
  );
}

/* ── 02 · The statement ────────────────────────────────────────────────── */

function AcademyStatement() {
  return (
    <section className="relative bg-[#f5f0e8] px-6 py-24 text-[#0b0907] md:px-10 md:py-36">
      <SectionBackdrop name="backdrop-academy-premise" tone="light" />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <SectionMark label="01 / The Premise" tone="light" className="md:col-span-2" />
          <div className="md:col-span-10">
            <h2 className="font-serif text-[clamp(3.2rem,7.4vw,9rem)] leading-[.75] tracking-[-.065em]">
              We teach the trade
              <br />
              <i>we work in.</i>
            </h2>
            <p className="mt-10 max-w-2xl text-sm leading-7 text-[#0b0907]/75 md:text-base">
              ByChi Strands imports its own raw hair, builds its own units and sells
              them from its own store. The masterclass is that same route, taught by
              the people who walk it — not a syllabus assembled from someone else&apos;s
              supply chain.
            </p>
          </div>
        </div>

        {/*
          The three things the enrolment actually includes. A rule-divided
          band, not three cards: the same information, without pretending
          each line is an object you can click.
        */}
        <div className="mt-12 grid border-y border-[#0b0907]/20 md:mt-20 md:grid-cols-3">
          {[
            ["The Masterclass", "Sourcing, grading, marketing and scaling."],
            ["Mentorship", "A direct session on your own sourcing questions."],
            ["Direct access", "Reach the team on WhatsApp as you build."],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="border-b border-[#0b0907]/15 p-5 last:border-0 md:border-b-0 md:border-r md:p-9 md:last:border-r-0"
            >
              <h3 className="font-serif text-2xl md:text-3xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#0b0907]/75 md:mt-4 md:leading-7">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 03 · The curriculum ───────────────────────────────────────────────── */

function AcademyCurriculum() {
  const [active, setActive] = useState(0);
  const frames = MODULES.map((m) => scene(m.frame));

  return (
    <section id="curriculum" className="relative bg-[#0b0907] px-6 py-24 md:px-10 md:py-36">
      {/* No overflow on this section: it holds the pinned frame below, and an
          overflow container would become that frame's containing block. */}
      <SectionBackdrop name="backdrop-academy-curriculum" />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionMark label="02 / The Curriculum" className="mb-4" />
            <h2 className="font-serif text-[clamp(3.2rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">
              Four modules.
              <br />
              <i>One route to market.</i>
            </h2>
          </div>
          <Link
            href="/academy/enroll"
            className="w-fit border-b border-[#c8a45d]/60 pb-2 text-[8px] uppercase tracking-[.35em] text-[#c8a45d]"
          >
            Apply for intake
          </Link>
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/*
            One frame, pinned, changing as you pass each module — rather than
            four tiles each carrying its own picture. Hidden below lg, where
            there is no room to hold a frame beside the text; there each
            module carries its own image inline instead.
          */}
          <div className="hidden lg:col-span-6 lg:block">
            {/*
              A fixed viewport-relative height rather than an aspect ratio.
              Measured: at aspect-[4/5] the frame came out ~1060px tall
              against a ~1500px module column, so it pinned for barely 400px
              and two of the four frames never became the active one at all.
              Sized against the viewport, with the modules given a dwell
              below, there is real travel to pin through.
            */}
            <div className="sticky top-28 h-[64vh] overflow-hidden bg-[#141110]">
              {frames.map((f, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={f.src}
                  src={f.src}
                  alt={i === active ? f.alt : ""}
                  aria-hidden={i === active ? undefined : true}
                  loading={i === 0 ? undefined : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-transparent to-transparent"
              />
              <p
                aria-hidden="true"
                className="absolute bottom-6 left-7 font-serif text-[clamp(4rem,7vw,7rem)] leading-none"
                style={{ color: `${GOLD}59` }}
              >
                {MODULES[active].n}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            {MODULES.map((m, i) => (
              <ModuleBlock
                key={m.n}
                module={m}
                index={i}
                setActive={setActive}
                last={i === MODULES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleBlock({
  module: m,
  index,
  setActive,
  last,
}: {
  module: Module;
  index: number;
  /** The state setter itself, so the effect below has a stable dependency. */
  setActive: (i: number) => void;
  last: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  /*
   * A band across the middle of the viewport, so the module the reader is
   * actually looking at is the one that drives the pinned frame — rather
   * than whichever entered the viewport most recently, which on a fast
   * scroll is the one below the fold.
   */
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const frame = scene(m.frame);

  /*
   * In an effect, not inline in the render: calling the parent's setState
   * while this child renders is the "cannot update a component while
   * rendering a different component" warning, and React would drop the
   * update on the first pass anyway.
   */
  useEffect(() => {
    if (inView) setActive(index);
  }, [inView, index, setActive]);

  return (
    <article
      ref={ref}
      /* The dwell: on wide screens each module holds most of a viewport, so
         the pinned frame beside it has something to hold still for and the
         reader has one idea in front of them at a time. */
      className={`border-t border-white/12 py-9 md:py-16 lg:flex lg:min-h-[68vh] lg:flex-col lg:justify-center ${
        last ? "border-b" : ""
      }`}
    >
      <p className="font-serif text-3xl text-[#c8a45d]/75">{m.n}</p>

      {/* Below lg the pinned frame is not rendered, so the module carries
          its own. */}
      <div className="mt-5 aspect-[5/4] overflow-hidden bg-[#141110] lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frame.src}
          alt={frame.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-5 font-serif text-[clamp(2.2rem,10vw,4.2rem)] leading-[.95] tracking-[-.04em] md:mt-7">
        {m.title}
      </h3>
      <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 md:text-base">{m.copy}</p>
    </article>
  );
}

/* ── 04 · The classroom ────────────────────────────────────────────────── */

function AcademyClassroom() {
  return (
    <section className="relative bg-[#0b0907] px-6 py-24 md:px-10 md:py-36">
      <SectionBackdrop name="backdrop-academy-room" />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="mb-10 md:mb-16">
          <SectionMark label="03 / The Classroom" className="mb-4" />
          <h2 className="font-serif text-[clamp(3.2rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">
            It ends with
            <br />
            <i>a certificate.</i>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/*
            One frame, not two. The certificate photograph is the poster of
            this very clip — showing it again in a panel alongside read as a
            duplication bug rather than as two pieces of evidence.
          */}
          <figure className="lg:col-span-7">
            <p className="mb-4 text-[8px] uppercase tracking-[.45em] text-white/40">
              The mentorship masterclass, in full
            </p>
            <div className="bg-black">
              <video
                className="h-full w-full"
                src="/media/academy/mentorship-masterclass.mp4"
                poster="/media/academy/mentorship-masterclass.jpg"
                controls
                preload="none"
                playsInline
                aria-label="A ByChi Academy mentorship masterclass"
              />
            </div>
            <figcaption className="mt-4 max-w-lg text-sm leading-7 text-white/55">
              A masterclass graduate receiving her certificate of attendance,
              presented in person by the ByChi Strands team.
            </figcaption>
          </figure>

          <div className="lg:col-span-5 lg:pt-12">
            <p className="max-w-md text-sm leading-7 text-white/60 md:text-base">
              Every masterclass ends the same way: the work is checked, the questions
              are answered, and a certificate of attendance is handed over in person.
              There is no online-only tier and no automated completion.
            </p>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
              Mentorship runs separately from the masterclass — one session, your own
              sourcing questions, booked directly with the team.
            </p>

            <a
              href={whatsappLink(
                "Hi ByChi Strands — I'd like to book a mentorship session."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex max-w-md items-center justify-between border border-white/25 px-6 py-5 text-[9px] uppercase tracking-[.32em] text-white/70 transition hover:border-[#c8a45d] hover:text-[#c8a45d]"
            >
              Book a mentorship session
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 05 · Who it is for ────────────────────────────────────────────────── */

function AcademyAudience() {
  return (
    <section className="relative bg-[#f5f0e8] px-6 py-24 text-[#0b0907] md:px-10 md:py-36">
      {/* Was backdrop-voices, which the homepage also draws — the same frame
          was arriving on two pages. This one is the Academy's alone. */}
      <SectionBackdrop name="ground-academy-apply" tone="light" />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <SectionMark label="04 / The Room" tone="light" className="md:col-span-2" />
          <div className="md:col-span-10">
            <h2 className="font-serif text-[clamp(3.2rem,7.4vw,9rem)] leading-[.75] tracking-[-.065em]">
              Built for people
              <br />
              <i>who intend to sell.</i>
            </h2>
            <p className="mt-10 max-w-2xl text-sm leading-7 text-[#0b0907]/75 md:text-base">
              Stylists adding stock, salon owners tired of middlemen, and anyone
              starting a hair business who would rather buy their first shipment with
              their eyes open. Bring the questions you have been unable to get a
              straight answer to.
            </p>
            <Link
              href="/academy/enroll"
              className="mt-12 inline-flex items-center gap-4 bg-[#0b0907] px-8 py-5 text-[9px] font-semibold uppercase tracking-[.32em] text-[#f5f0e8] transition hover:bg-[#c8a45d] hover:text-[#0b0907]"
            >
              Apply for intake
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
