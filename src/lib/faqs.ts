export interface FaqGroup {
  title: string;
  faqs: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Hair & Quality",
    faqs: [
      {
        q: "What makes Vietnamese hair different from other origins?",
        a: "Vietnamese hair is naturally thick-cuticled and low-porosity, which means it resists tangling, holds colour longer and keeps its shine without coatings. Ours is additionally raw — cut from a single braid and never chemically processed — so it behaves like healthy growing hair, not a manufactured product.",
      },
      {
        q: "What does 'raw' actually mean?",
        a: "Raw hair has never been chemically altered — no acid baths, no silicone coating, no relaxing, no dye. Texture is set only with steam. It is the highest grade of human hair available, and the only grade we import.",
      },
      {
        q: "Can I bleach or colour the hair?",
        a: "Yes — raw Vietnamese hair lifts beautifully up to platinum when handled professionally. We recommend our in-house colouring service, where every lift is bond-protected and cuticle-sealed. Home box dye on luxury hair is the one thing we will always talk you out of.",
      },
      {
        q: "How long will my hair or unit last?",
        a: "Bundles: five years or more with proper care. Wig units: three to five years of regular wear, longer with seasonal Hair Laundry and yearly revamps. Most of our early clients still wear their first purchases.",
      },
      {
        q: "How many bundles do I need for a full install?",
        a: "To 22 inches, three bundles with a closure is standard. For 24 inches and longer, or for high-density styles, plan for four. With a 13x4 or 13x6 frontal, three to four bundles depending on length.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    faqs: [
      {
        q: "Where do you ship?",
        a: "Worldwide. Lagos same-week courier, nationwide Nigeria in 2–4 business days, and international delivery via DHL Express in 3–7 business days, fully tracked and insured.",
      },
      {
        q: "How is my order packaged?",
        a: "Every order arrives in our signature packaging: silk-wrapped hair inside a rigid gift box, with a care card and authentication tag. Wig units ship on a protective form to preserve the lace.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes — split payment plans are available on orders above $300. A 50% deposit secures your hair or begins your custom unit; the balance is due before dispatch.",
      },
      {
        q: "What is your returns policy?",
        a: "Unworn hair with intact wefts and original packaging may be exchanged within 7 days of delivery. For hygiene reasons, worn or installed hair cannot be returned — but if anything is genuinely wrong with your order, we will always make it right. See our full Returns policy.",
      },
    ],
  },
  {
    title: "Services & Bookings",
    faqs: [
      {
        q: "How do appointments work?",
        a: "Book online with a deposit, which is applied to your final bill. You'll receive email confirmation immediately and a WhatsApp reminder the day before. Reschedule free of charge up to 48 hours ahead.",
      },
      {
        q: "Can you revamp a wig I didn't buy from you?",
        a: "In most cases, yes. Bring the unit in (or courier it to us) for assessment — we'll give you an honest verdict on what's recoverable before any work begins. Some heavily processed units are beyond saving, and we will tell you so rather than take your money.",
      },
      {
        q: "Do you travel for bridal styling?",
        a: "Our bridal team offers on-location wedding-morning styling within Lagos, and travels nationwide by arrangement. Book a bridal trial first — it is the single best predictor of a calm wedding morning.",
      },
    ],
  },
  {
    title: "Home Service",
    faqs: [
      {
        q: "Do you offer home service?",
        a: "Yes. Home service is available for frontal installation. Please book in advance so we can confirm availability, location and any travel arrangements.",
      },
    ],
  },
  {
    title: "The Academy",
    faqs: [
      {
        q: "Who is the Hair Importation Masterclass for?",
        a: "Anyone serious about building a hair business: aspiring importers, stylists adding retail, and existing sellers who want direct Vietnamese supply. No prior experience is required — cohorts start from first principles.",
      },
      {
        q: "Is the vendor list included?",
        a: "Graduates receive our vetted vendor framework and introductions to verified suppliers — plus, more importantly, the skills to vet any vendor themselves. A list without judgement is how people get scammed; we teach both.",
      },
      {
        q: "Is there a certificate?",
        a: "Yes. Graduates receive the ByChiStrands Academy certificate, lifetime access to course updates, and admission to the private alumni network where sourcing intelligence is shared.",
      },
    ],
  },
];
