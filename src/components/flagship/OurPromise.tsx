import Link from "next/link";

/**
 * "Our Promise" — the trust chapter the site was missing: what the house
 * guarantees, how a piece is checked, and what actually arrives in the box.
 *
 * Every line is drawn from commitments already stated elsewhere on the site
 * (the FAQ's returns/shipping answers, the packaging description, the raw
 * sourcing copy on /about) rather than invented guarantees or badges. No
 * awards, no certifications, no press logos — the house has none to claim.
 */

const PROMISES = [
  {
    n: "01",
    title: "Raw, Or It Doesn't Ship",
    body:
      "Every bundle is raw — cut from a single braid, never acid-bathed, silicone-coated, relaxed or dyed. Texture is set with steam alone. If a batch doesn't grade out, it doesn't reach you.",
  },
  {
    n: "02",
    title: "Graded By Hand",
    body:
      "Strand thickness, cuticle direction, shed count and return-after-stretch are checked by hand before a piece is listed — the same test we teach in the Academy.",
  },
  {
    n: "03",
    title: "Tracked And Insured",
    body:
      "Lagos same-week courier, nationwide Nigeria in 2–4 business days, worldwide via DHL Express in 3–7 — every order fully tracked and insured in transit.",
  },
  {
    n: "04",
    title: "Seven-Day Exchange",
    body:
      "Unworn hair with intact wefts and original packaging can be exchanged within 7 days of delivery. If something is genuinely wrong with your order, we make it right.",
  },
];

export function OurPromise() {
  return (
    <section className="bg-surface text-on-surface px-6 md:px-16 py-section-padding">
      <div className="max-w-[1800px] mx-auto">
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary mb-8">
            Our Promise
          </p>
          <h2 className="font-display-md text-display-md text-on-surface leading-[1.08] mb-10">
            Luxury you can hold to account.
          </h2>
          <p className="font-body-xl text-on-surface-variant max-w-xl">
            A house is only as good as what it refuses to sell. These are the
            commitments behind every piece that leaves the atelier.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-16 md:gap-y-24">
          {PROMISES.map((p) => (
            <li key={p.n} className="flex gap-8 md:gap-10">
              <span className="font-display-md text-primary/40 text-3xl md:text-4xl leading-none shrink-0 tabular-nums">
                {p.n}
              </span>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">{p.title}</h3>
                <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 md:mt-28 pt-12 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center gap-8">
          <p className="font-body-md text-on-surface-variant max-w-md">
            Every order arrives silk-wrapped in a rigid gift box, with a care
            card and an authentication tag. Wig units ship on a protective form
            to preserve the lace.
          </p>
          <Link
            href="/faqs"
            className="shrink-0 font-label-caps text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary pb-1 w-fit"
          >
            Read the Full FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
