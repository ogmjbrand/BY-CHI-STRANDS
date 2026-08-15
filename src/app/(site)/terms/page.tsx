import type { Metadata } from "next";
import { StitchPageShell } from "@/components/stitch/SiteChrome";
import { PolicyBody, type PolicyBlock } from "@/components/stitch/PolicyBody";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms you are agreeing to when you order, book, or enrol with ByChi Strands — pricing, payment, delivery, exchanges and the limits of what we promise.",
};

/**
 * Written the same way the privacy policy was: from what the site actually
 * does, and from commitments the house already publishes elsewhere. Every
 * statement here is checkable —
 *
 *   - the seven-day exchange window and its conditions are /returns
 *   - the delivery windows and who quotes shipping are /shipping
 *   - quote-on-request pricing is real: items with a null price cannot be
 *     charged automatically, and the initiate route rejects them
 *   - payment is Flutterwave Standard, so card details never reach us
 *   - prices are NGN (site.currency)
 *
 * What is deliberately NOT here: a registered company name or RC number, a
 * governing-law clause, a jurisdiction for disputes, a liability cap, and a
 * formal dispute-resolution procedure. Those are legally operative facts,
 * they are the owner's to establish with a Nigerian lawyer, and inventing
 * plausible-sounding ones would be worse than leaving the gap visible. They
 * appear as marked "to be confirmed" panels instead.
 */
