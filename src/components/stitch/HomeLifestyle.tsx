import Link from "next/link";

/**
 * The house's "about" moment on the homepage — real client photography
 * (the burgundy pixie unit worn out to an event), not stock imagery.
 */
export function HomeLifestyle() {
  return (
    <section className="bg-on-surface py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary-container mb-6 block">
            About By Chi Strands
          </span>
          <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-surface tracking-[-0.01em] mb-8 leading-tight">
            More Than Hair. It&apos;s A Lifestyle.
          </h2>
          <p className="font-body-xl text-body-md md:text-body-xl text-surface-variant mb-10 max-w-lg">
            ByChiStrands imports, crafts and cares for authentic Vietnamese
            human hair — raw bundles, single-donor collections, luxury wigs,
            closures and frontals — alongside atelier services and
            importation education. From sourcing the finest Vietnamese hair
            to delivering exceptional service, we&apos;re committed to
            helping you look and feel your absolute best.
          </p>
          <Link
            href="/about"
            className="bg-primary-container text-on-primary-container px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-secondary transition-colors inline-block"
          >
            Our Story
          </Link>
        </div>

        <div className="relative aspect-4/5 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/products/IMG-20260726-WA0019.jpg"
            alt="ByChiStrands client wearing the burgundy pixie curl unit at an event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
