"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { getProduct } from "@/lib/products";
import { useToast } from "@/components/stitch/Toast";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_review_submission_form
 * "ByChi Strands | Share Your Story"
 *
 * The real review API (POST /api/products/[id]/reviews) requires an
 * `x-user-id` — there's no account/auth system on this site yet, so it
 * can't be called from here honestly. This form instead sends the
 * submission to the same real inbox as the contact form (POST /api/contact)
 * for the team to review and publish, rather than pretending to auto-post
 * a verified review. Dropped: a fabricated "Confirmed Acquisition" product
 * card showing a piece that isn't necessarily what the visitor bought, and
 * a video-upload control that captured nothing.
 */
function ReviewFormContent() {
  const productSlug = useSearchParams().get("product");
  const product = productSlug ? getProduct(productSlug) : undefined;
  const { notify } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || !rating) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: `Review submission — ${subject || (product ? product.name : "General")}`,
          message: `Rating: ${rating}/5\nProduct: ${product ? product.name : "Not specified"}\n\n${content}`,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      notify("Thank you", "Your story is with our team — we'll be in touch if we publish it.");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <main className="flex-1 flex flex-col items-center justify-center text-center px-margin-mobile py-32">
        {/* Decorative thank-you mark, not an affordance. */}
        <Icon name="favorite" className="text-primary text-5xl mb-8" />
        <h1 className="font-display-md text-headline-lg mb-4">Thank you for sharing.</h1>
        <p className="font-body-md text-on-surface-variant max-w-md mb-10">
          Your story has been sent to our team. We read every one, and may feature yours in our
          client narratives.
        </p>
        <Link
          href="/shop"
          className="px-10 py-4 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
        >
          Continue Browsing
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-2xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <header className="text-center mb-16 space-y-4">
        <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block">
          Client Chronicles
        </span>
        <h1 className="font-display-lg text-display-md leading-tight tracking-[-0.02em]">
          Share Your Story
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
          {product
            ? `Tell us about your ${product.name}.`
            : "Tell us about your experience with ByChiStrands."}
        </p>
      </header>

      <form onSubmit={submit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-widest">
              Your Name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-md focus:ring-0 focus:border-primary transition-colors"
              type="text"
            />
          </div>
          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-widest">
              Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-md focus:ring-0 focus:border-primary transition-colors"
              type="email"
            />
          </div>
        </div>

        <div className="text-center py-8 border-y border-outline-variant/20">
          <h2 className="font-label-caps text-label-caps text-on-surface mb-6 tracking-[0.15em]">
            Your Rating
          </h2>
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                onMouseEnter={() => setHoverRating(n)}
                onMouseLeave={() => setHoverRating(0)}
                aria-label={`${n} star${n === 1 ? "" : "s"}`}
                className="transition-transform duration-200 hover:scale-110"
              >
                <Icon
                  name="star"
                  filled={(hoverRating || rating) >= n}
                  className="text-4xl text-primary"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-widest">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g., A Timeless Transformation"
            className="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-md focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40"
            type="text"
          />
        </div>

        <div>
          <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-widest">
            Your Story
          </label>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe how the piece wore, how it made you feel, and anything else future clients should know..."
            className="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-md focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40 resize-none"
            rows={6}
          />
        </div>

        <footer className="pt-6 flex flex-col items-center">
          <button
            type="submit"
            disabled={status === "loading" || !rating}
            className="w-full py-6 bg-on-surface text-surface font-label-caps text-label-caps tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-all duration-500 disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : "Submit Your Story"}
          </button>
          {!rating && status !== "loading" ? (
            <p className="mt-4 text-[12px] text-on-surface-variant">Please select a rating.</p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 text-[12px] text-error">Something went wrong — please try again.</p>
          ) : null}
        </footer>
      </form>
    </main>
  );
}

export default function ReviewSubmissionFormPage() {
  return (
    <div className="scr-review-submission-form theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <SiteHeader dark />
      <Suspense fallback={<div className="flex-1" />}>
        <ReviewFormContent />
      </Suspense>
      <footer className="border-t border-outline-variant/20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 text-center">
          <p className="font-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {site.name}. The Art of Luxury Hair.
          </p>
        </div>
      </footer>
    </div>
  );
}
