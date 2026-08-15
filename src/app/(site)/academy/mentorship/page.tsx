import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_book_mentorship_popup
 * "Academy Resource Library | ByChi Academy"
 *
 * Was a fabricated "Knowledge Vault": a second masterclass video that
 * doesn't exist, four downloadable PDF/XLSX/ZIP guides with invented file
 * sizes and dead download buttons, fake "1.2k views this week" stats, a
 * "500+ global stylists" community claim, and an interactive booking
 * calendar hardcoded to October 2024 that submitted nothing. The one real
 * asset — the mentorship masterclass video — is kept; booking now goes to
 * the same real WhatsApp concierge every other CTA on the site uses,
 * since there's no scheduling backend.
 */

export const metadata: Metadata = {
  title: "Mentorship",
};

export default function AcademyMentorshipPage() {
  return (
    <div className="scr-book-mentorship-popup theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="relative py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-primary mb-4 block tracking-[0.15em] uppercase">
            1-on-1 Strategy
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 tracking-[-0.02em]">
            Mentorship
          </h1>
          <p className="font-body-xl text-on-surface-variant max-w-2xl mx-auto">
            A direct session to work through sourcing, grading, or scaling your own hair
            business — whatever you&apos;re stuck on.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop pb-section-padding">
          <div className="relative aspect-video overflow-hidden mb-12 bg-surface-container">
            <video
              aria-label="ByChi Academy mentorship masterclass"
              controls
              className="w-full h-full object-cover"
              poster="/media/academy/mentorship-masterclass.jpg"
              preload="metadata"
            >
              <source src="/media/academy/mentorship-masterclass.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="text-center">
            <a
              href={whatsappLink("Hi ByChi Strands — I'd like to book a mentorship session.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 uppercase"
            >
              Book on WhatsApp
            </a>
            <p className="mt-6 font-body-sm text-on-surface-variant">
              Enrolled in the masterclass?{" "}
              <Link href="/academy/dashboard" className="text-primary underline">
                Find your enrollment
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
</div>
  );
}
