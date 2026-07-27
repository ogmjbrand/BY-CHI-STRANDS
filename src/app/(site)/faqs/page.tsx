import type { Metadata } from "next";
import { faqGroups } from "@/lib/faqs";
import { StitchPageShell } from "@/components/stitch/SiteChrome";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FaqsPage() {
  return (
    <StitchPageShell
      eyebrow="Client Care"
      title="Frequently Asked"
      lede="Everything you need to know about our sourcing, craftsmanship, services and aftercare."
    >
      <div className="space-y-24">
        {faqGroups.map((group) => (
          <section key={group.title} className="reveal">
            <h2 className="font-display-md text-headline-lg mb-12 pb-6 border-b border-outline-variant/30">
              {group.title}
            </h2>
            <dl className="grid grid-cols-1 lg:grid-cols-2 gap-x-gutter gap-y-16">
              {group.faqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="font-headline-lg text-body-xl text-on-surface mb-4">
                    {faq.q}
                  </dt>
                  <dd className="font-body-md text-on-surface-variant">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </StitchPageShell>
  );
}
