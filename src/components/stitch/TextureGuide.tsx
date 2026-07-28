/**
 * Helps a shopper match a texture name to what it actually looks like before
 * they filter the catalogue by it. Both photos are real ByChiStrands stock —
 * the chart isn't tied to one SKU, so it sits above the browser rather than
 * inside a product card.
 */
export function TextureGuide() {
  return (
    <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
      <div className="aspect-[4/3] overflow-hidden bg-surface-container-low">
        <img
          src="/guides/texture-deep-curl-frontal.jpg"
          alt="A deep curl lace frontal laid flat, showing the curl pattern up close"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary mb-3">
          Know Your Texture
        </p>
        <h2 className="font-display-md text-2xl md:text-3xl text-on-surface mb-4">
          Texture Guide
        </h2>
        <p className="font-body-md text-body-sm text-on-surface-variant mb-6 max-w-md">
          Closures and frontals come in a range of curl patterns. Use this as a reference, then filter the catalogue below by the texture you're after.
        </p>
        <div className="aspect-[4/3] overflow-hidden bg-surface-container-low">
          <img
            src="/guides/texture-guide-chart.jpg"
            alt="Comparison chart of closure textures: straight, curly, deep, body, loose and water wave"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
