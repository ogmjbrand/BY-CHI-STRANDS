"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/icon";

/**
 * The screens draw a `menu` icon at small sizes but ship no drawer behind it.
 * This supplies one in the same idiom as the bag sidebar: full-height panel,
 * 700ms slide, blurred scrim, page locked behind it.
 *
 * The panel and its scrim are hidden at `xl`, not at `md`, because that is
 * the widest breakpoint any trigger survives to: SiteHeader carries eight nav
 * links and keeps its menu button until 1280. Gating the panel narrower than
 * the button that opens it is invisible in code and obvious in use — the
 * button responds, state flips, and nothing appears.
 */

const PRIMARY = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

const SECONDARY = [
  { label: "Book an Appointment", href: "/book" },
  { label: "My Account", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Aftercare", href: "/aftercare" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  // close on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /*
   * Bind anything marked `data-open-menu`. This used to also scan the DOM for
   * Material Symbols `menu` glyphs, because the screen exports drew the icon
   * as text and there was nothing else to key on. The icon set is lucide SVGs
   * now, so the glyph scan matched nothing and every marker is explicit —
   * which is the better arrangement anyway: the trigger declares itself
   * instead of being discovered by reading an element's text content.
   */
  useEffect(() => {
    const tagged = Array.from(document.querySelectorAll<HTMLElement>("[data-open-menu]"));

    const cleanups: Array<() => void> = [];
    for (const marker of tagged) {
      const trigger = (marker.closest("button,a") as HTMLElement | null) ?? marker;
      if (trigger.dataset.menuBound === "1") continue;
      trigger.dataset.menuBound = "1";
      const onClick = (e: Event) => {
        e.preventDefault();
        setOpen(true);
      };
      trigger.addEventListener("click", onClick);
      trigger.style.cursor = "pointer";
      cleanups.push(() => {
        trigger.removeEventListener("click", onClick);
        /*
         * Clearing the flag is the whole point. Without it the guard above
         * and this cleanup deadlock each other: the first run binds and sets
         * the flag, the cleanup strips the listener, and the next run sees
         * the flag and skips — leaving the button flagged as bound with
         * nothing listening. React's development double-invoke makes that
         * happen on every mount, so the menu button did nothing at all.
         * StoreBridge documents the same hazard and sidesteps it by never
         * tearing its listener down; here the flag is simply reset.
         */
        delete trigger.dataset.menuBound;
      });
    }
    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <>
      <motion.div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[65] xl:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      />

      <motion.nav
        aria-label="Menu"
        aria-hidden={!open}
        initial={false}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 330, damping: 34, mass: 0.72 }
        }
        className="theme-noir fixed left-0 top-0 h-full w-[86%] max-w-sm bg-surface z-[66] border-r border-outline-variant/30 flex flex-col xl:hidden"
      >
        <div className="flex justify-between items-center px-margin-mobile pt-10 pb-6 border-b border-outline-variant/10">
          <span className="font-display-md text-headline-lg tracking-widest text-primary uppercase">
            ByChi Strands
          </span>
          <button
            onClick={() => setOpen(false)}
            className="group p-2 -mr-2"
            aria-label="Close menu"
          >
            <Icon name="close" className="text-tertiary group-hover:text-primary transition-colors duration-300" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-margin-mobile py-10">
          <ul className="space-y-6">
            {PRIMARY.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-display-md text-headline-lg text-on-surface hover:text-primary transition-colors duration-300 block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-12 pt-10 border-t border-outline-variant/20 space-y-5">
            {SECONDARY.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-margin-mobile pb-10">
          <Link
            href="/book"
            className="block w-full text-center bg-on-surface text-surface px-8 py-4 rounded-lg font-label-caps tracking-widest hover:bg-primary transition-all duration-500 uppercase"
          >
            Book Appointment
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
