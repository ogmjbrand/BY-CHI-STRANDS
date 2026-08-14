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
  { label: "Your Bag", href: "/cart" },
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
        transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-0 z-[65] bg-black/70 backdrop-blur-md xl:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      />

      <motion.nav
        aria-label="Menu"
        aria-hidden={!open}
        initial={false}
        animate={{ x: open ? "0%" : "-100%" }}
        /* Slow and weighted rather than springy. A drawer that bounces reads
           as an app; this one should read as a door. */
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
        }
        className="fixed left-0 top-0 z-[66] flex h-full w-[88%] max-w-sm flex-col border-r border-white/10 bg-[#0b0907] text-[#f5f0e8] xl:hidden"
      >
        <div className="flex items-center justify-between px-6 pb-6 pt-7">
          <Link href="/" className="font-serif text-[22px] tracking-[-.045em]">
            ByChi Strands
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="-mr-2 p-2 text-white/60 transition-colors hover:text-[#c8a45d]"
            aria-label="Close menu"
          >
            <Icon name="close" className="text-[24px]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-8">
          <p className="mb-7 flex items-center gap-3 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">
            <span aria-hidden="true" className="h-px w-6 bg-[#c8a45d]" />
            The House
          </p>

          <ul className="space-y-0">
            {PRIMARY.map((l, i) => (
              <motion.li
                key={l.href}
                initial={false}
                animate={
                  reduceMotion
                    ? {}
                    : { opacity: open ? 1 : 0, y: open ? 0 : 14 }
                }
                /* Staggered behind the panel so the links arrive rather than
                   being carried in with it. */
                transition={{ duration: 0.45, delay: open ? 0.16 + i * 0.045 : 0, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-white/10"
              >
                <Link
                  href={l.href}
                  className={`block py-4 font-serif text-[1.85rem] leading-none tracking-[-.03em] transition-colors ${
                    pathname === l.href || pathname?.startsWith(`${l.href}/`)
                      ? "text-[#c8a45d]"
                      : "text-[#f5f0e8] hover:text-[#c8a45d]"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <ul className="mt-10 space-y-4">
            {SECONDARY.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-[9px] uppercase tracking-[.32em] text-white/50 transition-colors hover:text-[#c8a45d]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 px-6 py-6">
          <Link
            href="/shop"
            className="block w-full bg-[#c8a45d] py-4 text-center text-[9px] font-semibold uppercase tracking-[.32em] text-[#0b0907] transition-colors hover:bg-[#f5f0e8]"
          >
            Shop the House
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
