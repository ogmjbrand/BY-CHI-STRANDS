export interface Article {
  slug: string;
  title: string;
  category: "Hair Care" | "Luxury Living" | "The Business" | "Styling";
  excerpt: string;
  date: string;
  readTime: string;
  tone: "noir" | "espresso" | "copper" | "honey" | "burgundy";
  image: string;
  body: { heading?: string; text: string }[];
}

export const articles: Article[] = [
  {
    slug: "why-raw-raw-hair",
    title: "Why the World's Best Hair Comes From ",
    category: "The Business",
    excerpt:
      "Diet, water, genetics and a culture of long hair — the quiet reasons raw hair outperforms every other origin we have tested.",
    date: "2026-06-12",
    readTime: "6 min read",
    tone: "noir",
    image: "/products/IMG-20260727-WA0045.jpg",
    body: [
      {
        text: "Every importer has an origin story they tell. Ours began with a test: we bought hair from six countries, washed each bundle forty times, coloured half of them to level 9, and wore the rest daily for a year. The ese bundles were the only ones that finished the experiment looking substantially the way they started.",
      },
      {
        heading: "The strand itself is different",
        text: "raw hair strands are naturally thick-cuticled and low-porosity. In practice this means the hair resists water damage, holds colour pigment longer, and keeps its shine without silicone coatings. Where thinner-cuticled hair drinks in humidity and frizzes, raw hair simply sheds it.",
      },
      {
        heading: "Culture does the conditioning",
        text: "In the northern highlands where we source, long hair is kept for decades and washed with traditional herb rinses. Donors sell hair that has never seen bleach, relaxer or a curling iron. No factory process can retroactively create that history — you can only buy it intact and protect it.",
      },
      {
        heading: "What this means for you",
        text: "A raw ese bundle is an asset, not a consumable. Cared for properly, it outlives five replacement cycles of processed hair — which is why our clients think of their collection the way they think of jewellery: bought once, worn for years, and worth every naira.",
      },
    ],
  },
  {
    slug: "wash-day-ritual",
    title: "The Wash-Day Ritual Your Unit Deserves",
    category: "Hair Care",
    excerpt:
      "A luxury wig should be washed like knitwear, not laundry. Our atelier's exact wash-day protocol, step by step.",
    date: "2026-05-28",
    readTime: "5 min read",
    tone: "espresso",
    image: "/products/IMG-20260726-WA0015.jpg",
    body: [
      {
        text: "Most damage we see in the atelier doesn't come from wear — it comes from wash day. Hot water, harsh sulphates and rough handling will age a unit faster than a year of daily styling. Here is the exact protocol our Hair Laundry service follows, adapted for home.",
      },
      {
        heading: "Before water touches hair",
        text: "Detangle completely while dry, starting from the ends and working up in sections. Never wash a tangled unit; water tightens knots permanently. Two minutes of combing saves an hour of recovery.",
      },
      {
        heading: "Cool water, straight lines",
        text: "Wash in cool-to-lukewarm water, always in the direction of the strand — never piled or scrubbed in circles. Use a sulphate-free shampoo diluted in a basin, drawn through the lengths with your fingers. Repeat once if the water runs cloudy.",
      },
      {
        heading: "Condition like it matters",
        text: "Apply a rich, protein-balanced conditioner from mid-length to ends, avoiding the knots at the lace. Leave it for a full ten minutes under a warm towel. Rinse cool to close the cuticle and lock in shine.",
      },
      {
        heading: "The drying discipline",
        text: "Blot — never wring — with a microfibre towel, then air-dry the unit on a canvas block so the lace keeps its shape. Once fully dry, a single pass of low heat with thermal protectant restores the finish. Sleep on silk, and the style keeps for a week.",
      },
    ],
  },
  {
    slug: "melt-your-lace",
    title: "Melted, Not Placed: Secrets of an Invisible Install",
    category: "Styling",
    excerpt:
      "What separates a wig that looks applied from one that looks grown? Our head stylist on lace tinting, plucking and the melt.",
    date: "2026-05-02",
    readTime: "7 min read",
    tone: "honey",
    image: "/services/frontal-installation-1.jpg",
    body: [
      {
        text: "You can spot an average install from across a room, and you can miss an excellent one from a metre away. The difference is rarely the hair — it is the ninety minutes of customisation that happens before the unit ever touches adhesive.",
      },
      {
        heading: "Tint the lace, not the skin",
        text: "HD lace is translucent, not invisible; it still needs to be tinted to your exact undertone. We mix lace tint the way makeup artists mix foundation — warm, neutral or cool, tested against the skin behind your ear, not the back of your hand.",
      },
      {
        heading: "The graduated hairline",
        text: "Real hairlines are not lines. They begin with sparse baby hairs, thicken over a centimetre, and vary from person to person. We pluck every unit into that gradient — heavier at the temples, softer at the widow's peak — copying your own natural pattern.",
      },
      {
        heading: "The melt is chemistry, not glue",
        text: "A lasting melt comes from clean skin, thin layered adhesive passes, and patience — each layer set before the next. Done properly, the lace fuses with the skin's texture and disappears entirely under a single dusting of powder.",
      },
    ],
  },
  {
    slug: "importation-mistakes",
    title: "Five Mistakes New Hair Importers Make (and How to Avoid Them)",
    category: "The Business",
    excerpt:
      "From our Academy classroom: the expensive lessons every new importer learns — unless someone teaches them first.",
    date: "2026-04-15",
    readTime: "8 min read",
    tone: "copper",
    image: "/services/hair-importation-2.jpeg",
    body: [
      {
        text: "Every month, our Academy welcomes women who tried importing alone first. Their stories rhyme: a vendor found on social media, a convincing video call, a payment sent — and a box of blended, processed hair that smells of corn chips and silicone. These are the five mistakes behind almost every loss.",
      },
      {
        heading: "1. Trusting the sample",
        text: "Any vendor can send an excellent sample. Professionals order the sample and the bulk from the same braid batch, verify with a burn and stretch test on arrival, and hold a percentage of payment until the bulk order matches. Structure beats trust.",
      },
      {
        heading: "2. Paying like an amateur",
        text: "Full prepayment by untraceable transfer is how most money is lost. We teach staged payment structures, escrow options, and which payment rails give you actual recourse when a shipment fails inspection.",
      },
      {
        heading: "3. Skipping the grading system",
        text: "Terms like 10A and 12A are marketing, not standards. Real grading is done with your hands: strand thickness, cuticle direction, shed count, return-after-stretch. Our students grade blind samples until their fingers know the difference.",
      },
      {
        heading: "4. Ignoring landed cost",
        text: "The bundle price is a third of the story. Freight, duties, clearing, failed-inspection reserves and payment fees decide your real margin. We build every student a landed-cost calculator before they spend a dollar.",
      },
      {
        heading: "5. Building on one vendor",
        text: "A single-vendor business is one bad shipment from closure. Graduates leave with a vetted multi-vendor network — because resilience, not luck, is what makes an import business survive year three.",
      },
    ],
  },
  {
    slug: "bridal-hair-timeline",
    title: "The Bride's Hair Timeline: Twelve Weeks to the Aisle",
    category: "Luxury Living",
    excerpt:
      "When to order, when to colour, when to trial and when to install — a wedding-day countdown from our bridal specialists.",
    date: "2026-03-20",
    readTime: "6 min read",
    tone: "burgundy",
    image: "/products/IMG-20260726-WA0019.jpg",
    body: [
      {
        text: "Wedding hair should be decided calmly, months out — never in the frantic fortnight before the day. This is the timeline we walk every ByChi Strands bride through, refined across hundreds of weddings.",
      },
      {
        heading: "Twelve weeks: commission the hair",
        text: "Order bundles or commission your unit now. Raw hair in premium lengths sells through, and custom colour work needs breathing room. This is also the moment to book your installation slot — Saturdays fill first.",
      },
      {
        heading: "Eight weeks: colour and customise",
        text: "Any colour transformation happens now, never closer. It gives the tone time to settle and gives you time to live with it. Lace customisation and density adjustments happen in the same window.",
      },
      {
        heading: "Four weeks: the trial",
        text: "A full styling trial with your veil, your jewellery and your photographer's lighting notes. We photograph the trial from every angle so the wedding-morning stylist works from evidence, not memory.",
      },
      {
        heading: "The final week",
        text: "Hair laundry five days out, so the unit is freshly conditioned but fully settled. Install two days before the wedding — close enough to be flawless, far enough to survive the rehearsal dinner. On the morning itself: styling only, champagne optional but recommended.",
      },
    ],
  },
  {
    slug: "cost-per-wear",
    title: "The Mathematics of Luxury: Cost-Per-Wear, Explained",
    category: "Luxury Living",
    excerpt:
      "Why a $500 raw-hair unit is cheaper than a $150 one — the arithmetic every luxury buyer eventually discovers.",
    date: "2026-02-10",
    readTime: "4 min read",
    tone: "noir",
    image: "/products/IMG-20260727-WA0017.jpg",
    body: [
      {
        text: "The most expensive hair our clients ever buy is the cheap hair they bought first. It is a line we hear weekly in the atelier, and the arithmetic behind it deserves to be written down.",
      },
      {
        heading: "The replacement cycle",
        text: "Processed blended hair looks its best for six to ten wears, then dulls, tangles and mattes — a replacement cycle of three to four months. A $150 unit replaced quarterly costs $600 a year, and looks average for most of it.",
      },
      {
        heading: "The raw alternative",
        text: "A raw ese unit at $500, laundered seasonally and revamped yearly, wears beautifully for five years or more. That is under $150 a year including care — with the first-week finish available on demand, indefinitely.",
      },
      {
        heading: "Luxury is the honest price",
        text: "Cost-per-wear is how our clients justify the investment, but it undersells the truth: the raw unit is also simply better every single day you wear it. The mathematics merely gives you permission to buy what you already knew was right.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
