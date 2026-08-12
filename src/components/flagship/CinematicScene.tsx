"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * The site's one pinned, choreographed moment.
 *
 * A tall track holds a sticky viewport-height stage. As the track scrolls
 * past, three things happen on the same timeline: the footage un-masks from
 * a narrow letterbox to full bleed, it settles from an over-scaled crop to
 * 1:1, and two type layers travel at different rates over it. That is the
 * scroll choreography the site was missing — sticky scene, mask reveal and
 * layered parallax resolved as a single gesture rather than another grid.
 *
 * Everything animated here is transform/clip-path/opacity, so it stays on
 * the compositor. Under prefers-reduced-motion the whole thing collapses to
 * a plain full-bleed section with the same copy — no motion, nothing lost.
 */
export function CinematicScene() {
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  /*
   * The footage is 6.7 MB and this section sits some 8,500px down the page,
   * yet an autoplaying <video> with a src starts downloading on first paint —
   * so a visitor who never scrolled this far still paid for it. The src is
   * attached only once the track is within a viewport of the fold; until
   * then the poster carries the frame, which is what it is for.
   */
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = track.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setArmed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setArmed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });

  // Mask opens from a letterbox slot to the full frame.
  const inset = useTransform(scrollYProgress, [0, 0.62], ["22% 12%", "0% 0%"]);
  const clipPath = useTransform(inset, (v) => `inset(${v} round 2px)`);
  const scale = useTransform(scrollYProgress, [0, 0.62], [1.28, 1]);

  // Type layers travel at different rates over the footage.
  const titleY = useTransform(scrollYProgress, [0, 1], ["60%", "-60%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.72, 0.9], [0, 1, 1, 0]);
  const captionY = useTransform(scrollYProgress, [0, 1], ["120%", "-40%"]);
  const captionOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.8, 0.95], [0, 1, 1, 0]);
  const veil = useTransform(scrollYProgress, [0, 0.62], [0.55, 0.3]);

  if (reduce) {
    return (
      <section className="relative min-h-[80svh] overflow-hidden bg-noir">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/posters/VID-20260727-WA0041.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Same directional scrim as the animated stage, so the copy reads
            identically whichever version a visitor gets. */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,_rgba(2,2,2,0.85)_0%,_rgba(2,2,2,0.55)_38%,_rgba(2,2,2,0.1)_70%,_rgba(2,2,2,0)_100%)]" />
        <div className="relative z-10 flex min-h-[80svh] flex-col justify-end px-6 pb-20 md:px-16">
          <SceneCopy />
        </div>
      </section>
    );
  }

  return (
    <div ref={track} className="relative h-[320svh] bg-noir">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div style={{ clipPath }} className="absolute inset-0">
          {/* Poster underneath, so the frame is never empty while the
              footage is still unarmed or buffering. */}
          <motion.div style={{ scale }} className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/posters/VID-20260727-WA0041.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          {armed ? (
            <motion.video
              style={{ scale }}
              className="absolute inset-0 h-full w-full object-cover"
              src="/products/VID-20260727-WA0041.mp4"
              poster="/media/posters/VID-20260727-WA0041.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          ) : null}
          <motion.div style={{ opacity: veil }} className="absolute inset-0 bg-noir" />
          {/*
           * The footage brightens as the mask opens, so a fixed veil alone
           * can't guarantee contrast. This directional scrim keeps the type
           * column readable whatever frame is on screen.
           */}
          <div className="absolute inset-0 bg-[linear-gradient(100deg,_rgba(2,2,2,0.85)_0%,_rgba(2,2,2,0.55)_38%,_rgba(2,2,2,0.1)_70%,_rgba(2,2,2,0)_100%)]" />
          <div className="noise-overlay absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16">
          <motion.div style={{ y: titleY, opacity: titleOpacity }}>
            <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold-light">
              The House Standard
            </p>
            <h2 className="max-w-4xl font-display-lg text-[13vw] leading-[0.94] tracking-[-0.03em] text-white md:text-[6.6vw]">
              Hair that moves
              <br />
              like it grew there.
            </h2>
          </motion.div>

          <motion.div
            style={{ y: captionY, opacity: captionOpacity }}
            className="mt-12 max-w-md"
          >
            <p className="font-body-xl text-white/75 leading-relaxed">
              Raw, single-donor, steam-set. No acid bath, no silicone, no
              blend — so the fall, the shine and the hemline stay honest wash
              after wash.
            </p>
            <Link
              href="/collections"
              className="mt-8 inline-block border-b border-gold pb-1 font-label-caps text-[11px] uppercase tracking-[0.25em] text-gold-light"
            >
              See the Collections
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SceneCopy() {
  return (
    <>
      <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.35em] text-gold-light">
        The House Standard
      </p>
      <h2 className="max-w-4xl font-display-lg text-display-lg leading-[0.94] tracking-[-0.03em] text-white">
        Hair that moves like it grew there.
      </h2>
      <p className="mt-8 max-w-md font-body-xl text-white/75 leading-relaxed">
        Raw, single-donor, steam-set. No acid bath, no silicone, no blend — so
        the fall, the shine and the hemline stay honest wash after wash.
      </p>
      <Link
        href="/collections"
        className="mt-8 inline-block w-fit border-b border-gold pb-1 font-label-caps text-[11px] uppercase tracking-[0.25em] text-gold-light"
      >
        See the Collections
      </Link>
    </>
  );
}
