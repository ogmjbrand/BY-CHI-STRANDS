import { testimonials } from "@/lib/testimonials";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

/**
 * Wraps CircularTestimonials with the house's own client footage. The
 * "quote" is the same descriptive caption used on the video rail — never an
 * invented line of dialogue — and the photo is the real poster frame pulled
 * from each clip, so nothing here is stock or fabricated.
 */
const carouselTestimonials = testimonials.map((t, index) => ({
  quote: t.caption,
  name: index === 0 ? "Princess" : "ByChiStrands Client",
  designation: t.context,
  src: t.clip.poster ?? t.clip.src,
}));

export function ClientTestimonialsCarousel() {
  return (
    <div className="flex justify-center">
      <CircularTestimonials
        testimonials={carouselTestimonials}
        autoplay
        colors={{
          name: "var(--color-on-surface)",
          designation: "var(--color-on-surface-variant)",
          testimony: "var(--color-on-surface-variant)",
          arrowBackground: "var(--color-primary)",
          arrowForeground: "var(--color-on-primary)",
          arrowHoverBackground: "var(--color-secondary)",
        }}
        fontSizes={{
          name: "1.375rem",
          designation: "0.925rem",
          quote: "1.125rem",
        }}
      />
    </div>
  );
}
