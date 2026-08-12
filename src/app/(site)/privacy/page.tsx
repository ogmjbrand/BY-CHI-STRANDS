import type { Metadata } from "next";
import { StitchPageShell } from "@/components/stitch/SiteChrome";
import { PolicyBody, type PolicyBlock } from "@/components/stitch/PolicyBody";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What this site collects, where it is stored, which services process it, and how to have it corrected or deleted.",
};

/**
 * Written from the codebase rather than from a template, so every statement
 * here is checkable against what the software actually does:
 *
 *   - the fields stored on an order are the Order type in src/types/orders.ts
 *   - the tables named are the ones src/lib/*.ts actually writes to
 *   - the two localStorage keys are bychistrands-store-v1 (cart, wishlist,
 *     recently viewed) and bychi-customer-profile (name, email, phone)
 *   - card payment uses Flutterwave's hosted checkout (src/lib/flutterwave.ts
 *     returns a redirect link), so card numbers never reach this server
 *   - there is no analytics or advertising code anywhere in the project, and
 *     nothing in it sets a cookie
 *
 * Two things a policy normally states are deliberately not invented here:
 * fixed retention periods, and a registered data-controller identity beyond
 * the contact details the house already publishes. Both are the owner's to
 * decide, and a made-up number would be worse than none.
 */
const BLOCKS: PolicyBlock[] = [
  {
    heading: "What this page covers",
    body: [
      `This describes what ${site.name} does with your information when you browse this site, place an order, book an appointment, enquire about the Academy, or join the mailing list. It is a description of how the site actually works, not a general statement of intent.`,
    ],
  },
  {
    heading: "What we collect, and when",
    rows: [
      {
        term: "Placing an order",
        detail:
          "Your name, email address, and the delivery address you enter — street, city, state, postcode and country — together with the pieces you ordered and the order total.",
      },
      {
        term: "Paying by card",
        detail:
          "Nothing. Card payments are completed on Flutterwave's own checkout page, so your card number, expiry and security code are never sent to or stored on this site.",
      },
      {
        term: "Booking or enquiring",
        detail:
          "Whatever you type into the form — typically your name, email, the service or course, your preferred date, and any notes about your hair.",
      },
      {
        term: "Mailing list",
        detail: "Your email address only.",
      },
      {
        term: "Browsing",
        detail:
          "Nothing that identifies you. There is no analytics, advertising or tracking code on this site, and nothing on it sets a cookie.",
      },
    ],
  },
  {
    heading: "What stays on your own device",
    body: [
      "Your bag, your wishlist and the pieces you have recently viewed are kept in your browser's local storage, not on our servers. If you save a concierge profile on the account page, your name, email and phone number are stored the same way — on that device only.",
      "Clearing your browser's site data removes all of it. Nothing in that local storage is sent anywhere unless you place an order or submit a form.",
    ],
  },
  {
    heading: "Where your information is kept",
    body: [
      "Orders, bookings, Academy enrolments, enquiries, reviews and mailing-list entries are stored in our database, hosted by Supabase. Access is limited to the people running the house.",
    ],
    pending: [
      "How long each kind of record is kept before deletion has not been fixed yet, so no retention period is stated on this page.",
      "Rather than publish a number we do not hold ourselves to, the position is the one below: ask, and we delete what we are not legally required to keep.",
    ],
  },
  {
    heading: "Who else sees it",
    body: [
      "Only the services needed to actually fulfil what you asked for, and only the part each one needs:",
    ],
    points: [
      "Flutterwave — to take card payments and confirm them. They receive your name, email and the amount.",
      "Resend — to send you order confirmations and mailing-list email. They receive your email address and the contents of that message.",
      "Supabase — to host the database the records sit in.",
      "The courier carrying your parcel — DHL Express or the local courier — receives the delivery address and your phone number so they can reach you.",
    ],
  },
  {
    heading: "What we never do",
    points: [
      "We do not sell your information, and we do not share it for anyone else's advertising.",
      "We do not run advertising pixels, session recording or behavioural tracking on this site.",
      "We do not add you to the mailing list because you ordered something. You are on it only if you asked to be.",
    ],
  },
  {
    heading: "Your rights over your information",
    body: [
      "You can ask to see what we hold about you, to have it corrected, or to have it deleted. You can withdraw consent for mailing-list email at any time — every one of those emails carries an unsubscribe link, and asking the concierge works just as well.",
      "Deleting order records is the one request we may have to limit: where a record is needed to meet Nigerian tax and accounting obligations, we keep that record and delete everything not required for it. We will tell you plainly which is which rather than refusing the whole request.",
    ],
  },
  {
    heading: "How to ask",
    body: [
      `Write to ${site.email} or message the concierge on WhatsApp. Requests are answered within one business day, and acted on as quickly as the request allows. Tell us the email address you used at checkout so we can find your records.`,
    ],
    pending: [
      "The registered data controller — the legal entity accountable for these records — is not named on this page yet, and nor is a supervisory authority to escalate to.",
      "The concierge address above reaches the people who actually hold the data, and works for any request in the meantime.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <StitchPageShell
      eyebrow="Legal"
      title="Privacy Policy"
      lede="What this site collects, where it goes, and how to have it removed."
    >
      <PolicyBody
        blocks={BLOCKS}
        updated="August 2026"
        footnote="This policy describes the current behaviour of this website. If we add anything that changes what is collected or who receives it, this page changes with it and the review date above moves. Retention periods and the registered controller details for formal data requests are still being finalised — until they are published here, the concierge address above is the route for any request."
      />
    </StitchPageShell>
  );
}
