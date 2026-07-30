"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

/**
 * Ports the IntersectionObserver every Stitch screen ships in its inline
 * <script>: elements carrying `.reveal`, `.reveal-up` or `.fade-up` gain a
 * trigger class once 10% visible, which each screen's own CSS transition
 * (stitch-screens.css / globals.css) then animates. Different screens gate
 * on different class names for the same mechanism — `.reveal`/`.reveal-up`
 * check for `.active`, `.scr-academy`'s `.fade-up` checks for `.visible` —
 * so both are added on intersect; an unused one is simply never read by
 * that screen's CSS. `.fade-in-up` is a separate, self-playing CSS
 * `animation`, not gated behind a class at all, so it's deliberately not
 * queried here. Mounted once per page from the site layout, and re-scans on
 * every route change (like Interactions/MotionSystem) since client-side
 * navigation swaps in a new page's DOM without remounting this component.
 *
 * Deliberately CSS-driven, not framer-motion's imperative `animate()`: a
 * fire-and-forget `animate()` call here isn't tied to a component's
 * lifecycle, and could be left orphaned mid-tween, freezing elements at a
 * partial opacity. A plain classList toggle can't get stuck that way.
 */
export function RevealObserver() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-up, .fade-up")
    );
    if (!nodes.length) return;

    if (reduceMotion) {
      nodes.forEach((n) => n.classList.add("active", "visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          observer.unobserve(target);
          target.classList.add("active", "visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [pathname, reduceMotion]);

  return null;
}
