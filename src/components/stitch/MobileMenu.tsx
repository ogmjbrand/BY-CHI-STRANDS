"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The screens draw a `menu` icon at small sizes but ship no drawer behind it.
 * This supplies one in the same idiom as the bag sidebar: full-height panel,
 * 700ms slide, blurred scrim, page locked behind it.
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

  /* bind every `menu` glyph the screens draw */
  useEffect(() => {
    const icons = Array.from(
      document.querySelectorAll<HTMLElement>(".material-symbols-outlined")
    ).filter((el) => el.textContent?.trim() === "menu");

    const cleanups: Array<() => void> = [];
    for (const icon of icons) {
      const trigger = (icon.closest("button,a") as HTMLElement | null) ?? icon;
      if (trigger.dataset.menuBound === "1") continue;
      trigger.dataset.menuBound = "1";
      const onClick = (e: Event) => {
        e.preventDefault();
        setOpen(true);
      };
      trigger.addEventListener("click", onClick);
      trigger.style.cursor = "pointer";
      cleanups.push(() => trigger.removeEventListener("click", onClick));
    }
    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[65] transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <nav
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed left-0 top-0 h-full w-[86%] max-w-sm bg-surface z-[66] transform transition-transform duration-700 ease-in-out border-r border-outline-variant/30 flex flex-col md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile pt-10 pb-6 border-b border-outline-variant/10">
          <span className="font-display-md text-headline-lg tracking-widest text-primary uppercase">
            Aura of Silk
          </span>
          <button
            onClick={() => setOpen(false)}
            className="group p-2 -mr-2"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-tertiary group-hover:text-primary transition-colors duration-300">
              close
            </span>
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
      </nav>
    </>
  );
}
