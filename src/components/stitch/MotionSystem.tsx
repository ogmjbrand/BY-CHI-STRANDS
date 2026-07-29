"use client";

import {
  animate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * A compositor-only motion layer for the generated Stitch screens. It enhances
 * the existing markup instead of rewriting it, keeping the visual design and
 * document structure stable while pages remain server-rendered.
 */
export function MotionSystem() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const heroMedia = useRef<HTMLElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    mass: 0.25,
  });

  useMotionValueEvent(progress, "change", (value) => {
    document.documentElement.style.setProperty("--motion-scroll-progress", String(value));
  });

  useMotionValueEvent(scrollY, "change", (value) => {
    if (reduceMotion || !heroMedia.current) return;
    heroMedia.current.style.translate = `0 ${Math.min(value * 0.035, 42)}px`;
  });

  useEffect(() => {
    const main = document.querySelector("main");
    const hero = main?.querySelector<HTMLElement>("section");
    heroMedia.current = hero?.querySelector<HTMLElement>("img, video, [data-motion-parallax]") ?? null;
  }, [pathname]);

  useEffect(() => {
    if (reduceMotion) return;

    const cleanups: Array<() => void> = [];
    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(
        "button:not([disabled]), a.btn-primary-interaction, a[class*='bg-on-surface']"
      )
    ).filter((node) => !/\b(?:scale|translate)-/.test(node.className));

    buttons.forEach((button) => {
      const press = () => void animate(button, { scale: 0.985 }, { duration: 0.12, ease });
      const release = () =>
        void animate(button, { scale: 1 }, { type: "spring", stiffness: 520, damping: 30, mass: 0.35 });
      button.addEventListener("pointerdown", press);
      button.addEventListener("pointerup", release);
      button.addEventListener("pointerleave", release);
      cleanups.push(() => {
        button.removeEventListener("pointerdown", press);
        button.removeEventListener("pointerup", release);
        button.removeEventListener("pointerleave", release);
      });
    });

    const fields = Array.from(document.querySelectorAll<HTMLElement>("input, textarea, select"));
    fields.forEach((field) => {
      const host = field.parentElement;
      if (!host) return;
      const focus = () => void animate(host, { y: -1 }, { type: "spring", stiffness: 400, damping: 28 });
      const blur = () => void animate(host, { y: 0 }, { duration: 0.18, ease });
      field.addEventListener("focus", focus);
      field.addEventListener("blur", blur);
      cleanups.push(() => {
        field.removeEventListener("focus", focus);
        field.removeEventListener("blur", blur);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname, reduceMotion]);

  useEffect(() => {
    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = anchor?.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", id);
    };
    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, [reduceMotion]);

  return <div aria-hidden className="motion-scroll-progress" />;
}
