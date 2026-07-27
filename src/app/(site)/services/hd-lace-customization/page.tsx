import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_signature_services_2
 * "HD Lace Customization | Aura of Silk"
 */

export const metadata: Metadata = {
  title: "HD Lace Customization",
};

export default function SignatureServices2Page() {
  return (
    <div className="scr-signature-services-2 bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-container-max mx-auto">
          <Link className="font-headline-lg text-headline-lg text-primary tracking-tighter hover:opacity-70 transition-opacity duration-500" href="/">
            Aura of Silk
          </Link>
          {" "}
          <div className="hidden md:flex items-center gap-10">
            <Link className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 tracking-[0.15em]" href="/collections">
              Collections
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 tracking-[0.15em]" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 tracking-[0.15em]" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 tracking-[0.15em]" href="/about">
              Heritage
            </Link>
          </div>
          {" "}
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-primary scale-105 transition-transform duration-500 ease-out">
              shopping_bag
            </button>
            {" "}
            <button className="material-symbols-outlined text-primary scale-105 transition-transform duration-500 ease-out">
              person
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="w-full h-full hero-zoom" data-alt="An extreme close-up of ultra-thin, high-definition lace merging seamlessly with a model's scalp. The lighting is soft and cinematic, highlighting the intricate texture of the hair follicles and the invisible bond. The overall aesthetic is high-fashion and ethereal, using a warm ivory and gold color palette to convey luxury and sophistication." style={{ backgroundImage: "url('/stitch/img-055.jpg')" }}></div>
            {" "}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
          </div>
          {" "}
          <div className="relative z-10 text-center max-w-4xl px-margin-mobile fade-in-up">
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-[0.3em]">
              Couture Customization
            </span>
            {" "}
            <h1 className="font-display-lg text-display-lg text-white mb-8 tracking-[-0.02em]">The Art of the Invisible</h1>
            {" "}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white mb-12">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">schedule</span>
                {" "}
                <p className="font-body-md text-body-md uppercase tracking-widest">120 Minutes</p>
              </div>
              {" "}
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">payments</span>
                {" "}
                <p className="font-body-md text-body-md uppercase tracking-widest">Starting at $350</p>
              </div>
            </div>
            {" "}
            <a className="inline-block bg-white text-on-surface px-12 py-5 font-label-caps text-label-caps uppercase hover:bg-primary-container hover:text-white transition-all duration-400 border border-transparent tracking-[0.15em]" href="#booking">
              Secure Your Transformation
            </a>
          </div>
          {" "}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </section>
        {/* The Transformation */}
        <section className="py-section-padding px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 space-y-8">
              <h2 className="font-display-md text-display-md text-primary tracking-[-0.01em]">
                Technical
                {" "}
                <br />
                Mastery
              </h2>
              {" "}
              <div className="editorial-line w-32"></div>
              {" "}
              <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
                HD Lace Customization is not merely a service; it is a molecular-level integration of heritage craftsmanship and modern scalp-tinting science.
              </p>
              {" "}
              <p className="font-body-md text-body-md text-on-surface-variant/80">
                Our process begins with hand-tied HD Swiss lace, calibrated for the highest degree of transparency. Through our proprietary scalp-match tinting, we neutralize the grid-pattern to create the illusion of hair growing directly from the root.
              </p>
              {" "}
              <ul className="space-y-4 pt-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  {" "}
                  <span className="font-label-caps text-label-caps tracking-[0.15em]">Precision Hairline Architecture</span>
                </li>
                {" "}
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  {" "}
                  <span className="font-label-caps text-label-caps tracking-[0.15em]">Spectral Tone Calibration</span>
                </li>
                {" "}
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  {" "}
                  <span className="font-label-caps text-label-caps tracking-[0.15em]">Seamless Bond Integrity</span>
                </li>
              </ul>
            </div>
            {" "}
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A high-end editorial photograph of a master artisan's hands meticulously tinting a delicate piece of Swiss lace. The setting is a clean, bright studio with gold accents and professional lighting. The artisan is using a fine brush to apply pigment, focusing on achieving a natural skin-tone transition. The image is crisp, with a shallow depth of field to emphasize the detail of the lace." src="/stitch/img-031.jpg" />
              </div>
              {" "}
              <div className="absolute -bottom-10 -left-10 w-64 h-80 hidden lg:block bg-surface-container-high border border-outline-variant/30 luxury-shadow overflow-hidden">
                <img className="w-full h-full object-cover" data-alt="A portrait of a woman with a flawlessly customized HD lace hairline. The lighting is soft and golden, mimicking a sunset. The hair looks completely natural, and the transition from the forehead to the hair is invisible. The overall look is one of quiet luxury and absolute confidence." src="/stitch/img-023.jpg" />
              </div>
            </div>
          </div>
        </section>
        {/* Artisan Selection */}
        <section className="bg-surface-container-low py-section-padding">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-20">
              <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] block mb-4">THE CURATED PANEL</span>
              {" "}
              <h2 className="font-display-md text-display-md tracking-[-0.01em]">Master Artisans</h2>
            </div>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Artisan 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-surface-container mb-6 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional portrait of a senior hair artisan in a luxury salon environment. He is dressed in refined, minimalist attire. The background is a blurred high-end atelier with warm lighting. He has a focused and welcoming expression, representing expertise and prestige in the hair industry." src="/stitch/img-005.jpg" />
                  {" "}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {" "}
                <h3 className="font-headline-lg text-headline-lg mb-2">Julian V.</h3>
                {" "}
                <p className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em]">Lead Artisan | London & Paris Trained</p>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Specializing in micro-knotting techniques and custom color gradients for seamless HD integration.
                </p>
              </div>
              {/* Artisan 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-surface-container mb-6 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A portrait of a female master hair technician in a sophisticated, well-lit studio. She exudes elegance and professional authority. She is holding a specialized hair tool. The lighting is soft and flattering, highlighting her features and the luxury environment she works in." src="/stitch/img-059.jpg" />
                  {" "}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {" "}
                <h3 className="font-headline-lg text-headline-lg mb-2">Elena Rossi</h3>
                {" "}
                <p className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em]">Senior Consultant | Milan Heritage</p>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Expert in spectral tone matching and scalp-replica artistry for high-profile visual productions.
                </p>
              </div>
              {/* Artisan 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-surface-container mb-6 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A focused portrait of a diverse hair artisan working in a high-tech luxury salon. The background includes modern, minimalist design elements and sleek professional equipment. The artisan's expression is one of meticulous care and artistic passion, fitting the Aura of Silk brand's focus on excellence." src="/stitch/img-122.jpg" />
                  {" "}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {" "}
                <h3 className="font-headline-lg text-headline-lg mb-2">Marcus Chen</h3>
                {" "}
                <p className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em]">Artistic Director | Tokyo Global</p>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pioneer of the 'Invisible Bond' method, focusing on scalp health and long-term lace preservation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Concierge Experience */}
        <section className="py-section-padding">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col lg:flex-row gap-gutter items-stretch">
              <div className="lg:w-1/2 bg-surface-container-lowest p-16 luxury-shadow border border-outline-variant/20 flex flex-col justify-center">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-6">THE SUITE EXPERIENCE</span>
                {" "}
                <h2 className="font-display-md text-display-md mb-8 tracking-[-0.01em]">
                  Personalized
                  {" "}
                  <br />
                  Serenity
                </h2>
                {" "}
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <span className="material-symbols-outlined text-primary text-3xl">meeting_room</span>
                    {" "}
                    <div>
                      <h4 className="font-label-caps text-label-caps mb-2 tracking-[0.15em]">Private Sanctuary</h4>
                      {" "}
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Each customization takes place in a climate-controlled private suite designed for complete discretion and comfort.
                      </p>
                    </div>
                  </div>
                  {" "}
                  <div className="flex gap-6">
                    <span className="material-symbols-outlined text-primary text-3xl">local_cafe</span>
                    {" "}
                    <div>
                      <h4 className="font-label-caps text-label-caps mb-2 tracking-[0.15em]">Seasonal Curation</h4>
                      {" "}
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Enjoy a curated menu of organic refreshments, rare teas, and light artisan snacks during your transformation.
                      </p>
                    </div>
                  </div>
                  {" "}
                  <div className="flex gap-6">
                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                    {" "}
                    <div>
                      <h4 className="font-label-caps text-label-caps mb-2 tracking-[0.15em]">Visonary Consult</h4>
                      {" "}
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        A comprehensive analysis of scalp health, hair movement, and lifestyle to ensure your look is truly yours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="lg:w-1/2 relative min-h-[600px]">
                <img className="absolute inset-0 w-full h-full object-cover" data-alt="A minimalist, high-end private salon suite featuring ivory-colored leather seating, gold-framed mirrors, and soft ambient lighting. Large windows show a glimpse of a serene, manicured garden. The room is spacious and uncluttered, emphasizing a sense of calm, exclusivity, and ultra-premium service. The vibe is that of a quiet, luxury spa." src="/stitch/img-107.jpg" />
              </div>
            </div>
          </div>
        </section>
        {/* Seamless Booking */}
        <section className="py-section-padding bg-on-surface text-white text-center overflow-hidden relative" id="booking">
          <div className="relative z-10 max-w-2xl mx-auto px-margin-mobile">
            <h2 className="font-display-md text-display-md mb-8 tracking-[-0.01em]">Begin Your Legacy</h2>
            {" "}
            <p className="font-body-xl text-body-xl mb-12 opacity-80 leading-relaxed">
              Transformation is a dialogue. Select your preferred artisan and date to enter the Aura of Silk ecosystem.
            </p>
            {" "}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary-container text-white px-12 py-5 font-label-caps text-label-caps uppercase hover:bg-primary transition-colors duration-300 tracking-[0.15em]">
                Secure Transformation
              </button>
              {" "}
              <button className="border border-white/30 text-white px-12 py-5 font-label-caps text-label-caps uppercase hover:bg-white/10 transition-colors duration-300 tracking-[0.15em]">
                Inquiry Concierge
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-surface dark:bg-surface border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-start px-margin-desktop py-section-padding gap-gutter max-w-container-max mx-auto">
          <div className="space-y-8 max-w-sm">
            <h2 className="font-headline-lg text-headline-lg text-primary">Aura of Silk</h2>
            {" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Celebrating the intersection of artisan heritage and modern hair science. Based in the heart of the luxury district, serving the global vanguard.
            </p>
            {" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant/60">© 2024 Aura of Silk. Defined by Vietnamese Heritage.</p>
          </div>
          {" "}
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="font-label-caps text-label-caps text-primary tracking-[0.15em]">The Studio</h4>
              {" "}
              <ul className="space-y-4">
                <li>
                  <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/services">
                    The Atelier
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/academy/resources">
                    Masterclasses
                  </Link>
                </li>
                {" "}
                <li>
                  <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="#">
                    Artisan Care
                  </a>
                </li>
              </ul>
            </div>
            {" "}
            <div className="space-y-6">
              <h4 className="font-label-caps text-label-caps text-primary tracking-[0.15em]">Legal</h4>
              {" "}
              <ul className="space-y-4">
                <li>
                  <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/terms">
                    Terms
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/privacy">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
