"use client";

import { useRef, useState } from "react";
import type { Media } from "@/lib/media";

/**
 * Renders a catalogue asset. Videos are muted, loop and play on hover (or on
 * tap on touch devices) so a grid of them stays quiet and cheap: nothing
 * downloads beyond the poster frame until the visitor shows interest.
 */
export function ProductMedia({
  media,
  className = "",
  autoPlay = false,
}: {
  media: Media;
  className?: string;
  autoPlay?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  if (media.type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={media.src} alt={media.alt} loading="lazy" className={className} />
    );
  }

  const play = () => {
    const el = ref.current;
    if (!el) return;
    el.play().then(() => setPlaying(true)).catch(() => {});
  };

  const pause = () => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    setPlaying(false);
  };

  return (
    <span className="relative block w-full h-full">
      <video
        ref={ref}
        className={className}
        poster={media.poster}
        preload="none"
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        aria-label={media.alt}
        onMouseEnter={play}
        onMouseLeave={pause}
        onClick={(e) => {
          // Touch devices get tap-to-play without following the card's link.
          if (window.matchMedia("(hover: none)").matches) {
            e.preventDefault();
            playing ? pause() : play();
          }
        }}
      >
        <source src={media.src} type="video/mp4" />
      </video>
      {!playing && !autoPlay ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 backdrop-blur"
        >
          <span className="material-symbols-outlined text-[18px] text-on-surface">
            play_arrow
          </span>
        </span>
      ) : null}
    </span>
  );
}
