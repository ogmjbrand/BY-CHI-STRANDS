import Link from "next/link";
import { HomeHeader } from "@/components/stitch/HomeHeader";
import { HomeHero } from "@/components/stitch/HomeHero";
import { TrustBar } from "@/components/stitch/TrustBar";
import { HomeBestSellers } from "@/components/stitch/HomeBestSellers";
import { HomeCollections } from "@/components/stitch/HomeCollections";
import { HomeLifestyle } from "@/components/stitch/HomeLifestyle";
import { StatsBand } from "@/components/stitch/StatsBand";
import { HomeServices } from "@/components/stitch/HomeServices";
import { ClientTestimonialsCarousel } from "@/components/stitch/ClientTestimonialsCarousel";
import { site } from "@/lib/site";

/**
 * BY CHI STRANDS — homepage, rebuilt to match the "Aura of Silk" reference
 * design (static hero, trust bar, best sellers, featured collections,
 * lifestyle/stats, services grid, testimonial) rather than the video-hero
 * "editorial flagship" layout that preceded it. Every claim, price and photo
 * below is drawn from the live catalogue/site data — nothing here is
 * invented marketing copy.
 */
export default function HomePage() {
  return (
    <div className="bg-background text-on-surface font-body-md">
      <HomeHeader />
      <main>
        <HomeHero />
        <TrustBar />
        <HomeBestSellers />
        <HomeCollections />
        <HomeLifestyle />
        <StatsBand />
        <HomeServices />

        <section className="bg-on-surface py-section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto text-center">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary-container mb-4 block">
              In Their Words
            </span>
            <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-surface tracking-[-0.01em] mb-14">
              Echoes of Elegance
            </h2>
            <ClientTestimonialsCarousel />
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="flex flex-col gap-6">
            <span className="font-display-md text-headline-lg text-on-surface tracking-[0.06em]">
              BY CHI STRANDS
            </span>
            <p className="font-body-md text-body-sm text-on-surface-variant max-w-xs">
              {site.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-label-caps text-primary-container tracking-[0.15em] uppercase">
              Discover
            </h5>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/shop">Shop All</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/collections">Collections</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/services">Services</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/academy">Academy</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-label-caps text-primary-container tracking-[0.15em] uppercase">
              Company
            </h5>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/about">About Our Sourcing</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/journal">Journal</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/contact">Contact Us</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors" href="/faqs">FAQs</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-label-caps text-primary-container tracking-[0.15em] uppercase">
              Social
            </h5>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-sm text-[12px] text-on-surface-variant">
            © 2026 ByChi Strands. Timeless Vietnamese Artistry.
          </p>
          <div className="flex gap-6">
            <Link className="font-body-sm text-[12px] text-on-surface-variant hover:text-on-surface transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="font-body-sm text-[12px] text-on-surface-variant hover:text-on-surface transition-colors" href="/terms">Terms of Service</Link>
            <Link className="font-body-sm text-[12px] text-on-surface-variant hover:text-on-surface transition-colors" href="/shipping">Shipping & Returns</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
