import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { AcademyHouse } from "@/components/flagship/AcademyHouse";
import { SectionBackdrop } from "@/components/flagship/SectionBackdrop";
import { AcademyInquiryForm } from "@/components/stitch/AcademyInquiryForm";
import { InlineNewsletterField } from "@/components/stitch/InlineNewsletterField";
import { site } from "@/lib/site";

/**
 * BY CHI STRANDS — the Academy.
 *
 * The chapters live in components/flagship/AcademyHouse; this file is the
 * route shell: the real SiteHeader (the page used to hand-roll its own nav,
 * with a bag icon that opened nothing), the application chapter, and the
 * footer.
 *
 * Two forms are deliberately kept, because they do different things: the
 * panel below posts an enquiry to /api/contact for anyone who wants to be
 * spoken to first, and /academy/enroll writes an actual enrollment record.
 * The copy says which is which rather than implying they are the same
 * button twice.
 */

export const metadata: Metadata = {
  title: "Academy",
};

export default function AcademyPage() {
  return (
    <div className="theme-noir bg-[#0b0907] text-[#f5f0e8]">
      <SiteHeader dark />

      <main>
        <AcademyHouse />

        {/* 05 — the application. */}
        <section
          id="enroll"
          className="relative overflow-x-clip bg-[#0b0907] px-5 py-24 md:px-10 md:py-36"
        >
          <SectionBackdrop name="academy-apply" />
          <div className="relative mx-auto max-w-[1760px]">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">
                  05 / Apply
                </p>
                <h2 className="font-serif text-[clamp(3.2rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">
                  Start the
                  <br />
                  <i>conversation.</i>
                </h2>
                <p className="mt-9 max-w-lg text-sm leading-7 text-white/55 md:text-base">
                  Tell us what you are building and our team will come back to you by
                  email with the next intake and what it covers. Nothing is charged
                  here — enrolment is confirmed with you directly.
                </p>

                <p className="mt-10 max-w-lg border-l-2 border-[#c8a45d]/70 bg-black/40 px-5 py-4 text-xs leading-6 text-white/60">
                  Ready to enrol rather than ask?{" "}
                  <Link href="/academy/enroll" className="text-[#c8a45d] underline">
                    Register your intake
                  </Link>{" "}
                  — that form records your place. This one just starts a
                  conversation.
                </p>

              </div>

              <div className="lg:col-span-6">
                <AcademyInquiryForm tone="house" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0907] px-5 py-14 text-white/55 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1760px] gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-4xl text-[#f5f0e8]">ByChi Strands</p>
            <p className="mt-5 max-w-sm text-sm leading-7">
              The House of luxury hair, and the Academy that teaches how it is
              sourced. Lagos · Nigeria.
            </p>
            <div className="mt-7 max-w-sm">
              <InlineNewsletterField />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[8px] uppercase tracking-[.3em] md:col-span-7 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/academy/enroll" className="block hover:text-[#c8a45d]">
                Enrol
              </Link>
              <Link href="/academy/mentorship" className="block hover:text-[#c8a45d]">
                Mentorship
              </Link>
              <Link href="/academy/resources" className="block hover:text-[#c8a45d]">
                Resources
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="/collections" className="block hover:text-[#c8a45d]">
                Collections
              </Link>
              <Link href="/services" className="block hover:text-[#c8a45d]">
                Services
              </Link>
              <Link href="/about" className="block hover:text-[#c8a45d]">
                The House
              </Link>
            </div>
            <div className="space-y-4">
              <a
                href={site.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#c8a45d]"
              >
                Instagram
              </a>
              <a
                href={site.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#c8a45d]"
              >
                TikTok
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#c8a45d]"
              >
                WhatsApp
              </a>
            </div>
            <div className="space-y-4">
              <Link href="/privacy" className="block hover:text-[#c8a45d]">
                Privacy
              </Link>
              <Link href="/terms" className="block hover:text-[#c8a45d]">
                Terms
              </Link>
              <Link href="/shipping" className="block hover:text-[#c8a45d]">
                Shipping
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[1760px] border-t border-white/10 pt-8 text-[8px] uppercase tracking-[.3em] text-white/35">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </div>
  );
}
