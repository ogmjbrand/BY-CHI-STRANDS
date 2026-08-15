import Link from "next/link";
import { Icon } from "@/components/ui/icon";

/**
 * Full-bleed swipe section — real client photo fills the viewport, the
 * "about" statement floats over it on a gradient instead of sitting next
 * to the photo in a boxed two-column layout.
 */
export function HomeLifestyle() {
  return (
    <section className="relative isolate min-h-[100svh] flex items-end overflow-hidden bg-noir snap-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/products/IMG-20260726-WA0019.jpg"
        alt="ByChiStrands client wearing the burgundy pixie curl unit at an event"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent" />

      <div className="relative z-10 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop pb-20 md:pb-28">
        <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-gold mb-6 block">
          About By Chi Strands
        </span>
        <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white tracking-[-0.01em] mb-8 max-w-xl leading-[1.05]">
          More Than Hair.
          <br />
          It&apos;s A Lifestyle.
        </h2>
        <p className="font-body-xl text-body-md md:text-body-xl text-white/70 mb-10 max-w-lg">
          ByChiStrands imports, crafts and cares for authentic ese
          human hair — raw bundles, single-donor collections, luxury wigs,
          closures and frontals — alongside atelier services and
          importation education.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 bg-gold text-noir px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-gold-light transition-colors"
        >
          Our Story
          <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
      </div>
    </section>
  );
}
