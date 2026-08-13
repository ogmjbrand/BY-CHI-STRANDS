"use client";

import { useState } from "react";
import { useToast } from "./Toast";

/**
 * The Academy landing page's "Submit Application" quick-inquiry form —
 * posts to /api/contact (the same real Supabase + Resend endpoint the
 * contact page and newsletter form use). The full paid enrollment with
 * course selection lives at /academy/enroll; this is just lead capture,
 * so it only needs what it visibly asks for.
 */
export function AcademyInquiryForm({ tone = "theme" }: { tone?: "theme" | "house" }) {
  /*
   * `house` renders the form in the flagship palette (#0b0907 / #c8a45d /
   * #f5f0e8) that the Academy chapters use as literal hex rather than
   * through the theme tokens, so the panel belongs to the section it sits
   * in. Only colour changes — the fields, labels, autocomplete hints and
   * submit behaviour are identical in both tones.
   */
  const house = tone === "house";
  const panel = house
    ? "bg-[#100e0d] text-[#f5f0e8] border-white/15"
    : "bg-surface-container-lowest text-on-surface border-outline-variant/20";
  const labelClass = house
    ? "block text-[8px] uppercase tracking-[.35em] text-[#c8a45d] mb-3"
    : "block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest";
  const fieldClass = house
    ? "w-full bg-transparent border-0 border-b border-white/25 focus:ring-0 focus:border-[#c8a45d] py-4 text-sm transition-colors duration-300 placeholder:text-white/30"
    : "w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md";
  const submitClass = house
    ? "w-full bg-[#c8a45d] text-[#0b0907] py-6 text-[9px] font-semibold uppercase tracking-[.32em] transition hover:bg-[#f5f0e8] mt-4 disabled:opacity-60"
    : "w-full bg-on-surface text-surface py-6 text-label-caps uppercase tracking-widest btn-primary-interaction mt-4 disabled:opacity-60";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("Aspiring Entrepreneur");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const { notify } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: `Academy Enrollment Inquiry — ${businessType}`,
          message: message || "No additional goals shared.",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setName("");
      setEmail("");
      setMessage("");
      notify("Application received", "We'll follow up by email shortly.");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className={`${panel} p-8 md:p-12 border relative z-10 fade-up text-center`}>
        <p className={house ? "font-serif text-3xl mb-3" : "font-headline-lg text-xl mb-2"}>
          Application received.
        </p>
        <p className={house ? "text-sm leading-7 text-white/55" : "font-body-md text-on-surface-variant"}>
          We&apos;ll follow up by email to confirm your intake details.
        </p>
      </div>
    );
  }

  return (
    // Was bg-white on a theme-noir page — the last light panel on /academy.
    <div className={`${panel} p-8 md:p-12 border relative z-10 fade-up`}>
      <form className="space-y-8" onSubmit={submit}>
        <div>
          <label htmlFor="academy-name" className={labelClass}>Full Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Enter your name"
            id="academy-name"
            autoComplete="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="academy-email" className={labelClass}>Email Address</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder="Enter your email"
            id="academy-email"
            autoComplete="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="academy-business" className={labelClass}>Business Type</label>
          <select
            id="academy-business"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className={`${fieldClass} appearance-none`}
          >
            <option>Aspiring Entrepreneur</option>
            <option>Salon Owner</option>
            <option>Retailer / Distributor</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="academy-message" className={labelClass}>Message / Goals</label>
          <textarea
            id="academy-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={fieldClass}
            placeholder="What do you hope to achieve?"
            rows={3}
          />
        </div>
        <button
          disabled={status === "loading"}
          className={submitClass}
          type="submit"
        >
          {status === "loading" ? "Submitting…" : "Submit Application"}
        </button>
        {status === "error" ? (
          <p className="text-center text-[13px] text-error">Something went wrong — please try again.</p>
        ) : null}
      </form>
    </div>
  );
}
