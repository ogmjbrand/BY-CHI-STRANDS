"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Restores the behaviour the Stitch screens shipped in their inline <script>
 * blocks. Those scripts are stripped during conversion (they are not React),
 * so each effect here reproduces one of them against the same markup.
 */
export function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── sticky header gains a shadow once scrolled ──────────────── */
    const header = document.querySelector<HTMLElement>("header, nav");
    if (header) {
      const onScroll = () => {
        header.classList.toggle("shadow-sm", window.scrollY > 100);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    /* ── product card: title lifts 4px on hover (Shop All) ───────── */
    document.querySelectorAll<HTMLElement>(".product-card").forEach((card) => {
      const title = card.querySelector<HTMLElement>("h3");
      if (!title) return;
      title.style.transition = "transform .4s cubic-bezier(.2,.8,.2,1)";
      const enter = () => (title.style.transform = "translateY(-4px)");
      const leave = () => (title.style.transform = "translateY(0)");
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    /* ── boutique cards: CTA letter-spacing opens on hover ───────── */
    document.querySelectorAll<HTMLElement>("article").forEach((card) => {
      const btn = card.querySelector<HTMLElement>("button");
      if (!btn) return;
      btn.style.transition = "letter-spacing .4s cubic-bezier(.2,.8,.2,1)";
      const enter = () => (btn.style.letterSpacing = "0.25em");
      const leave = () => (btn.style.letterSpacing = "0.15em");
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    /* ── input focus ring (Luxury Checkout) ──────────────────────── */
    document.querySelectorAll<HTMLElement>("input, textarea").forEach((input) => {
      const parent = input.parentElement;
      if (!parent) return;
      const on = () => parent.classList.add("active");
      const off = () => parent.classList.remove("active");
      input.addEventListener("focus", on);
      input.addEventListener("blur", off);
      cleanups.push(() => {
        input.removeEventListener("focus", on);
        input.removeEventListener("blur", off);
      });
    });

    /* ── tab rows (Resource Library) ─────────────────────────────── */
    document
      .querySelectorAll<HTMLElement>("[data-tabs], .tab-row")
      .forEach((row) => {
        const tabs = Array.from(row.querySelectorAll<HTMLElement>("button, a"));
        tabs.forEach((tab) => {
          const onClick = (e: Event) => {
            e.preventDefault();
            tabs.forEach((t) => {
              t.classList.remove("text-primary", "font-semibold", "border-b-2", "border-primary");
              t.classList.add("text-on-surface-variant");
            });
            tab.classList.add("text-primary", "font-semibold", "border-b-2", "border-primary");
            tab.classList.remove("text-on-surface-variant");
          };
          tab.addEventListener("click", onClick);
          cleanups.push(() => tab.removeEventListener("click", onClick));
        });
      });

    /* ── the gold trailing cursor on the product pages ───────────── */
    const cursorHost = document.querySelector<HTMLElement>(".custom-cursor");
    if (cursorHost && !reduced && window.matchMedia("(pointer: fine)").matches) {
      let raf = 0;
      let x = 0;
      let y = 0;
      const move = (e: MouseEvent) => {
        x = e.clientX;
        y = e.clientY;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          cursorHost.style.left = `${x}px`;
          cursorHost.style.top = `${y}px`;
          raf = 0;
        });
      };
      document.addEventListener("mousemove", move, { passive: true });
      cleanups.push(() => {
        document.removeEventListener("mousemove", move);
        if (raf) cancelAnimationFrame(raf);
      });

      document.querySelectorAll("a, button, img").forEach((el) => {
        const enter = () => {
          cursorHost.style.transform = "translate(-50%, -50%) scale(2)";
          cursorHost.style.backgroundColor = "rgba(200, 167, 91, 0.1)";
        };
        const leave = () => {
          cursorHost.style.transform = "translate(-50%, -50%) scale(1)";
          cursorHost.style.backgroundColor = "transparent";
        };
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
