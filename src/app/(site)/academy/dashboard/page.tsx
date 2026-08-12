"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";
import type { Enrollment } from "@/types/enrollments";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_student_dashboard
 * "Student Dashboard | ByChi Strands Academy"
 *
 * The original screen was a fabricated "Welcome Back, Alexandra" fantasy —
 * invented progress percentages, grades, and a live session with a
 * specific fake date. There's no auth or lesson-completion tracking behind
 * this site, so none of that can be shown honestly. This is now a real
 * lookup by the email used to enroll (GET /api/academy/enrollments/lookup),
 * mirroring how /account looks up orders — showing the real enrollment
 * record (course, status, access code) rather than fabricated progress.
 */
export default function StudentDashboardPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || !email) return;
    setStatus("loading");
    try {
      const res = await fetch(`/api/academy/enrollments/lookup?email=${encodeURIComponent(email)}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setEnrollments(data.enrollments ?? []);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="scr-student-dashboard theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <SiteHeader dark />

      <main className="flex-1 max-w-2xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-padding">
        <header className="mb-12">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-4 tracking-[-0.02em]">
            Your Enrollment
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-lg">
            Enter the email you enrolled with to find your access code and course status.
          </p>
        </header>

        <form onSubmit={submit} className="flex flex-col gap-4 mb-16 sm:flex-row">
          {/* A placeholder is not a label: it disappears on focus and is not
              announced as the field's name. */}
          <label htmlFor="dashboard-email" className="sr-only">
            Email address you enrolled with
          </label>
          <input
            id="dashboard-email"
            autoComplete="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="min-w-0 flex-1 bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-3 font-body-md placeholder:text-on-surface-variant/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase disabled:opacity-60"
          >
            {status === "loading" ? "Searching…" : "Find My Course"}
          </button>
        </form>

        {status === "error" ? (
          <p className="text-error text-body-sm mb-8">
            Something went wrong. Please try again or reach us on WhatsApp.
          </p>
        ) : null}

        {status === "done" && enrollments.length === 0 ? (
          <div className="text-center py-16 border-t border-outline-variant/20">
            <p className="font-body-xl text-on-surface-variant mb-6">
              No enrollment found for that email.
            </p>
            <Link
              href="/academy/enroll"
              className="inline-block px-10 py-4 border border-primary text-primary font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
            >
              Apply to the Academy
            </Link>
          </div>
        ) : null}

        {enrollments.length > 0 ? (
          <div className="space-y-6">
            {enrollments.map((enr) => (
              <div key={enr.id} className="border border-outline-variant/20 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="font-label-caps text-[10px] text-primary mb-1 uppercase tracking-widest">
                      {enr.status}
                    </p>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      {enr.courseName}
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-outline-variant/10">
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">
                      Start Date
                    </p>
                    <p className="font-body-md">
                      {new Date(enr.startDate).toLocaleDateString("en-NG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  {enr.accessCode ? (
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">
                        Access Code
                      </p>
                      <p className="font-body-md tracking-widest">{enr.accessCode}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-24 pt-12 border-t border-outline-variant/20 text-center">
          <p className="font-body-sm text-on-surface-variant mb-4">
            Questions about your course, materials, or your next session?
          </p>
          <a
            href={whatsappLink("Hi ByChiStrands Academy — I have a question about my enrollment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-caps text-primary tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            Message us on WhatsApp
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
