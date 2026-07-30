"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide inertial smooth scroll. Mounted once; drives its own rAF loop
 * and tears down on unmount. Skipped entirely for reduced-motion visitors —
 * native scroll behaviour stays untouched for them.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
