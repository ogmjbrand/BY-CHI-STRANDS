"use client";

import { useState } from "react";
import { useToast } from "./Toast";

/**
 * A compact single-line newsletter field for footers — same real
 * /api/contact (type: "newsletter") submission as the homepage's
 * full Newsletter section, just without the two-column layout.
 */
export function InlineNewsletterField() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const { notify } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || !email) return;
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
      notify("You're on the list", "Watch your inbox for masterclass updates.");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return <p className="font-body-md text-body-sm text-primary">You&apos;re on the list.</p>;
  }

  return (
    <form className="flex" onSubmit={submit}>
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 text-sm w-full font-body-md"
        placeholder="Email"
        type="email"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="border-b border-outline-variant hover:border-primary transition-colors px-2 disabled:opacity-60"
      >
        <span className="material-symbols-outlined text-primary">arrow_forward</span>
      </button>
    </form>
  );
}
