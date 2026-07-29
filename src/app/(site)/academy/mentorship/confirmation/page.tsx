import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_mentorship_confirmation
 * "Mentorship Confirmation | ByChi Strands Academy"
 */

export const metadata: Metadata = {
  title: "Mentorship Confirmation",
};

export default function MentorshipConfirmationPage() {
  return (
    <div className="scr-mentorship-confirmation bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar Shell */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0px_20px_50px_rgba(0,0,0,0.04)]">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="font-display-md text-display-md tracking-widest text-primary uppercase">ByChi Strands</div>
          {" "}
          <div className="hidden md:flex items-center space-x-12">
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary/50 font-medium" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/account">
              Orders
            </Link>
          </div>
          {" "}
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-on-surface-variant hover:opacity-70 transition-opacity">
              shopping_bag
            </button>
            {" "}
            <button className="material-symbols-outlined text-on-surface-variant hover:opacity-70 transition-opacity">
              person
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block mb-6">
              Confirmed: Inner Circle Access
            </span>
            {" "}
            <h1 className="font-display-md text-display-md text-on-surface mb-8 leading-tight tracking-[-0.01em]">
              Your Journey to Mastery Begins, Julian.
            </h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-12 max-w-lg">
              Welcome to the ByChi Strands Academy. You have successfully secured a private mentorship session designed to elevate your craft to the level of high-fashion excellence.
            </p>
            {" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#111111] text-white font-label-caps text-label-caps px-10 py-5 rounded-[4px] hover:bg-[#C8A75B] transition-all duration-400 ease-in-out flex items-center gap-3 tracking-[0.15em]">
                <span className="material-symbols-outlined">calendar_today</span>
                {" "}
                ADD TO CALENDAR
              </button>
              {" "}
              <button className="border border-primary-container text-primary font-label-caps text-label-caps px-10 py-5 rounded-[4px] hover:bg-primary-container/10 transition-all duration-400 ease-in-out tracking-[0.15em]">
                KNOWLEDGE VAULT
              </button>
            </div>
          </div>
          {" "}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="A high-fashion, editorial style portrait of a luxury brand mentor in a minimalist ivory studio. The lighting is soft and cinematic, highlighting the elegant textures of a silk scarf and a sophisticated, modern professional atmosphere. The color palette is dominated by warm ivory, champagne gold, and deep blacks, reflecting the ByChi Strands design system." src="/stitch/img-064.jpg" />
            </div>
            {" "}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 border border-outline-variant/30 shadow-xl max-w-xs hidden lg:block">
              <p className="font-headline-lg text-headline-lg italic text-primary mb-2">"True luxury is found in the meticulous details of the craft."</p>
              {" "}
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.15em]">— CHI, FOUNDER</p>
            </div>
          </div>
        </section>
        {/* Session Details Bento */}
        <section className="bg-surface-container-low py-section-padding">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-unit">
              {/* Detail 1 */}
              <div className="bg-white p-12 flex flex-col justify-between border border-outline-variant/20 hover:border-primary-container transition-colors">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">schedule</span>
                  {" "}
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-[0.15em]">
                    DATE & TIME
                  </h3>
                  {" "}
                  <p className="font-headline-lg text-headline-lg text-on-surface">October 24th, 2024</p>
                  {" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">10:00 AM — 11:30 AM (EST)</p>
                </div>
              </div>
              {/* Detail 2 */}
              <div className="bg-white p-12 flex flex-col justify-between border border-outline-variant/20 hover:border-primary-container transition-colors">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">diamond</span>
                  {" "}
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-[0.15em]">
                    FOCUS AREA
                  </h3>
                  {" "}
                  <p className="font-headline-lg text-headline-lg text-on-surface">Luxury Brand Positioning</p>
                  {" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">Strategic alignment for elite markets.</p>
                </div>
              </div>
              {/* Detail 3 */}
              <div className="bg-white p-12 flex flex-col justify-between border border-outline-variant/20 hover:border-primary-container transition-colors">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">videocam</span>
                  {" "}
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-[0.15em]">
                    LOCATION
                  </h3>
                  {" "}
                  <p className="font-headline-lg text-headline-lg text-on-surface">Private Atelier Link</p>
                  {" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">Access granted 10m prior.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What to Prepare */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
          <div className="text-center mb-16">
            <h2 className="font-display-md text-display-md text-on-surface tracking-[-0.01em]">The Ritual of Preparation</h2>
            {" "}
            <p className="font-body-md text-body-md text-on-surface-variant">Ensure you are positioned for maximum transformation.</p>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Tip 1 */}
            <div className="group">
              <div className="aspect-video mb-8 overflow-hidden bg-surface-container relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500"></div>
                {" "}
                <img className="w-full h-full object-cover" data-alt="A minimalist workspace layout with a high-end journal, a luxury fountain pen, and a glass of sparkling water on a marble surface. The lighting is bright and clean, emphasizing a professional and ready-to-learn atmosphere in line with the high-fashion brand identity." src="/stitch/img-019.jpg" />
              </div>
              {" "}
              <h4 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest">01. THE CURATED INQUIRY</h4>
              {" "}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Arrive with three specific challenges you are currently facing in your brand's growth. Precision in your questions leads to precision in our solutions.
              </p>
            </div>
            {/* Tip 2 */}
            <div className="group">
              <div className="aspect-video mb-8 overflow-hidden bg-surface-container relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500"></div>
                {" "}
                <img className="w-full h-full object-cover" data-alt="Close-up of a high-end designer laptop and elegant desk accessories in a brightly lit, high-fashion office space. The aesthetic is extremely minimalist and luxurious, with a focus on clean lines and a champagne gold and ivory color scheme." src="/stitch/img-113.jpg" />
              </div>
              {" "}
              <h4 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest">02. TECHNICAL SERENITY</h4>
              {" "}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Test your connection and audio five minutes before our start. We value your time and aim for a seamless, uninterrupted flow of knowledge.
              </p>
            </div>
            {/* Tip 3 */}
            <div className="group">
              <div className="aspect-video mb-8 overflow-hidden bg-surface-container relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500"></div>
                {" "}
                <img className="w-full h-full object-cover" data-alt="Abstract imagery of soft silk fabrics in cream and ivory tones rippling in gentle light. The mood is calm, expensive, and intellectual, evoking a sense of high-level mentorship and refined luxury aesthetics." src="/stitch/img-009.jpg" />
              </div>
              {" "}
              <h4 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest">03. OPEN AUDACITY</h4>
              {" "}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Release preconceived notions of 'standard' business. We are here to craft the exceptional. Come with an open mind ready for radical refinement.
              </p>
            </div>
          </div>
        </section>
        {/* Personal Signature Section */}
        <section className="max-w-2xl mx-auto px-margin-mobile py-section-padding text-center border-t border-outline-variant/30">
          <p className="font-body-xl text-body-xl text-on-surface mb-8 italic">
            "Julian, I am personally reviewing your portfolio ahead of our session. I see the potential for true excellence. Let us refine the vision together."
          </p>
          {" "}
          <div className="flex flex-col items-center">
            <div className="w-24 h-px bg-primary-container mb-6"></div>
            {" "}
            <p className="font-display-md text-display-md text-primary tracking-[-0.01em]" style={{ fontFamily: "\"Pf1\", serif", fontStyle: "italic" }}>
              Chi
            </p>
            {" "}
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.4em] mt-2">
              Founder & Mentor
            </p>
          </div>
        </section>
      </main>
      {/* Footer Shell */}
      <footer className="bg-surface-container-highest w-full py-16 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-md text-display-md text-primary mb-8 md:mb-0 tracking-[-0.01em]">AURA</div>
          {" "}
          <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/privacy">
              Privacy
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/terms">
              Terms
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/faqs">
              Support
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/about">
              Heritage
            </Link>
          </div>
          {" "}
          <p className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60">
            © 2024 ByChi Strands. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
      {/* Micro-interactions Script */}
    </div>
  );
}
