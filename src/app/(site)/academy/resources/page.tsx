import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy_resource_library
 * "Academy Resource Library | ByChi Academy"
 *
 * Was the same fabricated "Knowledge Vault" as /academy/mentorship —
 * invented downloadable guides, fake view counts, a fake "500+ stylists"
 * community. There's no resource-library or file-hosting backend behind
 * this site, so nothing here can honestly promise a download yet. This is
 * now an honest landing point: what enrollment actually includes, and a
 * real way to ask questions before applying.
 */

export const metadata: Metadata = {
  title: "Academy Resources",
};

export default function AcademyResourcesPage() {
  return (
    <div className="scr-academy-resource-library theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <SiteHeader dark />

      <main className="flex-1 max-w-3xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-padding">
        <header className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-primary mb-4 block tracking-[0.15em] uppercase">
            Academy Resources
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 tracking-[-0.02em]">
            What&apos;s Included
          </h1>
          <p className="font-body-xl text-on-surface-variant max-w-2xl mx-auto">
            A downloadable toolkit — vendor checklists, margin calculators, and branding
            templates — is in the works. For now, here&apos;s what every masterclass enrollment
            includes.
          </p>
        </header>

        {/* The three cards are h3; without this the outline jumps from the
            page h1 straight to h3 and the group has no announced name. */}
        <h2 className="sr-only">What the Academy gives you</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-padding">
          <div className="border border-outline-variant/20 p-8 text-center">
            <Icon name="school" className="text-primary text-4xl mb-6 block" />
            <h3 className="font-headline-lg text-headline-lg mb-2">The Masterclass</h3>
            <p className="font-body-sm text-on-surface-variant">
              Sourcing, grading, marketing, and scaling — the full curriculum.
            </p>
          </div>
          <div className="border border-outline-variant/20 p-8 text-center">
            <Icon name="diversity_1" className="text-primary text-4xl mb-6 block" />
            <h3 className="font-headline-lg text-headline-lg mb-2">Mentorship</h3>
            <p className="font-body-sm text-on-surface-variant">
              A direct session to work through your own sourcing or scaling questions.
            </p>
          </div>
          <div className="border border-outline-variant/20 p-8 text-center">
            <Icon name="support_agent" className="text-primary text-4xl mb-6 block" />
            <h3 className="font-headline-lg text-headline-lg mb-2">Direct Access</h3>
            <p className="font-body-sm text-on-surface-variant">
              Reach the team on WhatsApp with questions as you build.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/academy/enroll"
            className="inline-block px-12 py-5 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 uppercase mr-4"
          >
            Apply to the Academy
          </Link>
          <a
            href={whatsappLink("Hi ByChiStrands — I have a question about the Academy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border border-primary text-primary font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 uppercase mt-4 md:mt-0"
          >
            Ask a Question
          </a>
        </div>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center">
          <p className="font-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {site.name} Academy. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
