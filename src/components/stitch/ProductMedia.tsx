"use client";

import { useEffect, useRef, useState } from "react";
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

  // React's `muted` JSX prop doesn't always land as the DOM attribute before
  // the browser's autoplay-permission check runs, which silently aborts the
  // video's own network request (no error, just NETWORK_NO_SOURCE) instead
  // of playing. Setting the properties directly on mount closes that race.
  useEffect(() => {
    if (!autoPlay) return;
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    const p = el.play();
    if (p) p.catch(() => {});
  }, [autoPlay]);

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
    // Autoplaying background clips (cinematic cards) should keep looping
    // regardless of cursor position — only the hover-to-play grid videos
    // pause when the mouse leaves.
    if (autoPlay) return;
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
        preload={autoPlay ? "auto" : "none"}
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
