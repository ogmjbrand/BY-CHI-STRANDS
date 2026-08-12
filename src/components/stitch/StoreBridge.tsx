"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "./CartDrawer";

/**
 * Progressive enhancement over the generated screen markup.
 *
 * The Stitch pages are reproduced verbatim, so their bag icons, counters and
 * heart buttons are static. Rather than hand-editing 27 generated pages —
 * which would be lost on the next regeneration — this attaches the behaviour
 * the screens' own inline scripts described, matching elements by the markers
 * the design already uses.
 */
export function StoreBridge() {
  const { cartCount, wishlist, toggleWishlist, hydrated } = useStore();
  const { openCart } = useCartUi();
  const pathname = usePathname();

  /* ── bag icons open the drawer, and carry a live count ─────────── */
  useEffect(() => {
    if (!hydrated) return;

    /*
     * This used to find bag icons by reading their text: every icon was a
     * Material Symbols ligature whose textContent was literally
     * "shopping_bag", so a glyph scan was the only handle available. The icons
     * are lucide SVGs now and carry no text at all, so each one marks itself
     * with data-bag-trigger and the scan is gone.
     */
    const icons = Array.from(
      document.querySelectorAll<HTMLElement>("[data-bag-trigger]")
    );

    for (const icon of icons) {
      // the clickable ancestor the design already provides, or the icon itself
      const trigger =
        (icon.closest("button,a") as HTMLElement | null) ?? icon;

      // Bind once, but repaint the badge on every count change — an early
      // `continue` here would leave the counter frozen at its first value.
      //
      // This listener is intentionally never torn down on re-runs: this
      // effect re-fires on every cartCount change (that's how the badge
      // stays live), and a cleanup here would remove the listener each time
      // while `cartBound` blocks it from ever being rebound — leaving the
      // icon permanently unclickable after the first cart change. The
      // element (and its listener) disappear together naturally if the page
      // navigates away.
      if (trigger.dataset.cartBound !== "1") {
        trigger.dataset.cartBound = "1";
        trigger.addEventListener("click", (e) => {
          e.preventDefault();
          openCart();
        });
        trigger.style.cursor = "pointer";
      }

      // Reuse the badge some screens ship; otherwise mint one in the same style.
      const host = trigger as HTMLElement;
      if (getComputedStyle(host).position === "static") {
        host.style.position = "relative";
      }
      let badge = host.querySelector<HTMLElement>("[data-cart-badge]");
      if (!badge) {
        const existing = Array.from(host.querySelectorAll<HTMLElement>("span")).find(
          (s) => s !== icon && /^\d+$/.test(s.textContent?.trim() ?? "")
        );
        badge = existing ?? document.createElement("span");
        if (!existing) {
          badge.className =
            "absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center";
          host.appendChild(badge);
        }
        badge.setAttribute("data-cart-badge", "1");
      }
      badge.textContent = String(cartCount);
      badge.style.transition = "opacity .3s ease, transform .3s ease";
      badge.style.opacity = cartCount > 0 ? "1" : "0";
      badge.style.transform = cartCount > 0 ? "scale(1)" : "scale(.6)";
    }
  }, [cartCount, hydrated, openCart, pathname]);

  /* ── heart buttons toggle the wishlist, filling as the design shows ── */
  useEffect(() => {
    if (!hydrated) return;

    // Marked by the component, same as the bag above.
    const hearts = Array.from(
      document.querySelectorAll<HTMLElement>("[data-wishlist-trigger]")
    );

    const cleanups: Array<() => void> = [];

    for (const icon of hearts) {
      const trigger = (icon.closest("button,a") as HTMLElement | null) ?? icon;
      // the product this card points at, if any
      const card = trigger.closest<HTMLElement>("[data-slug]");
      const link = trigger
        .closest<HTMLElement>("article,div,li")
        ?.querySelector<HTMLAnchorElement>('a[href^="/shop/"]');
      const slug =
        card?.dataset.slug ?? link?.getAttribute("href")?.split("/shop/")[1];
      if (!slug) continue;

      const paint = () => {
        const on = wishlist.includes(slug);
        // The heart used to be a variable font glyph, filled by axis:
        // `fontVariationSettings = "'FILL' 1"`. It is an SVG path now, so the
        // fill is a paint, not a font feature.
        icon.style.fill = on ? "currentColor" : "none";
        icon.classList.toggle("text-primary", on);
      };
      paint();

      if (trigger.dataset.wishBound === "1") continue;
      trigger.dataset.wishBound = "1";

      const onClick = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(slug);
      };
      trigger.addEventListener("click", onClick);
      trigger.style.cursor = "pointer";
      cleanups.push(() => {
        trigger.removeEventListener("click", onClick);
        // Must clear the flag too. This effect re-runs on every wishlist
        // change; without the reset, the cleanup strips the listener and the
        // next run sees the flag and skips rebinding — the heart would go
        // dead the moment you used it once. Same hazard MobileMenu documents.
        delete trigger.dataset.wishBound;
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [wishlist, toggleWishlist, hydrated, pathname]);

  return null;
}
