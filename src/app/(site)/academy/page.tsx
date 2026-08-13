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
      <main>
        <AcademyHouse />

        {/* 05 — the application. */}
        <section
          id="enroll"
          className="relative overflow-x-clip bg-[#0b0907] px-5 py-16 md:px-10 md:py-36"
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
</div>
  );
}
