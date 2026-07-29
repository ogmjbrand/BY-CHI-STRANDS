import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_aftercare_portal
 * "Aftercare Portal | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "Aftercare Portal",
};

export default function AftercarePortalPage() {
  return (
    <div className="scr-aftercare-portal bg-background font-body-md">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <Link className="font-display-md text-[24px] md:text-display-md tracking-tight text-on-surface dark:text-surface-bright md:tracking-[-0.01em]" href="/">
            ByChi Strands
          </Link>
          {" "}
          <div className="hidden md:flex gap-8 items-center">
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1" href="/aftercare">
              Aftercare
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              The Maison
            </Link>
          </div>
          {" "}
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface-variant hover:opacity-70 transition-opacity duration-400">
              shopping_bag
            </button>
            {" "}
            <button className="material-symbols-outlined text-on-surface-variant hover:opacity-70 transition-opacity duration-400">
              person
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-32">
        {/* Hero: The Art of Preservation */}
        <section className="relative h-[819px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center" data-alt="A cinematic, ultra-high-definition photograph of luxurious ivory silk fabric cascading like a waterfall in a minimalist, sun-drenched architectural space. The lighting is soft and ethereal, capturing the delicate sheen and micro-textures of the silk. The color palette consists of cream, champagne gold, and soft shadows, embodying an editorial, high-fashion aesthetic."></div>
            {" "}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          </div>
          {" "}
          <div className="relative z-10 max-w-2xl" data-aos="fade-up">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-4 block">
              CLIENT EXCLUSIVE
            </span>
            {" "}
            <h1 className="font-display-lg text-4xl md:text-display-lg text-on-background mb-6 leading-tight md:leading-[1.1] md:tracking-[-0.02em]">
              The Art of
              {" "}
              <br />
              <i className="font-serif italic font-light">Preservation</i>
            </h1>
            {" "}
            <p className="font-body-xl text-on-surface-variant mb-8 max-w-lg">
              Welcome to your digital sanctuary. Here, we nurture the longevity of your silk transformation with bespoke guidance and ritualized care.
            </p>
            {" "}
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-none font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all duration-400 shadow-xl shadow-primary/10">
                Start Ritual
              </button>
            </div>
          </div>
        </section>
        {/* Maintenance Tracker */}
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-end">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-display-md text-display-md mb-12 tracking-[-0.01em]">
                Your Silk
                {" "}
                <i className="italic font-light">Status</i>
              </h2>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Stat Card 1 */}
                <div className="p-10 bg-white border border-outline-variant/30 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[80px]">water_drop</span>
                  </div>
                  {" "}
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant/60 block mb-2 tracking-[0.15em]">
                    Days Since Last Silk Bath
                  </span>
                  {" "}
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-md text-6xl text-primary">04</span>
                    {" "}
                    <span className="font-body-md text-on-surface-variant">/ 07 days recommended</span>
                  </div>
                  {" "}
                  <div className="mt-8 w-full bg-surface-container h-1">
                    <div className="bg-primary h-full transition-all duration-1000 ease-out" style={{ width: "57%" }}></div>
                  </div>
                  {" "}
                  <p className="mt-4 font-body-sm text-on-surface-variant/80 italic">Optimal hydration levels detected. Next wash scheduled for Friday.</p>
                </div>
                {/* Stat Card 2 */}
                <div className="p-10 bg-white border border-outline-variant/30 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[80px]">auto_fix_high</span>
                  </div>
                  {" "}
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant/60 block mb-2 tracking-[0.15em]">
                    Next Professional Refresh
                  </span>
                  {" "}
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-md text-6xl text-on-surface">18</span>
                    {" "}
                    <span className="font-body-md text-on-surface-variant">days remaining</span>
                  </div>
                  {" "}
                  <p className="mt-8 font-label-caps text-label-caps text-primary uppercase tracking-[0.15em]">
                    Scheduled: Oct 24th at Atelier NYC
                  </p>
                  {" "}
                  <button className="mt-4 text-on-surface font-label-caps text-label-caps uppercase border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-all tracking-[0.15em]">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
            {/* Artisan Quick Action */}
            <div className="bg-on-background text-white p-10 h-fit">
              <span className="material-symbols-outlined text-primary mb-6 text-4xl">verified_user</span>
              {" "}
              <h3 className="font-display-md text-2xl mb-4">Certified Aura</h3>
              {" "}
              <p className="font-body-sm text-surface-variant/70 mb-8 leading-relaxed">
                Your current Silk Crown is maintained under the 'Luminous' tier. You have priority access to all seasonal refreshes.
              </p>
              {" "}
              <Link className="inline-flex items-center gap-3 font-label-caps text-label-caps text-primary hover:gap-5 transition-all tracking-[0.15em]" href="/academy/dashboard">
                VIEW CERTIFICATE
                {" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
        {/* Curated Rituals */}
        <section className="bg-surface-container-low py-section-padding">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em] mb-4 block">
                  THE ACADEMY
                </span>
                {" "}
                <h2 className="font-display-md text-display-md leading-tight tracking-[-0.01em]">
                  Ritualistic
                  {" "}
                  <br />
                  <i>Masterclasses</i>
                </h2>
              </div>
              {" "}
              <Link className="font-label-caps text-label-caps uppercase border-b border-on-surface pb-1 mb-2 hover:text-primary hover:border-primary transition-all tracking-[0.15em]" href="/aftercare">
                Explore All Rituals
              </Link>
            </div>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Ritual Card 1 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="A close-up, editorial style photo of a woman with long, lustrous hair wearing a high-end silk turban in a soft champagne color. The background is a luxurious, dimly lit bedroom with soft morning light. The mood is serene and educational, focusing on the texture of the silk and the grace of the movement."></div>
                  {" "}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  {" "}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white text-6xl font-light">play_circle</span>
                  </div>
                </div>
                {" "}
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 block">
                  DUSK RITUAL
                </span>
                {" "}
                <h4 className="font-display-md text-2xl mb-2 group-hover:italic transition-all">The Nightly Wrap</h4>
                {" "}
                <p className="font-body-sm text-on-surface-variant">
                  Learn the geometric folding technique to preserve luster while you sleep.
                </p>
              </div>
              {/* Ritual Card 2 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="A top-down aesthetic photo of a white marble vanity with luxury hair care bottles made of frosted glass and gold caps. A stream of clear, viscous oil is being poured elegantly into a small crystal bowl. Soft, cinematic lighting highlights the transparency and luxury of the products. Modern minimalist style."></div>
                  {" "}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  {" "}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white text-6xl font-light">play_circle</span>
                  </div>
                </div>
                {" "}
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 block">
                  WEEKLY CARE
                </span>
                {" "}
                <h4 className="font-display-md text-2xl mb-2 group-hover:italic transition-all">Hydration Infusion</h4>
                {" "}
                <p className="font-body-sm text-on-surface-variant">
                  Master the art of the 20-minute steam infusion for deep silk revitalization.
                </p>
              </div>
              {/* Ritual Card 3 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="An artistic, high-fashion shot of a pair of hands gently brushing a long mane of silky hair with a handcrafted wooden brush. The setting is a bright, airy atelier with high ceilings and white linen curtains. The light is diffused and warm, emphasizing the health and shine of the hair strands."></div>
                  {" "}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  {" "}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white text-6xl font-light">play_circle</span>
                  </div>
                </div>
                {" "}
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 block">
                  DAILY DISCIPLINE
                </span>
                {" "}
                <h4 className="font-display-md text-2xl mb-2 group-hover:italic transition-all">Atmospheric Brushing</h4>
                {" "}
                <p className="font-body-sm text-on-surface-variant">
                  The 50-stroke technique for distributing natural oils without tension.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Concierge Products (Bento Style) */}
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <h2 className="font-display-md text-display-md mb-4 tracking-[-0.01em]">
            Concierge
            {" "}
            <i className="italic font-light">Curation</i>
          </h2>
          {" "}
          <p className="font-body-xl text-on-surface-variant mb-12 max-w-xl">Prescribed essentials based on your Silk transformation profile.</p>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
            {/* Main Product */}
            <div className="md:col-span-2 md:row-span-2 bg-white border border-outline-variant/30 p-12 flex flex-col justify-between relative group">
              <div className="relative z-10">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4 block">
                  PRIMARY PRESCRIPTION
                </span>
                {" "}
                <h3 className="font-display-md text-4xl mb-6">Silk Essence No. 4</h3>
                {" "}
                <p className="font-body-md text-on-surface-variant max-w-sm">
                  The foundation of your home ritual. A molecular mist that reinforces silk proteins daily.
                </p>
                {" "}
                <button className="mt-8 bg-on-background text-white px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-all duration-500">
                  Order Refill
                </button>
              </div>
              {" "}
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 pointer-events-none overflow-hidden">
                <div className="w-full h-full bg-cover bg-bottom opacity-80 group-hover:scale-110 transition-transform duration-1000" data-alt="A high-end product photography shot of a sleek, minimalist frosted glass bottle with a heavy gold cap. The bottle is placed on a slab of light travertine stone. Behind it, a piece of sheer silk fabric catches the light. The overall mood is expensive, quiet luxury, and clinical yet beautiful."></div>
              </div>
            </div>
            {/* Secondary Product 1 */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-low border border-outline-variant/20 p-8 flex gap-8 items-center group overflow-hidden">
              <div className="w-1/3 aspect-square bg-cover bg-center shrink-0 border border-outline-variant/10" data-alt="A small, luxury ceramic jar with a minimalist label. It sits on a white reflective surface against a soft beige background. The lighting is focused and clean, highlighting the smooth texture of the jar and its gold leaf detailing. High-end beauty brand aesthetic."></div>
              {" "}
              <div>
                <h4 className="font-display-md text-2xl mb-2">Ceramide Balm</h4>
                {" "}
                <p className="font-body-sm text-on-surface-variant mb-4">Targeted repair for delicate silk ends. Apply bi-weekly.</p>
                {" "}
                <Link className="font-label-caps text-label-caps text-primary uppercase border-b border-primary/20 pb-0.5 tracking-[0.15em]" href="/shop">
                  Shop — $120
                </Link>
              </div>
            </div>
            {/* Secondary Product 2 */}
            <div className="md:col-span-1 md:row-span-1 bg-white border border-outline-variant/30 p-8 flex flex-col justify-between">
              <div>
                <h4 className="font-display-md text-xl mb-2">Micro-Fiber Turban</h4>
                {" "}
                <p className="font-body-sm text-on-surface-variant">Aura-branded absorbent wrap.</p>
              </div>
              {" "}
              <a className="font-label-caps text-label-caps text-on-surface uppercase border-b border-on-surface pb-0.5 w-fit mt-4 tracking-[0.15em]" href="#">
                Add to Cart
              </a>
            </div>
            {/* Secondary Product 3 */}
            <div className="md:col-span-1 md:row-span-1 bg-secondary-container/20 border border-outline-variant/30 p-8 flex flex-col justify-between">
              <div>
                <h4 className="font-display-md text-xl mb-2">Detangling Elixir</h4>
                {" "}
                <p className="font-body-sm text-on-surface-variant">Travel-sized maintenance.</p>
              </div>
              {" "}
              <a className="font-label-caps text-label-caps text-on-surface uppercase border-b border-on-surface pb-0.5 w-fit mt-4 tracking-[0.15em]" href="#">
                Add to Cart
              </a>
            </div>
          </div>
        </section>
        {/* Expert Access */}
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-on-background text-white overflow-hidden relative">
          <div className="absolute -right-20 top-0 h-full w-1/2 opacity-20 hidden lg:block">
            <div className="w-full h-full bg-cover bg-center mask-image-linear" data-alt="A black and white, high-contrast portrait of a professional hair artisan in a modern, luxury atelier. The artisan is focused, with subtle motion blur on their hands as they work. The environment is sophisticated with architectural lines and soft shadows. Professional, expert, and serene mood."></div>
          </div>
          {" "}
          <div className="relative z-10 max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="py-12">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-4 block">
                DIRECT CHANNEL
              </span>
              {" "}
              <h2 className="font-display-md text-4xl md:text-5xl mb-8 leading-tight md:leading-[1]">
                Consult Your
                {" "}
                <br />
                <i className="italic">Master Artisan</i>
              </h2>
              {" "}
              <p className="font-body-xl text-surface-variant/80 mb-12 max-w-md">
                Have questions regarding your silk's evolution? Your dedicated artisan is available for direct messaging and personalized adjustments.
              </p>
              {" "}
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <div className="w-full h-full bg-cover bg-center" data-alt="A professional headshot of a sophisticated hair stylist with a kind expression. The lighting is soft and studio-quality. The person is wearing a clean, high-fashion black outfit. Minimalist background."></div>
                  </div>
                  {" "}
                  <div>
                    <h5 className="font-label-caps text-label-caps uppercase text-white tracking-[0.15em]">Julian Saint-Clair</h5>
                    {" "}
                    <p className="font-body-sm text-primary">Master Artisan — NYC Atelier</p>
                  </div>
                </div>
                {" "}
                <button className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">chat_bubble</span>
                  {" "}
                  MESSAGE JULIAN
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full mt-section-padding border-t border-outline-variant/20 bg-background dark:bg-on-background">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display-lg text-[32px] md:text-display-lg text-primary md:tracking-[-0.02em]">
              ByChi Strands
            </span>
            {" "}
            <p className="font-body-sm text-on-surface-variant text-center md:text-left">Elevating hair care to a meditative art form.</p>
          </div>
          {" "}
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/privacy">
              Privacy Policy
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/terms">
              Terms of Service
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              Sustainability
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/contact">
              Contact Atelier
            </Link>
          </div>
          {" "}
          <p className="font-body-sm text-on-surface-variant opacity-50 uppercase tracking-widest">© 2024 ByChi Strands. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
      {/* Interactive Scripts */}
    </div>
  );
}
