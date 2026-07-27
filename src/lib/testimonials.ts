export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Adaeze O.",
    role: "Bride, Lagos",
    quote:
      "My wedding photos are everything because my hair was everything. The Chi Signature melted so completely that my own mother asked when I'd grown my hair out. Worth every penny, twice over.",
    rating: 5,
    context: "The Chi Signature Wig · Frontal Installation",
  },
  {
    name: "Tomi A.",
    role: "Creative Director",
    quote:
      "I've bought hair on three continents. Nothing has held colour like my Copper Muse — eight months in, it still looks like the day it left the atelier. This is a different class of product.",
    rating: 5,
    context: "The Copper Muse · Colour Edition",
  },
  {
    name: "Chidinma E.",
    role: "Salon Owner, Abuja",
    quote:
      "I stock ByChiStrands raw bundles exclusively now. My clients stopped asking questions about origin the moment they touched the hair. Reorders have never been this consistent.",
    rating: 5,
    context: "Raw Reserve Bundles · Wholesale",
  },
  {
    name: "Funke B.",
    role: "Academy Graduate, Cohort 4",
    quote:
      "The Academy paid for itself with my first shipment. I avoided every scam my classmates-turned-competitors fell into, because Chi taught us exactly where the traps are. Now I run my own brand.",
    rating: 5,
    context: "Hair Importation Masterclass",
  },
  {
    name: "Sarah K.",
    role: "Physician",
    quote:
      "Hair Laundry changed my relationship with my wigs. I drop a unit off like dry cleaning and collect it looking new. Two years on, my first unit still gets compliments weekly.",
    rating: 5,
    context: "Hair Laundry · Wig Revamp",
  },
  {
    name: "Amara N.",
    role: "Influencer",
    quote:
      "I film in 4K and nothing exposes bad lace like 4K. The 13x6 frontal disappears on camera without a filter in sight. My comment section has been asking for months — consider this the answer.",
    rating: 5,
    context: "HD Lace Frontal 13x6",
  },
];
