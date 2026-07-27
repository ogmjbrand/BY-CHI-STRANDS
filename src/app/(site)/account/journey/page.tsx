import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_post_purchase_concierge
 * "The Journey | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "The Journey",
};

export default function PostPurchaseConciergePage() {
  return (
    <div className="scr-post-purchase-concierge bg-background text-on-background font-body-md overflow-x-hidden">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
        <nav className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto">
          <div className="flex items-center gap-12">
            <a className="font-display-lg text-[32px] text-primary dark:text-primary-fixed-dim tracking-tight italic" href="#">
              ByChi Strands
            </a>
            {" "}
            <div className="hidden md:flex items-center gap-8">
              <a className="font-manrope text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="#">
                Boutique
              </a>
              {" "}
              <a className="font-manrope text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="#">
                Academy
              </a>
              {" "}
              <a className="font-manrope text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1" href="#">
                Concierge
              </a>
              {" "}
              <a className="font-manrope text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="#">
                Heritage
              </a>
            </div>
          </div>
          {" "}
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-primary hover:scale-110 transition-transform">person</button>
            {" "}
            <button className="material-symbols-outlined text-primary hover:scale-110 transition-transform">shopping_bag</button>
          </div>
        </nav>
      </header>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto mb-section-padding">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="font-manrope text-label-caps text-primary mb-4 tracking-[0.15em]">ORDER #CS-992104</p>
              {" "}
              <h1 className="font-display-lg text-display-lg italic tracking-[-0.02em]">The Journey of Your Transformation</h1>
            </div>
            {" "}
            <div className="text-right">
              <p className="font-body-sm text-on-surface-variant">Estimated Arrival</p>
              {" "}
              <p className="font-display-md text-headline-lg text-primary">October 24, 2024</p>
            </div>
          </div>
          {/* Tracking Visual Timeline */}
          <div className="relative py-12">
            {/* Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2"></div>
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-[35%] h-[2px] bg-primary -translate-y-1/2 transition-all duration-1000"></div>
            {" "}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-4 h-4 rounded-full bg-primary mb-6 ring-8 ring-background"></div>
                {" "}
                <span className="font-manrope text-label-caps text-primary opacity-60 tracking-[0.15em]">Atelier Selection</span>
                {" "}
                <p className="font-body-sm mt-1 text-on-surface-variant">Completed</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-primary mb-6 ring-8 ring-background animate-pulse"></div>
                {" "}
                <span className="font-manrope text-label-caps text-primary tracking-[0.15em]">Hand-Tied Craftsmanship</span>
                {" "}
                <p className="font-body-sm mt-1 text-primary italic font-medium">In Progress</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-outline-variant/50 mb-6 ring-8 ring-background"></div>
                {" "}
                <span className="font-manrope text-label-caps text-tertiary tracking-[0.15em]">Quality Verification</span>
                {" "}
                <p className="font-body-sm mt-1 text-on-surface-variant">Upcoming</p>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-outline-variant/50 mb-6 ring-8 ring-background"></div>
                {" "}
                <span className="font-manrope text-label-caps text-tertiary tracking-[0.15em]">White-Glove Dispatch</span>
                {" "}
                <p className="font-body-sm mt-1 text-on-surface-variant">Queueing</p>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-outline-variant/50 mb-6 ring-8 ring-background"></div>
                {" "}
                <span className="font-manrope text-label-caps text-tertiary tracking-[0.15em]">Your Doorstep</span>
                {" "}
                <p className="font-body-sm mt-1 text-on-surface-variant">Final Destination</p>
              </div>
            </div>
          </div>
        </section>
        {/* Asymmetric Craftsmanship & Delivery Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto mb-section-padding grid md:grid-cols-12 gap-gutter items-stretch">
          {/* Craftsmanship Update Card */}
          <div className="md:col-span-7 bg-surface-container-low overflow-hidden group">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 overflow-hidden">
                <img alt="Master Artisan at work" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="/stitch/img-102.jpg" />
              </div>
              {" "}
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h2 className="font-display-md text-headline-lg mb-6">Craftsmanship Update</h2>
                {" "}
                <div className="w-12 h-[1px] bg-primary mb-8"></div>
                {" "}
                <p className="font-body-xl italic text-on-surface-variant mb-6 leading-relaxed">
                  "Your Signature Wig is currently being hand-calibrated for tone and texture. Every strand is meticulously tied to ensure the Aura of Silk remains unparalleled."
                </p>
                {" "}
                <p className="font-manrope text-label-caps text-primary tracking-[0.15em]">— Master Artisan chi</p>
              </div>
            </div>
          </div>
          {/* Delivery Details & Concierge */}
          <div className="md:col-span-5 flex flex-col gap-gutter">
            <div className="bg-surface-container p-10 flex-grow border border-outline-variant/20">
              <h3 className="font-manrope text-label-caps text-primary mb-6 tracking-[0.15em]">Delivery Details</h3>
              {" "}
              <div className="space-y-6">
                <div>
                  <p className="font-body-sm text-on-surface-variant">Shipping Method</p>
                  {" "}
                  <p className="font-headline-lg text-2xl">White-Glove Shipping</p>
                </div>
                {" "}
                <div className="pt-6 border-t border-outline-variant/30">
                  <p className="font-body-sm text-on-surface-variant mb-4">Dedicated Concierge</p>
                  {" "}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                      <span className="material-symbols-outlined">support_agent</span>
                    </div>
                    {" "}
                    <div>
                      <p className="font-body-md font-semibold">Julianne V.</p>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant">Private Courier Liaison</p>
                    </div>
                  </div>
                  {" "}
                  <button className="mt-6 w-full py-4 border border-primary text-primary font-manrope text-label-caps hover:bg-primary hover:text-white transition-all duration-300 tracking-[0.15em]">
                    MESSAGE CONCIERGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* While You Wait: Video Preview */}
        <section className="bg-surface-dim py-section-padding">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="font-display-lg text-display-md mb-8 tracking-[-0.01em]">While You Wait</h2>
                {" "}
                <p className="font-body-xl text-on-surface-variant mb-10">
                  Prepare for your transformation. Our Aftercare Masterclass ensures you have the knowledge to maintain the luster and longevity of your investment from day one.
                </p>
                {" "}
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 font-body-md">
                    <span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                    {" "}
                    Unboxing Rituals
                  </li>
                  {" "}
                  <li className="flex items-center gap-3 font-body-md">
                    <span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                    {" "}
                    Silk-Hydration Techniques
                  </li>
                  {" "}
                  <li className="flex items-center gap-3 font-body-md">
                    <span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                    {" "}
                    Professional Styling Guides
                  </li>
                </ul>
                {" "}
                <a className="inline-block px-10 py-5 bg-black text-white font-manrope text-label-caps tracking-widest hover:bg-primary transition-all duration-500" href="#">
                  START MASTERCLASS
                </a>
              </div>
              {" "}
              <div className="relative group cursor-pointer overflow-hidden aspect-video shadow-2xl">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                {" "}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-0"></div>
                {" "}
                <img className="w-full h-full object-cover" data-alt="A cinematic, high-fashion wide shot of a luxury hair care product being applied in a sun-drenched, minimalist marble bathroom. The lighting is ethereal and soft, emphasizing textures of silk and water. Rich gold accents on product bottles reflect the morning light, creating a serene and premium atmosphere." src="/stitch/img-090.jpg" />
              </div>
            </div>
          </div>
        </section>
        {/* Investment Summary (Accordion Style) */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-section-padding">
          <div className="border-t border-outline-variant/30">
            <button className="w-full py-12 flex items-center justify-between group">
              <div className="text-left">
                <h2 className="font-display-md text-headline-lg group-hover:italic transition-all">Investment Summary</h2>
                {" "}
                <p className="font-body-sm text-on-surface-variant">View order components and billing</p>
              </div>
              {" "}
              <span className="material-symbols-outlined text-4xl transition-transform duration-500" id="investment-icon">
                expand_more
              </span>
            </button>
            {" "}
            <div className="max-h-0 overflow-hidden transition-all duration-700 ease-in-out opacity-0" id="investment-details">
              <div className="grid md:grid-cols-3 gap-gutter pb-12">
                <div className="md:col-span-2 space-y-8">
                  <div className="flex gap-8 items-center bg-surface-container-low p-6">
                    <div className="w-32 h-40 bg-white">
                      <img className="w-full h-full object-cover" data-alt="Close up studio photography of a premium hand-tied lace front wig in a rich espresso brown tone. The hair has a natural silk luster and soft waves. Professional studio lighting on a neutral ivory background highlights the intricate craftsmanship of the hairline." src="/stitch/img-043.jpg" />
                    </div>
                    {" "}
                    <div className="flex-grow">
                      <h4 className="font-headline-lg text-xl mb-1">Aura Silk Signature - 22"</h4>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant">Tone: Smoked Sable | Density: 180%</p>
                      {" "}
                      <p className="font-manrope font-semibold mt-4">$4,250.00</p>
                    </div>
                  </div>
                  {" "}
                  <div className="flex gap-8 items-center bg-surface-container-low p-6">
                    <div className="w-32 h-40 bg-white">
                      <img className="w-full h-full object-cover" data-alt="Minimalist product shot of a collection of luxury hair care elixirs in frosted glass bottles with gold caps. Set on a reflective white surface with soft shadows. The aesthetic is clean, clinical, and high-end beauty boutique style." src="/stitch/img-089.jpg" />
                    </div>
                    {" "}
                    <div className="flex-grow">
                      <h4 className="font-headline-lg text-xl mb-1">Ritual Care Kit</h4>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant">Silk Wash, Hydration Mist, Tangle Guard</p>
                      {" "}
                      <p className="font-manrope font-semibold mt-4">$285.00</p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="bg-surface-container p-10 h-fit">
                  <h4 className="font-manrope text-label-caps text-primary mb-6 tracking-[0.15em]">Financials</h4>
                  {" "}
                  <div className="space-y-4 font-body-md">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      {" "}
                      <span>$4,535.00</span>
                    </div>
                    {" "}
                    <div className="flex justify-between">
                      <span>Concierge Shipping</span>
                      {" "}
                      <span className="text-primary">Complimentary</span>
                    </div>
                    {" "}
                    <div className="pt-4 border-t border-outline-variant flex justify-between font-bold text-xl">
                      <span>Total</span>
                      {" "}
                      <span>$4,535.00</span>
                    </div>
                    {" "}
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-8">Tax included in final valuation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-dim border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
          <div className="md:col-span-1">
            <a className="font-display-md text-display-md text-primary dark:text-primary-fixed mb-6 block tracking-[-0.01em]" href="#">
              ByChi Strands
            </a>
            {" "}
            <p className="font-manrope text-body-sm opacity-80 leading-relaxed max-w-xs">
              Curating excellence in hair craftsmanship since 2014. A testament to beauty, heritage, and the soul of silk.
            </p>
          </div>
          {" "}
          <div className="md:col-span-1 space-y-4">
            <h5 className="font-manrope text-label-caps text-secondary mb-6 tracking-[0.15em]">Concierge</h5>
            {" "}
            <a className="block font-manrope text-body-sm text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
              Contact Us
            </a>
            {" "}
            <a className="block font-manrope text-body-sm text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
              Appointments
            </a>
            {" "}
            <a className="block font-manrope text-body-sm text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
              White-Glove Support
            </a>
          </div>
          {" "}
          <div className="md:col-span-1 space-y-4">
            <h5 className="font-manrope text-label-caps text-secondary mb-6 tracking-[0.15em]">Legal</h5>
            {" "}
            <a className="block font-manrope text-body-sm text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
              Sustainability
            </a>
            {" "}
            <a className="block font-manrope text-body-sm text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
              Privacy Policy
            </a>
            {" "}
            <a className="block font-manrope text-body-sm text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
              Terms of Service
            </a>
          </div>
          {" "}
          <div className="md:col-span-1 space-y-4">
            <h5 className="font-manrope text-label-caps text-secondary mb-6 tracking-[0.15em]">Join The Circle</h5>
            {" "}
            <p className="font-manrope text-body-sm mb-4">Receive invitations to private collections.</p>
            {" "}
            <form className="relative">
              <input className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary focus:ring-0 outline-none font-manrope text-sm transition-all" placeholder="Your Email" type="email" />
              {" "}
              <button className="absolute right-0 top-1/2 -translate-y-1/2" type="submit">
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
        {" "}
        <div className="px-margin-desktop py-8 border-t border-outline-variant/10 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-manrope text-body-sm text-on-surface-variant">
            © 2024 ByChi Strands. All Rights Reserved. Heritage & Sustainability at our core.
          </p>
          {" "}
          <div className="flex gap-6">
            <a className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all" href="#">
              language
            </a>
            {" "}
            <a className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all" href="#">
              share
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
