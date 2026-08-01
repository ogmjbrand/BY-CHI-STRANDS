"use client";

import { useState } from "react";
import { useToast } from "./Toast";

/**
 * Posts to /api/contact with type: "newsletter" — real Supabase + Resend
 * infrastructure already used by the contact form, not a decorative input
 * that goes nowhere on submit.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email, type: "newsletter" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setEmail("");
      notify("You're on the list", "Watch your inbox for new arrivals and atelier news.");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-noir text-white py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Real catalogue photography — was an empty bordered placeholder. */}
        <div className="hidden md:block aspect-[16/9] overflow-hidden border border-gold/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/products/IMG-20260727-WA0045.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display-md text-headline-lg-mobile md:text-display-md mb-4 tracking-[-0.01em]">
            Join The ByChi Family
          </h2>
          <p className="font-body-md text-white/60 mb-8 max-w-md">
            Exclusive offers, new arrivals and hair tips delivered straight to your inbox.
          </p>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/20 px-5 py-4 font-body-md text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gold text-noir px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-gold-light transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Subscribe"}
            </button>
          </form>
          {status === "error" ? (
            <p className="font-body-sm text-[13px] text-error mt-4">
              Something went wrong — please try again.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
