import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { AnnouncementBar } from "@/components/stitch/AnnouncementBar";
import { HomeHero } from "@/components/stitch/HomeHero";
import { Newsletter } from "@/components/stitch/Newsletter";
import { TrustBar } from "@/components/stitch/TrustBar";
import { HomeBestSellers } from "@/components/stitch/HomeBestSellers";
import { HomeCollections } from "@/components/stitch/HomeCollections";
import { HomeLifestyle } from "@/components/stitch/HomeLifestyle";
import { StatsBand } from "@/components/stitch/StatsBand";
import { HomeServices } from "@/components/stitch/HomeServices";
import { ClientTestimonialsCarousel } from "@/components/stitch/ClientTestimonialsCarousel";
import { InstagramStrip } from "@/components/stitch/InstagramStrip";
import { site } from "@/lib/site";

/**
 * BY CHI STRANDS — homepage in the noir/gold register the client's own
 * reference mockups specify. Same section rhythm as before (hero, trust,
 * best sellers, collections, lifestyle/stats, services, testimonials) with
 * dark sections alternating against the existing cream ones rather than a
 * flat rebuild — every claim, price and photo is still drawn from the live
 * catalogue/site data, nothing here is invented marketing copy.
 */
export default function HomePage() {
  return (
    <div className="bg-background text-on-surface font-body-md">
      <AnnouncementBar />
      <SiteHeader dark />
      <main>
        <HomeHero />
        <TrustBar />
        <HomeBestSellers />
        <HomeCollections />
        <HomeLifestyle />
        <StatsBand />
        <HomeServices />

        <section className="bg-surface-container-low py-section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto text-center">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-gold mb-4 block">
              In Their Words
            </span>
            <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface tracking-[-0.01em] mb-14">
              Echoes of Elegance
            </h2>
            <ClientTestimonialsCarousel />
          </div>
        </section>

        <InstagramStrip />
        <Newsletter />
      </main>

      <footer className="bg-noir text-white/70 border-t border-white/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-2">
              <span className="font-display-md text-headline-lg text-white tracking-[0.06em]">ByChi</span>
              <span className="font-script text-3xl text-gold-light -mt-1">Strands</span>
            </span>
            <p className="font-body-md text-body-sm max-w-xs">{site.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-label-caps text-gold tracking-[0.15em] uppercase">
              Discover
            </h5>
            <Link className="hover:text-white transition-colors" href="/shop">Shop All</Link>
            <Link className="hover:text-white transition-colors" href="/collections">Collections</Link>
            <Link className="hover:text-white transition-colors" href="/services">Services</Link>
            <Link className="hover:text-white transition-colors" href="/academy">Academy</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-label-caps text-gold tracking-[0.15em] uppercase">
              Company
            </h5>
            <Link className="hover:text-white transition-colors" href="/about">About Our Sourcing</Link>
            <Link className="hover:text-white transition-colors" href="/journal">Journal</Link>
            <Link className="hover:text-white transition-colors" href="/contact">Contact Us</Link>
            <Link className="hover:text-white transition-colors" href="/faqs">FAQs</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-label-caps text-label-caps text-gold tracking-[0.15em] uppercase">
              Connect
            </h5>
            <a className="hover:text-white transition-colors" href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="hover:text-white transition-colors" href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a className="hover:text-white transition-colors" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-sm text-[12px]">
            © {new Date().getFullYear()} ByChi Strands. Timeless Vietnamese Artistry.
          </p>
          <div className="flex gap-6">
            <Link className="font-body-sm text-[12px] hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="font-body-sm text-[12px] hover:text-white transition-colors" href="/terms">Terms of Service</Link>
            <Link className="font-body-sm text-[12px] hover:text-white transition-colors" href="/shipping">Shipping & Returns</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
