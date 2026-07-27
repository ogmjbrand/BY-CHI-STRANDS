import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_review_submission_form
 * "ByChi Strands | Share Your Story"
 */

export const metadata: Metadata = {
  title: "Share Your Aura Story",
};

export default function ReviewSubmissionFormPage() {
  return (
    <>
      {/* ── Mobile design (Stitch: digital_flagship_mobile_review_submission_form) ── */}
      <div className="md:hidden scr-mobile-review-submission-form bg-background text-on-surface font-body-md selection:bg-primary-fixed">
        {/* Top Navigation Anchor (As per JSON) */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto bg-surface/80 dark:bg-on-background/80 backdrop-blur-xl border-b border-outline-variant/30">
          <Link className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-background dark:text-surface-container-lowest" href="/">
            ByChi Strands
          </Link>
          {" "}
          <div className="flex gap-6 items-center">
            <span className="material-symbols-outlined text-on-surface-variant" data-icon="shopping_bag">shopping_bag</span>
            {" "}
            <span className="material-symbols-outlined text-on-surface-variant" data-icon="person">person</span>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-margin-mobile py-10 md:py-16">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <span className="font-label-caps text-label-caps text-primary mb-4 block tracking-[0.15em]">Client Chronicles</span>
            {" "}
            <h1 className="font-display-md text-display-md mb-4 text-on-surface tracking-[-0.01em]">Share Your Narrative</h1>
            {" "}
            <p className="font-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
              Your journey is the thread that weaves our legacy. Contribute your experience to the ByChi Strands heritage collection.
            </p>
          </header>
          {" "}
          <form className="space-y-12" id="narrative-form">
            {/* Product Association Card */}
            <section className="animate-fade-in">
              <div className="flex items-center p-6 bg-surface-container-low border border-outline-variant/20 rounded-lg group transition-all duration-500 hover:border-primary/30">
                <div className="w-20 h-24 overflow-hidden rounded-sm flex-shrink-0">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="A high-fashion, minimalist product shot of a luxury silk hairpiece on a clean ivory background. Soft editorial lighting, 8k resolution, capturing the intricate textures and sheen of the premium silk fibers. The mood is sophisticated and exclusive." src="/stitch/img-073.jpg" />
                </div>
                {" "}
                <div className="ml-6">
                  <h3 className="font-display-md text-headline-lg-mobile text-on-surface">The Signature Silk Bob</h3>
                  {" "}
                  <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 tracking-[0.15em]">
                    Acquired October 2024
                  </p>
                </div>
                {" "}
                <div className="ml-auto">
                  <span className="material-symbols-outlined text-outline-variant" data-icon="verified">verified</span>
                </div>
              </div>
            </section>
            {/* Video Upload Section (Silk Verifications) */}
            <section className="space-y-4">
              <div className="flex justify-between items-end mb-4">
                <h2 className="font-label-caps text-label-caps text-on-surface tracking-[0.15em]">Silk Verifications</h2>
                {" "}
                <span className="font-body-sm text-outline italic">Optional Video Testimonial</span>
              </div>
              {" "}
              <div className="relative group cursor-pointer border-2 border-dashed border-outline-variant/40 rounded-xl overflow-hidden aspect-[4/5] md:aspect-video flex flex-col items-center justify-center bg-surface-container-lowest transition-all duration-500 hover:bg-surface-container-high hover:border-primary/40">
                <div className="z-10 text-center px-8">
                  <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="videocam">videocam</span>
                  </div>
                  {" "}
                  <p className="font-display-md text-headline-lg-mobile text-on-surface mb-2">Capture the Movement</p>
                  {" "}
                  <p className="font-body-sm text-on-surface-variant mb-8">Record a live testimonial or select from your library.</p>
                  {" "}
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-on-background text-surface text-label-caps tracking-widest rounded-sm hover:bg-primary transition-colors duration-400" type="button">
                      Record Live
                    </button>
                    {" "}
                    <button className="px-8 py-3 border border-outline-variant text-on-background text-label-caps tracking-widest rounded-sm hover:bg-surface-variant transition-colors duration-400" type="button">
                      Upload Library
                    </button>
                  </div>
                </div>
                {/* Soft glassmorphism overlay for empty state aesthetic */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
              </div>
            </section>
            {/* Star Rating Section */}
            <section className="py-8 border-y border-outline-variant/20 text-center">
              <h2 className="font-label-caps text-label-caps text-on-surface mb-6 tracking-[0.15em]">The Level of Excellence</h2>
              {" "}
              <div className="flex justify-center gap-4" id="star-rating">
                <button className="star-btn" data-value="1" type="button">
                  <span className="material-symbols-outlined text-4xl text-outline-variant transition-all duration-300 hover:scale-110" data-icon="star">
                    star
                  </span>
                </button>
                {" "}
                <button className="star-btn" data-value="2" type="button">
                  <span className="material-symbols-outlined text-4xl text-outline-variant transition-all duration-300 hover:scale-110" data-icon="star">
                    star
                  </span>
                </button>
                {" "}
                <button className="star-btn" data-value="3" type="button">
                  <span className="material-symbols-outlined text-4xl text-outline-variant transition-all duration-300 hover:scale-110" data-icon="star">
                    star
                  </span>
                </button>
                {" "}
                <button className="star-btn" data-value="4" type="button">
                  <span className="material-symbols-outlined text-4xl text-outline-variant transition-all duration-300 hover:scale-110" data-icon="star">
                    star
                  </span>
                </button>
                {" "}
                <button className="star-btn" data-value="5" type="button">
                  <span className="material-symbols-outlined text-4xl text-outline-variant transition-all duration-300 hover:scale-110" data-icon="star">
                    star
                  </span>
                </button>
              </div>
              {" "}
              <p className="mt-4 font-body-sm text-primary uppercase tracking-widest h-5 opacity-0 transition-opacity duration-500" id="rating-label">
                Perfect Essence
              </p>
            </section>
            {/* Written Review Section */}
            <section className="space-y-6">
              <div className="relative">
                <label className="font-label-caps text-label-caps text-primary block mb-4 tracking-[0.15em]">The Story Behind Your Selection</label>
                {" "}
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 font-body-md text-on-surface placeholder:text-outline/40 focus:ring-0 transition-all duration-500 custom-scrollbar resize-none" placeholder="Describe the feeling of the silk against your skin, the confidence it instills, and the moment you knew it was yours..." rows={6}></textarea>
              </div>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-outline block mb-2 tracking-[0.15em]">Subject</label>
                  {" "}
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 font-body-md focus:ring-0" placeholder="e.g., A Timeless Transformation" type="text" />
                </div>
                {" "}
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-outline block mb-2 tracking-[0.15em]">Public Identity</label>
                  {" "}
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 font-body-md focus:ring-0" placeholder="e.g., Victoria R." type="text" />
                </div>
              </div>
            </section>
            {/* Submit Button */}
            <footer className="pt-10 flex flex-col items-center">
              <button className="group relative w-full py-6 bg-on-background text-surface overflow-hidden transition-all duration-700 hover:shadow-2xl" type="submit">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                {" "}
                <span className="relative z-10 font-label-caps text-label-caps tracking-[0.2em]">Submit Narrative</span>
              </button>
              {" "}
              <p className="mt-6 font-body-sm text-on-surface-variant text-center opacity-60">
                By submitting, you agree to our
                {" "}
                <a className="underline hover:text-primary" href="#">Curatorial Terms</a>
                .
              </p>
            </footer>
          </form>
        </main>
        {/* Footer Anchor (As per JSON) */}
        <footer className="mt-24 border-t border-outline-variant/20 bg-surface dark:bg-on-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="font-display-md text-headline-lg text-primary">ByChi Strands</div>
            {" "}
            <div className="flex gap-12">
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/about">
                Heritage
              </Link>
              {" "}
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/privacy">
                Privacy
              </Link>
              {" "}
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/faqs">
                Support
              </Link>
            </div>
            {" "}
            <div className="font-body-sm text-body-sm text-on-surface-variant">© 2024 ByChi Strands. The Art of Luxury Hair.</div>
          </div>
        </footer>
      </div>

      {/* ── Desktop design (Stitch: digital_flagship_review_submission_form) ── */}
      <div className="hidden md:block scr-review-submission-form bg-surface text-on-surface font-body-md antialiased selection:bg-secondary-container selection:text-on-secondary-container">
        {/* TopNavBar */}
        <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
          <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto">
            <div className="font-display-md text-display-md tracking-tighter text-on-surface dark:text-surface-bright">
              ByChi Strands
            </div>
            {" "}
            <div className="hidden md:flex items-center space-x-12">
              <Link className="font-label-caps text-label-caps tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
                Academy
              </Link>
              {" "}
              <Link className="font-label-caps text-label-caps tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
                Atelier
              </Link>
              {" "}
              <Link className="font-label-caps text-label-caps tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
                Boutique
              </Link>
              {" "}
              <Link className="font-label-caps text-label-caps tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy/mentorship">
                Mentorship
              </Link>
            </div>
            {" "}
            <div className="flex items-center space-x-6">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity duration-400" data-icon="shopping_bag">
                shopping_bag
              </span>
              {" "}
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity duration-400" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>
                person
              </span>
            </div>
          </div>
        </nav>
        {/* Main Content Canvas */}
        <main className="pt-[160px] pb-section-padding px-margin-mobile md:px-0">
          <div className="max-w-[1100px] mx-auto">
            {/* Bespoke Header Section */}
            <header className="text-center mb-16 space-y-6">
              <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block">
                Guest Registry
              </span>
              {" "}
              <h1 className="font-display-lg text-display-lg leading-tight tracking-[-0.02em]">Share Your Aura Story</h1>
              {" "}
              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto italic">
                "True elegance is the harmony of movement and light. Tell us how your Silk crown transforms your everyday."
              </p>
            </header>
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Media & Selection */}
              <div className="lg:col-span-5 space-y-12">
                {/* Product Selection */}
                <section className="space-y-4">
                  <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-[0.15em]">Confirmed Acquisition</h3>
                  {" "}
                  <div className="flex items-center p-6 bg-surface-container-low rounded-lg border border-outline-variant/20">
                    <div className="w-20 h-20 overflow-hidden rounded flex-shrink-0">
                      <img className="w-full h-full object-cover" data-alt="A macro studio photograph of a premium, high-shine brunette lace front wig displayed on a minimalist marble stand. The lighting is soft and cinematic, highlighting the individual strands and the natural silk-like movement of the hair. The background is a clean, ivory-toned studio setting with warm gold undertones, echoing luxury fashion house aesthetics." src="/stitch/img-032.jpg" />
                    </div>
                    {" "}
                    <div className="ml-6">
                      <h4 className="font-headline-lg text-body-xl font-semibold mb-1">The Midnight Seraphina</h4>
                      {" "}
                      <p className="text-body-sm text-on-surface-variant">Lustrous HD Lace • 22" Virgin Silk</p>
                    </div>
                  </div>
                </section>
                {/* Rating System */}
                <section className="space-y-6">
                  <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-[0.15em]">The Aura Scale</h3>
                  {" "}
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-3 star-rating">
                      <span className="material-symbols-outlined text-[32px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[32px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[32px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[32px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[32px] text-primary" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    </div>
                    {" "}
                    <p className="text-body-sm italic text-on-surface-variant">Superior Glow & Resilience</p>
                  </div>
                </section>
                {/* Video Upload Module */}
                <section className="space-y-4">
                  <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-[0.15em]">High-Fidelity Captures</h3>
                  {" "}
                  <div className="relative group cursor-pointer h-[320px] rounded-xl overflow-hidden border-2 border-dashed border-outline-variant/50 hover:border-primary transition-colors duration-500 flex flex-col items-center justify-center p-8 text-center bg-surface-container-low/50">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"></div>
                    {" "}
                    <span className="material-symbols-outlined text-[48px] text-primary mb-4" data-icon="videocam">videocam</span>
                    {" "}
                    <h4 className="font-headline-lg text-body-xl font-medium mb-2">Drag Narrative Here</h4>
                    {" "}
                    <p className="text-body-sm text-on-surface-variant max-w-xs">
                      Share the movement of your hair. We recommend 4K captures in natural daylight for our Atelier gallery.
                    </p>
                    {" "}
                    <button className="mt-6 px-8 py-3 border border-primary text-primary font-label-caps text-[10px] tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-300">
                      Select File
                    </button>
                  </div>
                </section>
              </div>
              {/* Right Column: Narrative Form */}
              <div className="lg:col-span-7">
                <div className="glass-panel p-12 rounded-2xl shadow-sm">
                  <form className="space-y-10">
                    {/* Narrative Text */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                        <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Your Silk Experience</label>
                        {" "}
                        <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Editorial Narrative</span>
                      </div>
                      {" "}
                      <textarea className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md placeholder:text-on-surface-variant/40 resize-none" placeholder="Describe the tactile sensation, the way the light catches the silk, and the confidence found in your new silhouette..." rows={10}></textarea>
                    </div>
                    {/* Additional Prompt */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-primary uppercase">The Glow Factor</label>
                        {" "}
                        <input className="w-full bg-transparent border-b border-outline-variant/30 border-t-0 border-l-0 border-r-0 px-0 py-2 focus:ring-0 placeholder:text-on-surface-variant/30" placeholder="e.g. Luminous, Radiant" type="text" />
                      </div>
                      {" "}
                      <div className="space-y-2">
                        <label className="font-label-caps text-[10px] text-primary uppercase">The Occasion</label>
                        {" "}
                        <input className="w-full bg-transparent border-b border-outline-variant/30 border-t-0 border-l-0 border-r-0 px-0 py-2 focus:ring-0 placeholder:text-on-surface-variant/30" placeholder="e.g. Gala, Daily Ritual" type="text" />
                      </div>
                    </div>
                    {/* Privacy & Usage Note */}
                    <div className="p-6 bg-primary-container/10 border-l-2 border-primary rounded-r-lg">
                      <div className="flex items-start">
                        <span className="material-symbols-outlined text-primary text-sm mr-3 mt-0.5" data-icon="verified_user">
                          verified_user
                        </span>
                        {" "}
                        <div>
                          <h5 className="text-label-caps font-bold text-primary mb-1 tracking-[0.15em]">THE ATELIER PROMISE</h5>
                          {" "}
                          <p className="text-body-sm text-on-surface-variant leading-relaxed">
                            By sharing your narrative, you permit ByChi Strands to curate your experience within our 'Client Narratives' gallery. Your story becomes a thread in our collective tapestry of elegance.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                      <button className="w-full sm:w-auto px-12 py-5 bg-on-surface text-white font-label-caps text-label-caps tracking-widest uppercase rounded hover:bg-primary transition-all duration-500" type="submit">
                        Publish to the Atelier
                      </button>
                      {" "}
                      <button className="text-on-surface font-label-caps text-label-caps tracking-widest uppercase text-underline-luxury" type="button">
                        Save as Draft
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="w-full relative mt-section-padding border-t border-outline-variant/20 bg-surface-container-lowest">
          <div className="w-full px-margin-desktop py-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
            <div className="font-display-lg text-[24px] text-on-surface mb-6 md:mb-0">ByChi Strands</div>
            {" "}
            <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-500" href="/about">
                The Silk Ethos
              </Link>
              {" "}
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-500" href="/privacy">
                Privacy
              </Link>
              {" "}
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-500" href="/terms">
                Membership Terms
              </Link>
              {" "}
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-500" href="/contact">
                Contact
              </Link>
            </div>
            {" "}
            <p className="font-body-sm text-[10px] text-on-surface-variant tracking-widest uppercase">© 2024 ByChi Strands ATELIER. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
