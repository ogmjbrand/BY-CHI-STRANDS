import { FramedBanner } from "./FramedBanner";

/**
 * The house's "about" moment on the homepage, in the reference template's
 * framed-banner style — real client photography (the burgundy pixie unit
 * worn out to an event), not stock imagery. The banner carries the visual
 * statement; the real description of what the house actually does sits
 * underneath rather than being dropped for the sake of a punchier banner.
 */
export function HomeLifestyle() {
  return (
    <section className="bg-noir py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <FramedBanner
          media={{
            type: "image",
            src: "/products/IMG-20260726-WA0019.jpg",
            alt: "ByChiStrands client wearing the burgundy pixie curl unit at an event",
          }}
          script="More Than Hair,"
          heading="It's a Lifestyle."
          ctaLabel="Our Story"
          ctaHref="/about"
        />
        <p className="font-body-xl text-body-md md:text-body-xl text-white/70 mt-10 max-w-2xl mx-auto text-center">
          ByChiStrands imports, crafts and cares for authentic Vietnamese human
          hair — raw bundles, single-donor collections, luxury wigs, closures
          and frontals — alongside atelier services and importation
          education.
        </p>
      </div>
    </section>
  );
}
