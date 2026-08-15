/**
 * Client transformations, before and after.
 *
 * There is one real pair in here, and the bar it had to clear is below.
 *
 * A before/after is a factual claim: this person's hair looked like *that*,
 * and after our work it looked like *this*. Pairing two unrelated photographs
 * and captioning them as one client's transformation would be inventing a
 * result ByChi Strands has not produced, which is the one thing this site never
 * does. Stock "before" photos are the same lie with better lighting.
 *
 * So the section that renders these is built, wired and interactive, and it
 * shows a visibly marked placeholder where the "before" frame belongs until
 * real pairs exist. Nothing about the layout or the interaction changes when
 * they arrive — adding entries here is the whole job.
 *
 * WHAT A REAL ENTRY NEEDS
 *
 *   - Both frames of the *same client*, from the *same session* where
 *     possible, with the before shot taken before any work began.
 *   - Written permission from that client to publish her photographs. Get it
 *     in writing, and keep it; a verbal yes at the chair is not a release.
 *   - A truthful description of what was actually done. If the after frame
 *     is styled, lit or edited differently from the before frame, say so in
 *     `note` rather than letting the difference read as the hair.
 *
 * Do not add an entry to fill the space. An honest empty state is better than
 * a dishonest gallery, and the placeholder is designed to look deliberate.
 */

export interface BeforeAfterPair {
  /** Stable key. */
  id: string;
  /** The client's own starting point. */
  before: { src: string; alt: string };
  /** The finished work. */
  after: { src: string; alt: string };
  /** What was actually done — the service, the piece, the length. */
  service: string;
  /**
   * Anything that would otherwise mislead: different lighting, a change of
   * makeup or clothing, professional styling on one frame only.
   */
  note?: string;
}

/**
 * Real, permissioned client pairs. Add them here and the placeholder state
 * disappears on its own. See the note above before adding anything.
 */
export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "wig-revamp-01",
    /*
     * Both frames are stills from ByChi Strands' own footage —
     * public/services/ventilation-1.mp4, a clip ByChi Strands filmed and
     * published itself, captioned on screen "HOW MY CLIENT SENT HER WIG TO US
     * VS" and ending "You just found the best revamp plug". Same wig, same
     * session, start and end of the same video, so this is a real result and
     * not two unrelated photographs put side by side.
     *
     * The on-screen captions were cropped off (they sat in a band across the
     * top of the first frame and the bottom of the last); nothing else about
     * either frame is altered. ByChi Strands' own watermark is left in place.
     */
    before: {
      src: "/services/revamp-before.jpg",
      alt: "A client's wig as it arrived at the atelier — dry, tangled and lifted away from the cap",
    },
    after: {
      src: "/services/revamp-after.jpg",
      alt: "The same wig after revamping, the curl pattern redefined and the colour evened out",
    },
    service: "Wig revamp",
    note: "Both frames are stills from the same ByChi Strands video, taken at its start and end. The finished shot is lit and angled differently from the arrival shot — it is the same wig on the same stand, filmed as the work was done.",
  },
];

/**
 * The finished-work frame the section falls back to while `beforeAfterPairs`
 * is empty. This is a genuine ByChi Strands install — it is only the *before*
 * half that has no honest source, so only that half is drawn as a placeholder.
 */
export const transformationFallbackAfter = {
  src: "/services/frontal-installation-1.jpg",
  alt: "A finished ByChi Strands frontal install styled into a curled updo",
};
