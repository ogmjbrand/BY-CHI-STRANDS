import { FlagshipHeader } from "@/components/flagship/FlagshipHeader";
import { FlagshipHero } from "@/components/flagship/FlagshipHero";
import { BrandStoryEditorial } from "@/components/flagship/BrandStoryEditorial";
import { CollectionsEditorial } from "@/components/flagship/CollectionsEditorial";
import { CraftsmanshipFilm } from "@/components/flagship/CraftsmanshipFilm";
import { TransformationMosaic } from "@/components/flagship/TransformationMosaic";
import { FounderSection } from "@/components/flagship/FounderSection";
import { OurPromise } from "@/components/flagship/OurPromise";
import { ClientTestimonialsCarousel } from "@/components/stitch/ClientTestimonialsCarousel";
import { JournalEditorial } from "@/components/flagship/JournalEditorial";
import { FlagshipFooter } from "@/components/flagship/FlagshipFooter";
import { TextureMarquee } from "@/components/stitch/TextureMarquee";
import { BrandSeal } from "@/components/flagship/BrandSeal";

/**
 * ByChi Strands — immersive flagship homepage.
 *
 * The homepage is intentionally paced like a luxury campaign rather than a
 * conventional ecommerce template: hero -> statement -> texture -> story ->
 * craft -> collections -> transformation -> founder -> social proof -> journal.
 * Existing commerce, account and checkout routes remain untouched.
 */
export default function HomePage() {
  return (
    <div className="theme-noir bg-surface text-on-surface">
      <FlagshipHeader />

      <main>
        <FlagshipHero />

        {/* Quiet editorial pause after the hero: texture becomes the bridge. */}
        <TextureMarquee />

        <BrandStoryEditorial />

        <section className="overflow-hidden bg-surface px-6 py-28 md:px-16 md:py-44">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-7 font-label-caps text-[10px] uppercase tracking-[0.34em] text-primary">
              The ByChi standard
            </p>
            <h2 className="max-w-6xl font-display-lg text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.035em]">
              Hair should move like it belongs to you.
            </h2>
          </div>
        </section>

        <CraftsmanshipFilm />

        <BrandSeal label="The Collections" />
        <CollectionsEditorial />

        <TransformationMosaic />

        <FounderSection />
        <OurPromise />

        <section className="overflow-hidden bg-surface-container-low px-6 py-28 text-center md:px-16 md:py-40">
          <p className="mb-6 font-label-caps text-[10px] uppercase tracking-[0.34em] text-primary">
            In their words
          </p>
          <h2 className="mx-auto mb-16 max-w-4xl font-display-lg text-[clamp(2.6rem,6vw,6rem)] leading-[0.92] tracking-[-0.03em] md:mb-24">
            Confidence leaves an impression.
          </h2>
          <ClientTestimonialsCarousel />
        </section>

        <BrandSeal label="The Journal" />
        <JournalEditorial />
      </main>

      <FlagshipFooter />
    </div>
  );
}
