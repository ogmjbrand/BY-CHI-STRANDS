import type { Metadata } from "next";
import { faqGroups } from "@/lib/faqs";
import { StitchPageShell } from "@/components/stitch/SiteChrome";
import ScrollFAQAccordion from "@/components/ui/scroll-faq-accordion";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FaqsPage() {
  return (
    <StitchPageShell
      ground="ground-faqs"
      eyebrow="Client Care"
      title="Frequently Asked"
      lede="Everything you need to know about our sourcing, craftsmanship, services and aftercare."
    >
      <div>
        {faqGroups.map((group) => (
          <section key={group.title} className="reveal">
            <h2 className="font-display-md text-headline-lg pb-6 border-b border-outline-variant/30">
              {group.title}
            </h2>
            <ScrollFAQAccordion
              data={group.faqs.map((faq, i) => ({
                id: i,
                question: faq.q,
                answer: faq.a,
              }))}
            />
          </section>
        ))}
      </div>
    </StitchPageShell>
  );
}
