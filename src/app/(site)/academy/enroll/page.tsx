"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";
import { useToast } from "@/components/stitch/Toast";

const COURSE_ID = "vietnam-hair-importation-masterclass";
const COURSE_NAME = "Vietnam Hair Importation Masterclass";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy_enrollment
 * "Academy Enrollment | BYCHI STRANDS"
 *
 * Was a non-functional multi-step form (no submit handler at all) sitting
 * under fabricated tiered pricing ($2,450 / $8,000, backed by nothing —
 * the real enrollment record has no price field) and fabricated alumni
 * quotes attributed to invented people, including one credited to a
 * competing brand's "CEO". Rebuilt as one real form that POSTs to
 * /api/academy/enroll — the actual enrollment table — with no price shown
 * since the house doesn't take payment through this form.
 */
export default function AcademyEnrollmentPage() {
  const router = useRouter();
  const { notify } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/academy/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name,
          customerEmail: email,
          courseId: COURSE_ID,
          courseName: COURSE_NAME,
          startDate,
        }),
      });
      if (!res.ok) throw new Error();
      notify("You're enrolled", "Check your email for your access code and next steps.");
      router.push("/academy/dashboard");
    } catch {
      setStatus("error");
      notify("Something went wrong", "Please try again or reach us on WhatsApp.");
    }
  };

  return (
    <div className="scr-academy-enrollment theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <SiteHeader dark />

      <main className="flex-1 max-w-2xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <header className="text-center mb-16 space-y-4">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block">
            The Masterclass
          </span>
          <h1 className="font-display-lg text-display-md leading-tight tracking-[-0.02em]">
            {COURSE_NAME}
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Learn to bridge the gap between factory floors and luxury storefronts — sourcing,
            grading, marketing, and scaling. Apply below and our team will confirm your intake
            details by email.
          </p>
        </header>

        <form onSubmit={submit} className="space-y-10">
          <div>
            <label htmlFor="enroll-name" className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-widest">
              Full Name
            </label>
            <input
              id="enroll-name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-md focus:ring-0 focus:border-primary transition-colors"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="enroll-email" className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-widest">
              Email Address
            </label>
            <input
              id="enroll-email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-md focus:ring-0 focus:border-primary transition-colors"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="enroll-date" className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-widest">
              Preferred Start Date
            </label>
            <input
              id="enroll-date"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().slice(0, 10)}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-md focus:ring-0 focus:border-primary transition-colors"
              type="date"
            />
          </div>

          <footer className="pt-6 flex flex-col items-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-6 bg-on-surface text-surface font-label-caps text-label-caps tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-all duration-500 disabled:opacity-50"
            >
              {status === "loading" ? "Submitting…" : "Submit Application"}
            </button>
            {status === "error" ? (
              <p className="mt-4 text-[12px] text-error">Something went wrong — please try again.</p>
            ) : null}
            <p className="mt-6 font-body-sm text-on-surface-variant text-center">
              Prefer to talk first?{" "}
              <a
                href={whatsappLink("Hi ByChiStrands — I'd like to know more about the Academy masterclass.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Message us on WhatsApp
              </a>
              .
            </p>
          </footer>
        </form>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center">
          <p className="font-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {site.name} Academy. All Rights Reserved. ·{" "}
            <Link href="/terms" className="underline hover:text-primary">
              Terms
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
