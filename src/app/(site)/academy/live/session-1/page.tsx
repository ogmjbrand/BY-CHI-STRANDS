import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy_live_session_1
 * "Aura Academy | Live Masterclass"
 */

export const metadata: Metadata = {
  title: "Live Masterclass",
};

export default function AcademyLiveSession1Page() {
  return (
    <div className="scr-academy-live-session-1 bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      {/* TopNavBar (Shared Component) */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl shadow-[0px_20px_50px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="font-display-md text-display-md tracking-widest text-primary uppercase">AURA OF SILK</div>
          {" "}
          <nav className="hidden md:flex items-center space-y-0 space-x-12">
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-widest" href="#">
              Atelier
            </a>
            {" "}
            <a className="text-primary border-b border-primary/50 font-medium font-label-caps text-label-caps uppercase tracking-widest" href="#">
              Academy
            </a>
            {" "}
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-widest" href="#">
              Orders
            </a>
          </nav>
          {" "}
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">
              shopping_bag
            </button>
            {" "}
            <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="A sophisticated professional portrait of a woman in an elite hair academy environment, wearing a minimalist black silk blazer, softly lit with golden hour studio lighting to highlight the smooth texture of the background and her polished appearance. Elegant and exclusive aesthetic consistent with Aura of Silk branding." src="/stitch/img-034.jpg" />
            </div>
          </div>
        </div>
      </header>
      <main className="pt-32 pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        {/* Live Header Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary live-dot"></span>
                {" "}
                <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-primary">Live Now</span>
              </div>
              {" "}
              <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant/60">
                Elite Access: 142 Members Viewing
              </span>
            </div>
            {" "}
            <h1 className="font-display-md text-display-md text-on-surface tracking-[-0.01em]">Advanced Strands: The 12-Point Grading System</h1>
            {" "}
            <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl">
              Master the art of silk-press hair assessment with Founder Chi. Today's focus: Tensile strength and cuticle alignment in high-fidelity hair grading.
            </p>
          </div>
          {" "}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-on-background text-surface rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-all duration-400">
              Invite Peer
            </button>
          </div>
        </div>
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* CINEMATIC VIDEO INTERFACE (8/12 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-gutter">
            <div className="relative aspect-video rounded-xl overflow-hidden group luxury-shadow bg-on-background">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" data-alt="A cinematic close-up shot of a professional hair stylist's hands gently inspecting a luxurious bundle of premium, high-gloss silk hair against a minimalist ivory studio background. Soft, directional key lighting emphasizes the shimmering strands and the precise technique of hair grading. Professional academy masterclass aesthetic with high contrast and golden highlights." src="/stitch/img-076.jpg" />
              {/* Video Overlay Controls */}
              <div className="absolute inset-0 video-gradient-overlay flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-surface">
                    <button className="material-symbols-outlined text-[32px] hover:text-primary-container transition-colors">
                      play_arrow
                    </button>
                    {" "}
                    <button className="material-symbols-outlined text-[24px] hover:text-primary-container transition-colors">
                      volume_up
                    </button>
                    {" "}
                    <span className="font-label-caps text-xs">42:18 / 01:30:00</span>
                  </div>
                  {" "}
                  <div className="flex items-center gap-6 text-surface">
                    <button className="material-symbols-outlined text-[24px] hover:text-primary-container transition-colors">
                      closed_caption
                    </button>
                    {" "}
                    <button className="material-symbols-outlined text-[24px] hover:text-primary-container transition-colors">
                      settings
                    </button>
                    {" "}
                    <button className="material-symbols-outlined text-[24px] hover:text-primary-container transition-colors">
                      fullscreen
                    </button>
                  </div>
                </div>
                {" "}
                <div className="w-full h-1 bg-surface/20 mt-6 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-primary-container w-[45%]"></div>
                </div>
              </div>
              {/* Watermark */}
              <div className="absolute top-8 right-8 opacity-40">
                <div className="font-display-md text-body-md text-surface uppercase tracking-[0.4em]">ByChi Academy</div>
              </div>
            </div>
            {/* STUDENT WORKSPACE (Collapsible / Note Taking) */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/30 luxury-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">edit_note</span>
                  {" "}
                  <h3 className="font-headline-lg text-[20px] text-on-surface">Session Notes</h3>
                </div>
                {" "}
                <button className="text-primary font-label-caps text-[10px] uppercase tracking-widest border-b border-primary/30">
                  Auto-Sync Enabled
                </button>
              </div>
              {" "}
              <div className="relative">
                <textarea className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface placeholder:text-outline-variant p-0 min-h-[120px] resize-none" placeholder="Type your notes here... They will be automatically timestamped to 42:18."></textarea>
                {" "}
                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="px-3 py-1 bg-surface-container rounded-lg flex items-center gap-2 border border-outline-variant/20 hover:border-primary/50 transition-colors cursor-pointer group">
                    <span className="text-[10px] text-primary font-bold">41:05</span>
                    {" "}
                    <span className="text-[12px] text-on-surface-variant group-hover:text-primary transition-colors">
                      Cuticle Assessment
                    </span>
                  </div>
                  {" "}
                  <div className="px-3 py-1 bg-surface-container rounded-lg flex items-center gap-2 border border-outline-variant/20 hover:border-primary/50 transition-colors cursor-pointer group">
                    <span className="text-[10px] text-primary font-bold">38:12</span>
                    {" "}
                    <span className="text-[12px] text-on-surface-variant group-hover:text-primary transition-colors">
                      Moisture Levels
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* INTERACTIVE SIDEBAR (4/12 cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-gutter h-full">
            {/* Live Concierge Chat */}
            <div className="flex-1 flex flex-col bg-surface-container-lowest rounded-xl luxury-shadow border border-outline-variant/20 overflow-hidden min-h-[500px]">
              <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
                <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-primary">Concierge Chat</h3>
                {" "}
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                  {" "}
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
              {" "}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar" id="chat-container">
                {/* Message 1 */}
                <div className="flex flex-col gap-1">
                  <span className="font-label-caps text-[10px] uppercase tracking-tighter text-outline">System</span>
                  {" "}
                  <p className="text-body-sm text-on-surface-variant italic">
                    Welcome to the Academy Lounge, Elena. Expert facilitators are on standby.
                  </p>
                </div>
                {/* Message 2 */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-on-secondary-container">MJ</span>
                  </div>
                  {" "}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-caps text-[11px] font-bold">Marcus J.</span>
                      {" "}
                      <span className="text-[9px] text-outline">14:40</span>
                    </div>
                    {" "}
                    <p className="text-body-sm bg-surface-container p-3 rounded-lg rounded-tl-none">
                      Could we revisit the distinction between Grade 11A and 12A tensile strength?
                    </p>
                  </div>
                </div>
                {/* Message 3 (Instructor) */}
                <div className="flex gap-3 justify-end">
                  <div className="flex flex-col gap-1 items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-outline">14:42</span>
                      {" "}
                      <span className="font-label-caps text-[11px] font-bold text-primary">Concierge Chi</span>
                      {" "}
                      <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        verified
                      </span>
                    </div>
                    {" "}
                    <p className="text-body-sm bg-primary-container/20 text-on-primary-container p-3 rounded-lg rounded-tr-none border border-primary/10">
                      Absolutely, Marcus. The main differentiator is the 'Snap-Back' elasticity. I'll demonstrate this live in 2 minutes.
                    </p>
                  </div>
                </div>
              </div>
              {" "}
              <div className="p-6 bg-surface-container-low border-t border-outline-variant/10">
                <div className="relative">
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-0 rounded-lg py-3 px-4 pr-12 text-body-sm" placeholder="Inquire elegantly..." type="text" />
                  {" "}
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary hover:scale-110 transition-transform">
                    send
                  </button>
                </div>
              </div>
            </div>
            {/* Session Resources */}
            <div className="bg-surface rounded-xl p-6 border border-outline-variant/30">
              <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface mb-4">
                Elite Resources
              </h3>
              {" "}
              <div className="space-y-3">
                <a className="group flex items-center justify-between p-3 bg-surface-container-low rounded-lg hover:bg-primary-container/10 transition-all border border-transparent hover:border-primary/20" href="#">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">description</span>
                    {" "}
                    <span className="text-body-sm font-medium">12-Point Grading Guide.pdf</span>
                  </div>
                  {" "}
                  <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm">download</span>
                </a>
                {" "}
                <a className="group flex items-center justify-between p-3 bg-surface-container-low rounded-lg hover:bg-primary-container/10 transition-all border border-transparent hover:border-primary/20" href="#">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    {" "}
                    <span className="text-body-sm font-medium">Texture Analysis Chart.xlsx</span>
                  </div>
                  {" "}
                  <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm">download</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
      {/* Footer (Shared Component) */}
      <footer className="w-full py-16 bg-surface-container dark:bg-surface-container-highest border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display-md text-display-md text-primary tracking-[-0.01em]">AURA</div>
          {" "}
          <div className="flex gap-8">
            <a className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="#">
              Privacy
            </a>
            {" "}
            <a className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="#">
              Terms
            </a>
            {" "}
            <a className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="#">
              Support
            </a>
            {" "}
            <a className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="#">
              Heritage
            </a>
          </div>
          {" "}
          <div className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant">© 2024 AURA OF SILK. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
      {/* Simple Interactivity for Chat */}
    </div>
  );
}