const BLOCKS: PolicyBlock[] = [
  {
    heading: "Who these terms are between",
    body: [
      `These terms cover your use of this website and anything you order, book or enrol in through it. "We" and "ByChi Strands" mean ${site.name}, trading from ${site.address}, reachable at ${site.email}.`,
      "Placing an order, booking an appointment or enrolling in a course means you accept what is written here. If something on this page does not work for you, tell the concierge before you order rather than after.",
    ],
    pending: [
      "The registered business name and registration number ByChi Strands trades under are not published here yet.",
      "Until they are, the contact details above are the formal route for anything that needs a named counterparty.",
    ],
  },
  {
    heading: "Prices and what they include",
    body: [
      `Prices are shown in Nigerian Naira (${site.currency}) and cover the piece itself. Shipping is quoted separately, and any customs duty or import tax charged by the destination country is the recipient's to pay — we cannot calculate or collect it in advance.`,
      "Some pieces are priced on request rather than listed. Those cannot be bought straight through checkout: the concierge confirms the price with you in writing first, and nothing is charged until you agree to it.",
      "We may change prices at any time, but never on an order you have already placed. The price you were charged is the price you agreed to.",
    ],
  },
  {
    heading: "Placing an order",
    body: [
      "An order is an offer to buy, and the sale is complete when we confirm and dispatch it. If a piece turns out to be unavailable after you have ordered, or a price is displayed in obvious error, we will tell you and refund in full rather than substitute something you did not choose.",
      "Every piece is hair — a natural material. Colour, curl pattern and density vary slightly between units and between bundles from the same collection. Photography and video on this site show real stock, but a screen is not a swatch.",
    ],
  },
  {
    heading: "Payment",
    body: [
      "Card payments are handled by Flutterwave on their own checkout page. Your card number, expiry and security code are entered there and are never sent to or stored on this site. We confirm payment directly with Flutterwave before treating an order as paid.",
      "Where card payment is not available for an order — a quoted piece, or a payment that does not complete — the concierge arranges payment with you directly. No order is dispatched before it is paid for.",
    ],
  },
  {
    heading: "Delivery",
    body: [
      "Delivery timings are published on the shipping page: same-week courier within Lagos, two to four business days elsewhere in Nigeria, and a quoted DHL Express service internationally.",
      "Those are working estimates, not guarantees. Once a parcel is with the courier its progress is in their hands, and customs clearance on an international order is outside anyone's control. If a parcel stalls, tell us and we will chase it with the carrier on your behalf.",
      "Risk in the goods passes to you on delivery. If a parcel arrives damaged, that is covered below rather than by this paragraph.",
    ],
  },
  {
    heading: "Exchanges, and when they apply",
    body: [
      "The full exchange policy is on the returns page and it governs. In short: seven days from delivery, on unworn and uninstalled hair in its original packaging with ties intact, exchanged rather than refunded.",
      "Hair that has been installed, cut, coloured, washed or worn cannot be exchanged. This is a hygiene limit, not a commercial one, and it holds regardless of how little the piece was worn.",
      "If what arrived is not what you ordered, or it arrived damaged, that is our error and neither the seven-day window nor the exchange-only outcome applies. Send photographs to the concierge and we will correct it.",
    ],
  },
  {
    heading: "Services and appointments",
    body: [
      "Appointments are held for you and reserve a stylist's time. Give us reasonable notice if you cannot make one so the slot can be released; repeated no-shows may mean we ask for a deposit before booking again.",
      "Service outcomes depend on the condition of your own hair and scalp, which we assess at consultation. We will tell you honestly at that point if what you are asking for is not achievable safely, rather than attempting it and charging you for it.",
    ],
  },
  {
    heading: "The Academy",
    body: [
      "Course fees cover your place, the sessions themselves and the materials named in the course description. Access details are issued to the email address you enrol with, so it needs to be one you actually read.",
      "Course materials are for your own learning. You are welcome to use what you learn commercially — that is the point of the training — but the materials themselves are not yours to redistribute, resell or teach from as your own.",
    ],
  },
  {
    heading: "Using this site",
    body: [
      "The photography, video, written copy and design on this site belong to ByChi Strands. Please do not republish them as your own or use them to sell hair that did not come from us.",
      "We keep the site available and accurate as best we can, but it is not guaranteed to be uninterrupted or error-free. Prices, stock and copy can be wrong, and where a genuine error affects your order we will correct it rather than hold you to it.",
    ],
  },
  {
    heading: "What we are responsible for",
    body: [
      "We are responsible for supplying what you ordered, in the condition described, and for putting it right when we do not. That commitment is set out in the exchange terms above and we will honour it.",
      "Nothing in these terms takes away rights you have under Nigerian consumer law. Where anything written here conflicts with those rights, those rights win.",
    ],
    pending: [
      "A limitation-of-liability clause — what ByChi Strands' liability is capped at, and which categories of loss are excluded — has not been settled and is not stated here.",
      "Until it is, the position is simply the one above: we stand behind what we supply, and statutory consumer rights are unaffected.",
    ],
  },
  {
    heading: "Disagreements",
    body: [
      "Tell the concierge first. Most problems with an order are a courier issue, a sizing issue or a miscommunication, and are settled the same week once someone actually looks at them.",
    ],
    pending: [
      "The governing law and the courts or forum for a formal dispute are not stated on this page yet.",
      "A formal complaints and escalation procedure, including response times, has not been published.",
      "These need to be set with a Nigerian legal adviser before they appear here. Deliberately, none has been guessed at.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may revise this page as ByChi Strands changes how it operates. The review date at the top moves whenever it does, and the terms that apply to your order are the ones published on the day you placed it.",
    ],
  },
];

export default function TermsPage() {
  return (
    <StitchPageShell
      ground="ground-terms"
      eyebrow="Legal"
      title="Terms of Service"
      lede="What you are agreeing to when you order, book or enrol."
    >
      <PolicyBody
        blocks={BLOCKS}
        updated="August 2026"
        footnote="This page states the actual trading practice of ByChi Strands. The panels marked “to be confirmed” are legally operative details — registered entity, liability, governing law and dispute procedure — that are still being settled with a legal adviser. They are shown as gaps on purpose: nothing has been drafted to fill the space, and no statement here should be read as a substitute for those clauses once they are published."
      />
    </StitchPageShell>
  );
}
