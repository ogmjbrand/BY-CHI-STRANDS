"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/**
 * Split hero: copy and CTAs on a plain surface at left, real studio footage
 * at right. "Play Intro" un-mutes and replays the same clip rather than
 * pointing at a separate intro film that does not exist.
 */
export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playingIntro, setPlayingIntro] = useState(false);

  const playIntro = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.currentTime = 0;
    el.play().then(() => setPlayingIntro(true)).catch(() => {});
    const onEnd = () => {
      el.muted = true;
      setPlayingIntro(false);
      el.removeEventListener("ended", onEnd);
    };
    el.addEventListener("ended", onEnd);
  };

  const scrollToNext = () => {
    const hero = document.getElementById("home-hero");
    const next = hero?.nextElementSibling;
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home-hero" className="relative grid grid-cols-1 lg:grid-cols-12 bg-background">
      <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-16 lg:py-0 min-h-[50vh] lg:min-h-[92vh]">
        <motion.span
          {...fadeUp(0)}
          className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-primary-container mb-6 block"
        >
          Luxury Vietnamese Hair
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display-lg text-headline-lg-mobile md:text-display-lg leading-[1.05] tracking-[-0.02em] text-on-surface mb-6"
        >
          Crafted for
          <br />
          <span className="text-primary-container">Confidence.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="font-body-xl text-body-md md:text-body-xl text-on-surface-variant max-w-md mb-10"
        >
          Premium Vietnamese human hair, ethically sourced and meticulously
          crafted to elevate your beauty.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-4 mb-10">
          <Link
            href="/collections"
            className="bg-primary-container text-on-primary-container px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-secondary transition-colors"
          >
            Shop Collections
          </Link>
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 border border-on-surface text-on-surface px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-on-surface hover:text-surface transition-colors"
          >
            Book Appointment
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </motion.div>

        <motion.button
          {...fadeUp(0.4)}
          onClick={playIntro}
          className="group flex items-center gap-3 self-start"
          aria-label="Play the studio intro with sound"
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full overflow-hidden ring-1 ring-outline-variant/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/posters/VID-20260727-WA0027.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-on-surface/30">
              <span className="material-symbols-outlined text-white text-[18px]">
                {playingIntro ? "pause" : "play_arrow"}
              </span>
            </span>
          </span>
          <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface group-hover:text-primary-container transition-colors">
            {playingIntro ? "Playing Intro" : "Play Intro"}
          </span>
        </motion.button>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-7 relative min-h-[50vh] lg:min-h-[92vh] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/media/posters/VID-20260727-WA0027.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          src="/products/VID-20260727-WA0027.mp4"
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 right-8 flex items-center gap-3 text-white/90 hover:text-white transition-colors"
          aria-label="Scroll to discover more"
        >
          <span className="font-label-caps text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
            Scroll to Discover
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50">
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </span>
        </button>
      </div>
    </section>
  );
}
