import Link from "next/link";
import {
  IconGlobeRoute,
  IconShipInsured,
  IconExchange,
  IconAuthTag,
} from "@/components/stitch/BrandIcons";

/**
 * The four assurances, close to the top of the page where they answer the
 * questions a first-time visitor actually has: will it reach me, is it
 * covered, what if it's wrong, and what turns up in the box.
 *
 * Every pillar is a commitment the house already publishes, and every one
 * links to the page that substantiates it — so this is a signpost, not a row
 * of decorative badges. Nothing here asserts a guarantee that isn't written
 * out in full somewhere else on the site.
 */
const PILLARS = [
  {
    Icon: IconGlobeRoute,
    label: "Ships Worldwide",
    detail: "Lagos same-week, Nigeria in 2–4 days, DHL Express in 3–7.",
    href: "/shipping",
  },
  {
    Icon: IconShipInsured,
    label: "Tracked & Insured",
    detail: "Every order covered door to door, wherever it travels.",
    href: "/track",
  },
  {
    Icon: IconExchange,
    label: "Seven-Day Exchange",
    detail: "Unworn hair with wefts intact, exchanged within seven days.",
    href: "/returns",
  },
  {
    Icon: IconAuthTag,
    label: "Silk-Wrapped",
    detail: "A rigid gift box, a care card and an authentication tag.",
    href: "/faqs",
  },
];

export function AssuranceStrip() {
  return (
    <section
      aria-label="What every order includes"
      className="border-y border-white/10 bg-noir px-6 py-14 md:px-16 md:py-20"
    >
      {/* Two up on a phone: stacked, the four pillars ran to most of a
          viewport before the storytelling had started. */}
      <ul className="mx-auto grid max-w-[1800px] grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <li key={p.label}>
            <Link href={p.href} className="group block">
              <p.Icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:-translate-y-0.5" />
              <h3 className="mt-4 font-label-caps text-[10px] uppercase tracking-[0.16em] text-white transition-colors group-hover:text-gold-light md:mt-5 md:text-[11px] md:tracking-[0.2em]">
                {p.label}
              </h3>
              <p className="mt-2.5 max-w-xs font-body-sm text-[12px] leading-relaxed text-white/55 md:mt-3 md:text-[13px]">
                {p.detail}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
