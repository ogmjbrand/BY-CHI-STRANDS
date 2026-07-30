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
export function AcademyInquiryForm() {
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
      <div className="bg-white text-noir p-8 md:p-12 border border-outline-variant/30 luxury-shadow relative z-10 fade-up text-center">
        <p className="font-headline-lg text-xl mb-2">Application received.</p>
        <p className="font-body-md text-noir/70">
          We&apos;ll follow up by email to confirm your intake details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white text-noir p-8 md:p-12 border border-outline-variant/30 luxury-shadow relative z-10 fade-up">
      <form className="space-y-8" onSubmit={submit}>
        <div>
          <label className="block text-label-caps text-noir/70 mb-2 uppercase tracking-widest">Full Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div>
          <label className="block text-label-caps text-noir/70 mb-2 uppercase tracking-widest">Email Address</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div>
          <label className="block text-label-caps text-noir/70 mb-2 uppercase tracking-widest">Business Type</label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md appearance-none"
          >
            <option>Aspiring Entrepreneur</option>
            <option>Salon Owner</option>
            <option>Retailer / Distributor</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-label-caps text-noir/70 mb-2 uppercase tracking-widest">Message / Goals</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md"
            placeholder="What do you hope to achieve?"
            rows={3}
          />
        </div>
        <button
          disabled={status === "loading"}
          className="w-full bg-on-surface text-surface py-6 text-label-caps uppercase tracking-widest btn-primary-interaction mt-4 disabled:opacity-60"
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
