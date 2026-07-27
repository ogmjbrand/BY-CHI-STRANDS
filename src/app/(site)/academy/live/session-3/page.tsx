import Link from "next/link";
import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy_live_session_3
 * "Live Session | AURA OF SILK Academy"
 */

export const metadata: Metadata = {
  title: "Live Session",
};

export default function AcademyLiveSession3Page() {
  return (
    <div className="scr-academy-live-session-3 bg-background text-on-background font-body-md min-h-screen overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0px_20px_50px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="font-display-md text-display-md tracking-widest text-primary uppercase">AURA OF SILK</div>
          {" "}
          <div className="hidden md:flex items-center space-x-12">
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="text-primary border-b border-primary/50 font-medium font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/account">
              Orders
            </Link>
          </div>
          {" "}
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity duration-400" data-icon="shopping_bag">
              shopping_bag
            </button>
            {" "}
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity duration-400" data-icon="person">
              person
            </button>
          </div>
        </div>
      </nav>
      {/* SideNavBar (Suppressed for focused 'Live' mode, replaced by task-specific interaction) */}
      <main className="pt-[112px] min-h-screen flex flex-col md:flex-row max-w-container-max mx-auto px-margin-desktop pb-12 gap-8">
        {/* Main Content Area: Video Broadcast */}
        <section className="flex-1 flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex justify-between items-end">
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase mb-2 block">
                Live Masterclass
              </span>
              {" "}
              <h1 className="font-headline-lg text-headline-lg text-on-background">Advanced Hair Grading: The Silk Standard</h1>
            </div>
            {" "}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-error-container text-on-error-container px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-error live-pulse"></span>
                {" "}
                <span className="font-label-caps text-[10px] tracking-widest font-bold">LIVE</span>
              </div>
              {" "}
              <div className="flex items-center gap-2 text-on-surface-variant opacity-70">
                <span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                {" "}
                <span className="font-label-caps text-[11px]">2,481 ELITE MEMBERS</span>
              </div>
            </div>
          </div>
          {/* Video Player */}
          <div className="relative aspect-video w-full bg-surface-container overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A high-end, professionally lit cinematography shot of a luxury hair specialist meticulously examining long, lustrous strands of raw hair. The lighting is soft and cinematic, casting elegant shadows in a minimalist white-walled studio. The focus is sharp on the texture of the hair, reflecting a champagne gold sheen. The aesthetic is extremely premium, clean, and high-fashion, mirroring the Aura of Silk visual identity." style={{ backgroundImage: "url('/stitch/img-001.jpg')" }}></div>
            {/* Playback Overlay (Visual only) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/40 transition-all">
                <span className="material-symbols-outlined text-white text-4xl" data-icon="play_arrow" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </button>
            </div>
            {/* Speaker Identity */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-primary-container overflow-hidden">
                <img className="w-full h-full object-cover" data-alt="A professional portrait of an elegant female CEO with a minimalist fashion style, looking confident and poised. High-key lighting, soft ivory background, and luxury hair brand aesthetic." src="/stitch/img-044.jpg" />
              </div>
              {" "}
              <div className="text-white drop-shadow-md">
                <p className="font-label-caps text-[10px] uppercase tracking-widest opacity-80">Mentor</p>
                {" "}
                <p className="font-display-md text-xl italic">Chiara V. Strands</p>
              </div>
            </div>
          </div>
          {/* Quick Access / Knowledge Vault */}
          <div className="flex items-center justify-between p-8 bg-surface-container-low border border-outline-variant/30">
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] text-outline tracking-widest uppercase mb-1">Current Focus</span>
                {" "}
                <span className="font-body-md text-on-surface">The 4 Pillars of Mastery</span>
              </div>
              {" "}
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] text-outline tracking-widest uppercase mb-1">Session Duration</span>
                {" "}
                <span className="font-body-md text-on-surface">01:45:22 / 03:00:00</span>
              </div>
            </div>
            {" "}
            <button className="bg-on-background text-white px-8 py-3 rounded-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-all duration-400 flex items-center gap-3">
              <span className="material-symbols-outlined text-sm" data-icon="cloud_download">cloud_download</span>
              {" "}
              Knowledge Vault
            </button>
          </div>
        </section>
        {/* Side Panel: Curriculum & Chat */}
        <aside className="w-full md:w-[400px] flex flex-col gap-6">
          {/* Live Curriculum Card */}
          <div className="bg-surface border border-outline-variant/30 flex flex-col">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
              <h3 className="font-label-caps text-label-caps text-on-background uppercase tracking-widest">Live Curriculum</h3>
              {" "}
              <span className="text-primary text-[11px] font-medium uppercase">Module 04</span>
            </div>
            {" "}
            <div className="p-6 space-y-4">
              <div className="relative aspect-[4/3] bg-surface-container-highest overflow-hidden mb-4 border border-outline-variant/10">
                <img className="w-full h-full object-cover" data-alt="An editorial slide for a luxury masterclass titled 'The Four Pillars of Mastery'. The design features elegant typography on a cream background, with a sophisticated diagram showing hair follicles and keratin structures. Minimalist, artistic, and educational, using the brand's Ivory and Gold color palette." src="/stitch/img-099.jpg" />
              </div>
              {" "}
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-3 bg-surface-container-low border-l-2 border-primary">
                  <span className="font-display-md text-primary italic text-xl">01</span>
                  {" "}
                  <div>
                    <h4 className="font-body-md font-semibold text-on-surface leading-tight">Structural Integrity</h4>
                    {" "}
                    <p className="font-body-sm text-on-surface-variant opacity-70">Analyzing the cortex and cuticle health.</p>
                  </div>
                </li>
                {" "}
                <li className="flex items-start gap-4 p-3 opacity-50">
                  <span className="font-display-md text-outline italic text-xl">02</span>
                  {" "}
                  <div>
                    <h4 className="font-body-md font-semibold text-on-surface leading-tight">Grading Metrics</h4>
                    {" "}
                    <p className="font-body-sm text-on-surface-variant opacity-70">Weight-to-length ratios and elasticity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Inner Circle Chat */}
          <div className="flex-1 min-h-[400px] bg-surface border border-outline-variant/30 flex flex-col shadow-[0px_10px_30px_rgba(0,0,0,0.02)]">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="font-label-caps text-label-caps text-on-background uppercase tracking-widest">Inner Circle</h3>
                {" "}
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              </div>
              {" "}
              <button className="material-symbols-outlined text-outline-variant hover:text-primary transition-colors" data-icon="settings">
                settings
              </button>
            </div>
            {" "}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[450px]" id="chat-container">
              {/* Chat Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex-shrink-0">
                  <img className="w-full h-full rounded-full object-cover" data-alt="A portrait of a luxury student avatar, professional profile photo of a person in high-fashion studio lighting." src="/stitch/img-007.jpg" />
                </div>
                {" "}
                <div>
                  <p className="font-label-caps text-[10px] text-primary uppercase mb-1">Julian Thorne</p>
                  {" "}
                  <p className="bg-surface-container-low p-3 text-body-sm text-on-surface-variant rounded-tr-xl rounded-br-xl rounded-bl-xl">
                    How does humidity affect the grading of raw Indonesian strands specifically?
                  </p>
                </div>
              </div>
              {/* Chat Message (Mentor) */}
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xs" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
                {" "}
                <div className="text-right">
                  <p className="font-label-caps text-[10px] text-primary uppercase mb-1">Mentor Chiara</p>
                  {" "}
                  <p className="bg-primary/5 p-3 text-body-sm text-on-surface rounded-tl-xl rounded-bl-xl rounded-br-xl border border-primary/10 italic">
                    Great question Julian. We cover specific gravity shifts in the next pillar.
                  </p>
                </div>
              </div>
              {/* Chat Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex-shrink-0">
                  <img className="w-full h-full rounded-full object-cover" data-alt="A portrait of a luxury student avatar, professional profile photo of a person in high-fashion studio lighting." src="/stitch/img-068.jpg" />
                </div>
                {" "}
                <div>
                  <p className="font-label-caps text-[10px] text-primary uppercase mb-1">Elena Rossi</p>
                  {" "}
                  <p className="bg-surface-container-low p-3 text-body-sm text-on-surface-variant rounded-tr-xl rounded-br-xl rounded-bl-xl">
                    This is revolutionary. The clarity of the grading metrics is superb.
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="p-6 border-t border-outline-variant/20">
              <div className="relative">
                <input className="w-full bg-surface-container-low border-none focus:ring-0 py-4 px-6 font-label-caps text-label-caps tracking-widest text-on-surface placeholder:text-outline-variant" placeholder="ASK THE MENTOR..." type="text" />
                {" "}
                <button className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary hover:scale-110 transition-transform" data-icon="send">
                  send
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
      {/* Footer */}
      <footer className="w-full py-16 bg-surface-container border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display-md text-display-md text-primary opacity-50 tracking-[-0.01em]">AURA OF SILK</div>
          {" "}
          <div className="flex gap-12">
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/about">
              Heritage
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/faqs">
              Support
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/terms">
              Terms
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/privacy">
              Privacy
            </Link>
          </div>
          {" "}
          <p className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-40">
            © 2024 AURA OF SILK. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
