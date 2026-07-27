import type { Metadata } from "next";
import { site } from "@/lib/site";
import { StitchPageShell } from "@/components/stitch/SiteChrome";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <StitchPageShell
      eyebrow={"Concierge"}
      title={"Contact Us"}
      lede={"Reach the atelier for private consultations, order support and wholesale enquiries."}
    >
      <div className="max-w-3xl space-y-10 font-body-xl text-body-xl text-on-surface-variant reveal">
        <p>{site.description}</p>
        <p>
          For anything not covered here, our concierge answers within one
          business day at{" "}
          <a className="text-primary hover-underline relative" href={"mailto:" + site.email}>
            {site.email}
          </a>
          .
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-10 pt-10 border-t border-outline-variant/30">
          <div>
            <dt className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-3">Atelier</dt>
            <dd className="font-body-md text-on-surface">{site.address}</dd>
          </div>
          <div>
            <dt className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-3">Telephone</dt>
            <dd className="font-body-md text-on-surface">{site.phone}</dd>
          </div>
          {site.hours.map((h) => (
            <div key={h.days}>
              <dt className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-3">{h.days}</dt>
              <dd className="font-body-md text-on-surface">{h.time}</dd>
            </div>
          ))}
        </dl>
      </div>
    </StitchPageShell>
  );
}
