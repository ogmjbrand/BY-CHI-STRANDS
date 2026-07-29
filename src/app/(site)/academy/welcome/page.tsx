import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_student_welcome_kit
 * "Academy Portal | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "Academy Welcome Kit",
};

export default function StudentWelcomeKitPage() {
  return (
    <div className="scr-student-welcome-kit bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl shadow-[0px_20px_50px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="font-display-md text-display-md tracking-widest text-primary dark:text-primary-fixed uppercase">
            ByChi Strands
          </div>
          {" "}
          <div className="hidden md:flex items-center space-x-12">
            <Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="text-primary dark:text-primary-fixed border-b border-primary/50 font-medium font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/account">
              Orders
            </Link>
          </div>
          {" "}
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity">shopping_bag</button>
            {" "}
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity">person</button>
          </div>
        </div>
      </nav>
      <main className="pt-24">
        {/* Section 1: Welcome Hero */}
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" data-alt="A high-fashion, editorial cinematic shot of flowing silk fabrics and professional hair extensions in a minimalist, sun-drenched atelier. The lighting is soft and golden, reflecting off smooth surfaces. The aesthetic is ultra-luxurious, dominated by ivory, champagne gold, and deep shadows, emphasizing the texture of high-quality raw hair." src="/stitch/img-028.jpg" />
            {" "}
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          {" "}
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid md:grid-cols-2 gap-gutter items-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-4 block">
                ByChi Strands Academy
              </span>
              {" "}
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8 leading-tight tracking-[-0.02em]">
                Welcome to the
                {" "}
                <br />
                Inner Circle,
                {" "}
                <span className="italic font-normal">Alexandra</span>
              </h1>
              {" "}
              <div className="flex space-x-6">
                <button className="bg-on-surface text-surface px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-all duration-400">
                  Masterclass Portal
                </button>
                {" "}
                <button className="border border-primary-container text-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed transition-all duration-400">
                  View Roadmap
                </button>
              </div>
            </div>
            {" "}
            <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="aspect-video relative group overflow-hidden bg-surface-container shadow-2xl">
                <img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" data-alt="A refined video thumbnail showing a professional hair specialist in a minimalist studio. The specialist is wearing a tailored black outfit, standing against a clean ivory wall with soft architectural shadows. A single high-end hair mannequin is visible. The composition is centered and editorial, with a translucent play button overlay in champagne gold." src="/stitch/img-118.jpg" />
                {" "}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-surface flex items-center justify-center bg-surface/20 backdrop-blur-sm group-hover:bg-primary-container group-hover:border-transparent transition-all duration-500">
                    <span className="material-symbols-outlined text-surface text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: The Starter Kit */}
        <section className="py-section-padding max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display-md text-display-md mb-4 uppercase tracking-[-0.01em]">The Starter Kit</h2>
              {" "}
              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl">
                Your physical and digital arsenal for global hair dominance. Shipped and ready for deployment.
              </p>
            </div>
            {" "}
            <div className="h-px bg-outline-variant flex-grow mx-12 mb-4 hidden lg:block"></div>
            {" "}
            <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">03 ITEMS UNLOCKED</span>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-surface border border-outline-variant/30 p-2 overflow-hidden hover:border-primary-container transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A curated flat lay of the 'Raw Hair Sample Kit'. Multiple bundles of premium dark hair extensions are neatly arranged on an ivory silk cloth. A small gold card with 'ByChi Strands' is visible. The lighting is high-contrast, creating deep, elegant shadows and highlighting the luster of the hair. Luxury editorial photography style." src="/stitch/img-036.jpg" />
              </div>
              {" "}
              <div className="p-4">
                <h3 className="font-headline-lg text-headline-lg mb-2">Raw Hair Sample Kit</h3>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 uppercase tracking-wider">
                  Physical Asset • Arriving via DHL
                </p>
                {" "}
                <div className="flex justify-between items-center">
                  <span className="text-primary font-label-caps text-label-caps tracking-[0.15em]">TRACK SHIPMENT</span>
                  {" "}
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-surface border border-outline-variant/30 p-2 overflow-hidden hover:border-primary-container transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A sleek black leather-bound binder titled 'VENDOR BLACKBOOK' in embossed gold foil. It rests on a dark marble surface with a single spotlight illuminating the gold texture. The atmosphere is secretive and exclusive. The background is a dark, moody studio with minimalist vibes." src="/stitch/img-096.jpg" />
              </div>
              {" "}
              <div className="p-4">
                <h3 className="font-headline-lg text-headline-lg mb-2">Vendor Blackbook</h3>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 uppercase tracking-wider">
                  Digital Access • Verified Sources
                </p>
                {" "}
                <div className="flex justify-between items-center">
                  <span className="text-primary font-label-caps text-label-caps tracking-[0.15em]">ACCESS DATABASE</span>
                  {" "}
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    lock_open
                  </span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-surface border border-outline-variant/30 p-2 overflow-hidden hover:border-primary-container transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A modern laptop showing a sophisticated marketing dashboard with gold-toned analytics graphs. Next to the laptop is a tall glass of sparkling water and a single silk scrunchie. The setting is a bright, high-end home office with clean lines and white furniture. Editorial lifestyle photography." src="/stitch/img-091.jpg" />
              </div>
              {" "}
              <div className="p-4">
                <h3 className="font-headline-lg text-headline-lg mb-2">Marketing Suite</h3>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 uppercase tracking-wider">
                  Cloud Resources • Ready to scale
                </p>
                {" "}
                <div className="flex justify-between items-center">
                  <span className="text-primary font-label-caps text-label-caps tracking-[0.15em]">OPEN DRIVE</span>
                  {" "}
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    cloud_download
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Curriculum Roadmap */}
        <section className="bg-surface-container py-section-padding">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-20">
              <h2 className="font-display-md text-display-md uppercase tracking-tight mb-4">The Pillars of Mastery</h2>
              {" "}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
                Your journey from enthusiast to elite hair authority follows a precise, architectural path.
              </p>
            </div>
            {" "}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/50 -translate-x-1/2"></div>
              {/* Milestone 1 */}
              <div className="relative grid md:grid-cols-2 gap-12 mb-24 items-center">
                <div className="md:text-right">
                  <h4 className="font-label-caps text-label-caps text-primary-container mb-2 tracking-[0.15em]">
                    PHASE 01
                  </h4>
                  {" "}
                  <h3 className="font-headline-lg text-headline-lg mb-4">Global Sourcing</h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Mastering the geography of raw hair and the logistics of international import.
                  </p>
                </div>
                {" "}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-auto w-16 h-16 bg-on-surface rounded-full flex items-center justify-center border-4 border-surface -translate-x-1/2 z-10 shadow-lg">
                  <span className="material-symbols-outlined text-surface" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                {" "}
                <div className="pl-24 md:pl-0">
                  <div className="bg-surface p-6 border border-outline-variant/20 inline-block">
                    <p className="font-label-caps text-label-caps text-primary mb-1 tracking-[0.15em]">COMPLETED</p>
                    {" "}
                    <p className="font-body-sm text-body-sm">Ethics of Sourcing Module</p>
                  </div>
                </div>
              </div>
              {/* Milestone 2 */}
              <div className="relative grid md:grid-cols-2 gap-12 mb-24 items-center">
                <div className="hidden md:block">
                  <div className="bg-surface p-6 border border-outline-variant/20 inline-block float-right">
                    <p className="font-label-caps text-label-caps text-primary-container mb-1 tracking-[0.15em]">
                      CURRENTLY STUDYING
                    </p>
                    {" "}
                    <p className="font-body-sm text-body-sm">The 12-Point Grading System</p>
                  </div>
                </div>
                {" "}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-surface -translate-x-1/2 z-10 shadow-lg animate-pulse">
                  <span className="material-symbols-outlined text-surface">play_circle</span>
                </div>
                {" "}
                <div className="pl-24 md:pl-0 md:text-left">
                  <h4 className="font-label-caps text-label-caps text-primary-container mb-2 tracking-[0.15em]">
                    PHASE 02
                  </h4>
                  {" "}
                  <h3 className="font-headline-lg text-headline-lg mb-4">Elite Grading</h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                    Learning to identify purity, cuticle alignment, and longevity like a pro.
                  </p>
                  {" "}
                  <button className="bg-on-surface text-surface px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-all">
                    Resume Lesson
                  </button>
                </div>
              </div>
              {/* Milestone 3 */}
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="md:text-right">
                  <h4 className="font-label-caps text-label-caps text-outline mb-2 tracking-[0.15em]">PHASE 03</h4>
                  {" "}
                  <h3 className="font-headline-lg text-headline-lg mb-4 text-outline">Digital Authority</h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-outline opacity-60">High-ticket marketing strategies and luxury brand positioning.</p>
                </div>
                {" "}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-auto w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center border-4 border-surface -translate-x-1/2 z-10 shadow-sm">
                  <span className="material-symbols-outlined text-outline">lock</span>
                </div>
                {" "}
                <div className="pl-24 md:pl-0">
                  <span className="font-label-caps text-label-caps text-outline/50 italic uppercase tracking-[0.15em]">
                    Locked Content
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Mentorship & Exclusive Downloads */}
        <section className="py-section-padding max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-gutter">
          {/* Mentorship Access */}
          <div className="bg-inverse-surface text-inverse-on-surface p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display-md text-display-md mb-6 uppercase leading-tight tracking-[-0.01em]">
                1-on-1 Strategy
                {" "}
                <br />
                <span className="text-primary-fixed italic font-normal">Mentorship</span>
              </h2>
              {" "}
              <p className="font-body-md text-body-md mb-12 text-surface-container-high/70 max-w-md">
                As an Elite Member, you have exclusive access to direct strategy calls with the founders. Audit your sourcing or scale your marketing.
              </p>
              {" "}
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4 border-b border-surface-variant/20 pb-4">
                  <span className="material-symbols-outlined text-primary-fixed">calendar_today</span>
                  {" "}
                  <div className="flex-grow">
                    <p className="font-label-caps text-label-caps uppercase tracking-[0.15em]">Next Available Slot</p>
                    {" "}
                    <p className="font-body-sm text-body-sm">Oct 24th, 2024 • 10:00 AM EST</p>
                  </div>
                  {" "}
                  <button className="bg-primary-fixed text-on-primary-fixed px-6 py-2 font-label-caps text-label-caps uppercase tracking-[0.15em]">
                    Book
                  </button>
                </div>
                {" "}
                <div className="flex items-center space-x-4 border-b border-surface-variant/20 pb-4">
                  <span className="material-symbols-outlined text-primary-fixed">group</span>
                  {" "}
                  <div className="flex-grow">
                    <p className="font-label-caps text-label-caps uppercase tracking-[0.15em]">Private Community</p>
                    {" "}
                    <p className="font-body-sm text-body-sm">4,200 Active Elite Members</p>
                  </div>
                  {" "}
                  <button className="border border-primary-fixed text-primary-fixed px-6 py-2 font-label-caps text-label-caps uppercase tracking-[0.15em]">
                    Enter
                  </button>
                </div>
              </div>
            </div>
            {/* Abstract Design Elements */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
          </div>
          {/* Exclusive Downloads */}
          <div className="bg-surface border border-outline-variant/30 p-12">
            <h2 className="font-display-md text-display-md mb-8 uppercase tracking-[-0.01em]">Knowledge Vault</h2>
            {" "}
            <div className="space-y-4">
              <a className="group flex items-center justify-between p-6 bg-surface-container-low hover:bg-primary-container/10 transition-colors" href="#">
                <div className="flex items-center space-x-6">
                  <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
                  {" "}
                  <div>
                    <h4 className="font-headline-lg text-[20px]">The Silk Standard</h4>
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-tighter">Ultimate Grading PDF • 42MB</p>
                  </div>
                </div>
                {" "}
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  download
                </span>
              </a>
              {" "}
              <a className="group flex items-center justify-between p-6 bg-surface-container-low hover:bg-primary-container/10 transition-colors" href="#">
                <div className="flex items-center space-x-6">
                  <span className="material-symbols-outlined text-primary text-3xl">contract</span>
                  {" "}
                  <div>
                    <h4 className="font-headline-lg text-[20px]">Wholesale Agreements</h4>
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-tighter">Legal Templates • 12MB</p>
                  </div>
                </div>
                {" "}
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  download
                </span>
              </a>
              {" "}
              <a className="group flex items-center justify-between p-6 bg-surface-container-low hover:bg-primary-container/10 transition-colors" href="#">
                <div className="flex items-center space-x-6">
                  <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                  {" "}
                  <div>
                    <h4 className="font-headline-lg text-[20px]">Pricing Psychology</h4>
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-tighter">Revenue Guide • 18MB</p>
                  </div>
                </div>
                {" "}
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  download
                </span>
              </a>
            </div>
            {" "}
            <div className="mt-12 text-center">
              <button className="text-primary font-label-caps text-label-caps uppercase border-b border-primary/30 hover:border-primary transition-all pb-1 tracking-[0.15em]">
                Browse Full Library
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-container-highest w-full py-16 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="font-display-md text-display-md text-primary mb-2 tracking-[-0.01em]">ByChi Strands</div>
            {" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant opacity-60">Architects of Hair Excellence</p>
          </div>
          {" "}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity" href="/privacy">
              Privacy
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity" href="/terms">
              Terms
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity" href="/faqs">
              Support
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity" href="/about">
              Heritage
            </Link>
          </div>
          {" "}
          <div className="mt-8 md:mt-0 font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant">
            © 2024 ByChi Strands. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
