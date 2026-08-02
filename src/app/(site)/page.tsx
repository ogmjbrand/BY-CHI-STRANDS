import { FlagshipHeader } from "@/components/flagship/FlagshipHeader";
import { FlagshipHero } from "@/components/flagship/FlagshipHero";
import { AssuranceStrip } from "@/components/flagship/AssuranceStrip";
import { BrandStoryEditorial } from "@/components/flagship/BrandStoryEditorial";
import { CollectionsEditorial } from "@/components/flagship/CollectionsEditorial";
import { CraftsmanshipFilm } from "@/components/flagship/CraftsmanshipFilm";
import { LuxuryServicesEditorial } from "@/components/flagship/LuxuryServicesEditorial";
import { TransformationMosaic } from "@/components/flagship/TransformationMosaic";
import { CinematicScene } from "@/components/flagship/CinematicScene";
import { OurPromise } from "@/components/flagship/OurPromise";
import { AcademyCinematic } from "@/components/flagship/AcademyCinematic";
import { JournalEditorial } from "@/components/flagship/JournalEditorial";
import { FlagshipFooter } from "@/components/flagship/FlagshipFooter";
import { LuxuryExperienceSection } from "@/components/flagship/LuxuryExperienceSection";
import { LuxuryManifestoSection } from "@/components/flagship/LuxuryManifestoSection";
import { HouseMethodSection } from "@/components/flagship/HouseMethodSection";
import { TextureMarquee } from "@/components/stitch/TextureMarquee";
import { StatsBand } from "@/components/stitch/StatsBand";
import { ClientTestimonialsCarousel } from "@/components/stitch/ClientTestimonialsCarousel";
import { ClientConciergeSection } from "@/components/flagship/ClientConciergeSection";
import { HairOriginsSection } from "@/components/flagship/HairOriginsSection";
import { HomeFaqSection } from "@/components/flagship/HomeFaqSection";
import { FounderSection } from "@/components/flagship/FounderSection";

/**
 * ByChi Strands flagship homepage — built from scratch as a single
 * responsive component tree, not a restyled Stitch export. No mobile/desktop
 * duplication, no boxed ecommerce trust-bars or pricing cards: every section
 * is bespoke editorial composition (cinematic hero, asymmetric brand story,
 * alternating collection panels, a craftsmanship film strip, a numbered
 * services list, an immersive testimonial mosaic) built on real catalogue,
 * service, journal and testimonial data throughout.
 */
export default function HomePage() {
  return (
    /*
     * theme-noir flips every surface/on-surface/outline token to the noir &
     * gold palette in one place (see globals.css). Without it the homepage
     * fell back to the light Editorial Couture cream, which left the majority
     * of the page white — the opposite of the house's dark-luxury register.
     */
    <div className="theme-noir bg-surface text-on-surface">
      <FlagshipHeader />
      <FlagshipHero />
      <TextureMarquee />
      {/* Answers the practical questions before the storytelling starts. */}
      <AssuranceStrip />
      <BrandStoryEditorial />
      <StatsBand />
      <LuxuryManifestoSection />
      <HairOriginsSection />
      <CraftsmanshipFilm />
      <HouseMethodSection />
      <CinematicScene />
      <CollectionsEditorial />
      <LuxuryExperienceSection />
      <LuxuryServicesEditorial />
      <TransformationMosaic />
      <FounderSection />
      <OurPromise />

      <section className="overflow-hidden bg-surface-container-low px-6 py-32 text-center md:px-16 md:py-48">
        <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary">In Their Words</p>
        <h2 className="mb-16 font-display-lg text-4xl leading-[1.05] tracking-[-0.02em] md:mb-24 md:text-6xl">
          Echoes of elegance.
        </h2>
        <ClientTestimonialsCarousel />
      </section>

      <HomeFaqSection />
      <ClientConciergeSection />
      <AcademyCinematic />
      <JournalEditorial />
      <FlagshipFooter />
    </div>
  );
}
