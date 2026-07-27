import { testimonyClips, type Media } from "./media";

/**
 * Client testimonials. These are the house's own clips — the copy describes
 * what each video shows rather than inventing a quote to put in a client's
 * mouth, so nothing here claims a customer said something they did not.
 */
export interface Testimonial {
  clip: Media;
  caption: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    clip: testimonyClips[0],
    caption: "Princess reviews her unit on camera.",
    context: "Client review",
  },
  {
    clip: testimonyClips[1],
    caption: "A finished install, worn out the same day.",
    context: "Client install",
  },
  {
    clip: testimonyClips[2],
    caption: "An order opened at home, still in its packaging.",
    context: "Unboxing",
  },
  {
    clip: testimonyClips[3],
    caption: "A client talks through how the hair has held up.",
    context: "Client review",
  },
  {
    clip: testimonyClips[4],
    caption: "The honey blonde straight unit, worn long.",
    context: "Client install",
  },
  {
    clip: testimonyClips[5],
    caption: "An order collected in store.",
    context: "Collection",
  },
];
