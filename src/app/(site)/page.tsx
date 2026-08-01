import { FlagshipHeader } from "@/components/flagship/FlagshipHeader";
import { FlagshipHero } from "@/components/flagship/FlagshipHero";
import { BrandStoryEditorial } from "@/components/flagship/BrandStoryEditorial";
import { CollectionsEditorial } from "@/components/flagship/CollectionsEditorial";
import { CraftsmanshipFilm } from "@/components/flagship/CraftsmanshipFilm";
import { LuxuryServicesEditorial } from "@/components/flagship/LuxuryServicesEditorial";
import { TransformationMosaic } from "@/components/flagship/TransformationMosaic";
import { AcademyCinematic } from "@/components/flagship/AcademyCinematic";
import { JournalEditorial } from "@/components/flagship/JournalEditorial";
import { FlagshipFooter } from "@/components/flagship/FlagshipFooter";
import { LuxuryExperienceSection } from "@/components/flagship/LuxuryExperienceSection";
import { EditorialShowcase } from "@/components/flagship/EditorialShowcase";
import { LuxuryManifestoSection } from "@/components/flagship/LuxuryManifestoSection";
import { CinematicRevealSection } from "@/components/flagship/CinematicRevealSection";
import { HouseMethodSection } from "@/components/flagship/HouseMethodSection";
import { TextureMarquee } from "@/components/stitch/TextureMarquee";
import { StatsBand } from "@/components/stitch/StatsBand";
import { ClientTestimonialsCarousel } from "@/components/stitch/ClientTestimonialsCarousel";
import { ClientConciergeSection } from "@/components/flagship/ClientConciergeSection";

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
    <>
      <FlagshipHeader />
      <FlagshipHero />
      <TextureMarquee />
      <BrandStoryEditorial />
      <StatsBand />
      <CollectionsEditorial />
      <EditorialShowcase />
      <LuxuryManifestoSection />
      <CinematicRevealSection />
      <LuxuryExperienceSection />
      <HouseMethodSection />
      <CraftsmanshipFilm />
      <LuxuryServicesEditorial />
      <TransformationMosaic />

      <section className="overflow-hidden bg-surface-container-low px-6 py-32 text-center md:px-16 md:py-48">
        <p className="mb-6 font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary">In Their Words</p>
        <h2 className="mb-16 font-display-lg text-4xl leading-[1.05] tracking-[-0.02em] md:mb-24 md:text-6xl">
          Echoes of elegance.
        </h2>
        <ClientTestimonialsCarousel />
      </section>

      <ClientConciergeSection />
      <AcademyCinematic />
      <JournalEditorial />
      <FlagshipFooter />
    </>
  );
}
