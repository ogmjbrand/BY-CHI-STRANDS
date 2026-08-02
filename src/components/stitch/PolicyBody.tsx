import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export interface PolicyBlock {
  heading: string;
  /** Paragraphs of running copy. */
  body?: string[];
  /** Optional definition rows — used for delivery windows and the like. */
  rows?: { term: string; detail: string }[];
  /** Optional bullet list. */
  points?: string[];
}

/**
 * Shared presentation for the client-care and legal pages.
 *
 * These pages previously rendered a single paragraph of site.description and
 * a contact block, which meant the footer and the FAQ both linked to a
 * "policy" that stated no policy. The content passed in here is sourced from
 * commitments the house already publishes elsewhere on the site — nothing is
 * asserted that isn't already stated in the FAQ, on the homepage promise, or
 * by the checkout itself.
 */
export function PolicyBody({
  blocks,
  updated,
  footnote,
}: {
  blocks: PolicyBlock[];
  /** Human-readable date this copy was last reviewed. */
  updated: string;
  footnote?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-label-caps text-[11px] uppercase tracking-[0.25em] text-primary">
        Last reviewed {updated}
      </p>

      <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
        {blocks.map((b) => (
          <section key={b.heading}>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{b.heading}</h2>

            {b.body?.map((p) => (
              <p key={p} className="mt-5 font-body-md leading-relaxed text-on-surface-variant">
                {p}
              </p>
            ))}

            {b.rows ? (
              <dl className="mt-8 border-t border-outline-variant/25">
                {b.rows.map((r) => (
                  <div
                    key={r.term}
                    className="grid grid-cols-1 gap-1 border-b border-outline-variant/25 py-5 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-6"
                  >
                    <dt className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-primary">
                      {r.term}
                    </dt>
                    <dd className="font-body-md leading-relaxed text-on-surface-variant">
                      {r.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {b.points ? (
              <ul className="mt-6 space-y-3">
                {b.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-4 font-body-md leading-relaxed text-on-surface-variant"
                  >
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary/50" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {footnote ? (
        <p className="mt-16 font-body-sm leading-relaxed text-on-surface-variant/70">{footnote}</p>
      ) : null}

      <div className="mt-16 border-t border-outline-variant/25 pt-12">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Talk to the concierge</h2>
        <p className="mt-5 max-w-xl font-body-md leading-relaxed text-on-surface-variant">
          Anything this page does not cover, ask us directly. We answer within one
          business day.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary px-8 py-3.5 text-center font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-primary"
          >
            Message on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}`}
            className="border border-outline/40 px-8 py-3.5 text-center font-label-caps text-[11px] uppercase tracking-[0.2em] text-on-surface"
          >
            {site.email}
          </a>
          <Link
            href="/faqs"
            className="w-fit border-b border-primary pb-1 font-label-caps text-[11px] uppercase tracking-[0.2em] text-primary sm:ml-2"
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
