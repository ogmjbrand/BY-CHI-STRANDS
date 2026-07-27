import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy_live_session_2
 * "ByChi Strands Academy | Live Masterclass"
 */

export const metadata: Metadata = {
  title: "Live Masterclass",
};

export default function AcademyLiveSession2Page() {
  return (
    <div className="scr-academy-live-session-2 antialiased selection:bg-primary/30">
      {/* Top Navigation Bar (Shared Component Strategy) */}
      <nav className="fixed top-0 w-full z-50 bg-on-surface/90 backdrop-blur-xl border-b border-white/5 shadow-[0px_20px_50px_rgba(0,0,0,0.2)]">
        <div className="flex justify-between items-center px-8 md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <h1 className="font-display-md text-[24px] text-primary-fixed-dim tracking-tighter uppercase">
              ByChi Strands
            </h1>
            {" "}
            <div className="hidden md:flex gap-6 items-center">
              <span className="bg-primary/20 text-primary-fixed-dim px-3 py-1 rounded-full text-[10px] font-label-caps flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"></span>
                {" "}
                LIVE
              </span>
              {" "}
              <p className="font-body-md text-white/60 tracking-wider">Masterclass: The Art of Vietnamese Sourcing</p>
            </div>
          </div>
          {" "}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-on-surface overflow-hidden" data-alt="Close up portrait of a high-fashion model with sleek dark hair in a minimalist ivory studio, editorial lighting, soft shadows, luxury aesthetic.">
                <img className="w-full h-full object-cover" src="/stitch/img-042.jpg" />
              </div>
              {" "}
              <div className="w-8 h-8 rounded-full border-2 border-on-surface overflow-hidden" data-alt="Elegant professional woman with structured hair styling, soft warm lighting, cinematic depth of field, high-end photography.">
                <img className="w-full h-full object-cover" src="/stitch/img-058.jpg" />
              </div>
              {" "}
              <div className="w-8 h-8 rounded-full border-2 border-on-surface overflow-hidden bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container">
                +40
              </div>
            </div>
            {" "}
            <button className="material-symbols-outlined text-white/80 hover:text-primary-fixed-dim transition-colors">
              account_circle
            </button>
          </div>
        </div>
      </nav>
      {/* Main Content Grid */}
      <main className="pt-24 h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Main Stage: Cinematic Video Player */}
        <section className="flex-grow relative group bg-black flex items-center justify-center">
          {/* Simulated Video Content */}
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            {" "}
            <img className="w-full h-full object-cover" data-alt="Cinematic wide shot of a professional hair atelier. A mentor with elegant hands is meticulously sorting high-grade raw Vietnamese hair strands on a dark wooden table. Soft golden spotlighting highlights the texture and silkiness of the hair. Luxury classroom environment, dark background, premium editorial feel." src="/stitch/img-097.jpg" />
            {/* Video Overlay Info */}
            <div className="absolute top-8 left-8 z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-fixed-dim" data-alt="Portrait of Chioma Okere, a master hair educator, in a sophisticated black silk outfit, professional lighting, serene expression, high-fashion aesthetic.">
                  <img className="w-full h-full object-cover" src="/stitch/img-056.jpg" />
                </div>
                {" "}
                <div>
                  <p className="font-label-caps text-primary-fixed-dim text-[10px] tracking-widest">MENTOR</p>
                  {" "}
                  <h2 className="font-display-md text-xl">Chioma Okere</h2>
                </div>
              </div>
            </div>
            {/* Floating Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center gap-4 px-8 py-4 bg-surface/10 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 text-white transition-all">
                  <span className="material-symbols-outlined">mic</span>
                </button>
                {" "}
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 text-white transition-all">
                  <span className="material-symbols-outlined">videocam</span>
                </button>
                {" "}
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:scale-110 transition-all">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>front_hand</span>
                </button>
                {" "}
                <div className="w-[1px] h-8 bg-white/10 mx-2"></div>
                {" "}
                <button className="px-6 h-12 flex items-center justify-center rounded-full bg-error/80 hover:bg-error text-white font-label-caps text-[10px] tracking-widest transition-all">
                  LEAVE SESSION
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Sidebar: Sophisticated Interaction Panel */}
        <aside className="w-full md:w-[400px] bg-on-surface border-l border-white/5 flex flex-col">
          {/* Tabs */}
          <div className="flex items-center border-b border-white/5 px-6">
            <button className="px-4 py-6 font-label-caps text-[11px] tracking-widest active-tab transition-all" id="tab-chat">
              LIVE CHAT
            </button>
            {" "}
            <button className="px-4 py-6 font-label-caps text-[11px] tracking-widest text-white/40 hover:text-white transition-all" id="tab-roadmap">
              ROADMAP
            </button>
            {" "}
            <button className="px-4 py-6 font-label-caps text-[11px] tracking-widest text-white/40 hover:text-white transition-all" id="tab-qa">
              Q&A
            </button>
          </div>
          {/* Content Area */}
          <div className="flex-grow overflow-y-auto hide-scrollbar p-6 space-y-6" id="sidebar-content">
            {/* Chat View (Default) */}
            <div className="space-y-6" id="view-chat">
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden" data-alt="Portrait of an elegant student with a modern haircut, minimal makeup, soft lighting.">
                  <img className="w-full h-full object-cover" src="/stitch/img-071.jpg" />
                </div>
                {" "}
                <div className="bg-surface-container-low/5 p-4 rounded-xl rounded-tl-none border border-white/5">
                  <p className="font-label-caps text-[10px] text-primary-fixed-dim mb-1">AMARA V.</p>
                  {" "}
                  <p className="font-body-sm text-white/80">
                    The cuticle alignment on that specific bundle is incredible. How do we verify the donor source?
                  </p>
                </div>
              </div>
              {" "}
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden" data-alt="A stylish young man with a professional look, high-key studio background.">
                  <img className="w-full h-full object-cover" src="/stitch/img-129.jpg" />
                </div>
                {" "}
                <div className="bg-surface-container-low/5 p-4 rounded-xl rounded-tl-none border border-white/5">
                  <p className="font-label-caps text-[10px] text-primary-fixed-dim mb-1">JULIAN K.</p>
                  {" "}
                  <p className="font-body-sm text-white/80">Absolutely flawless technique on the grading. 🔥</p>
                </div>
              </div>
              {" "}
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden" data-alt="Close up of a luxury fashion designer in an ivory studio setting.">
                  <img className="w-full h-full object-cover" src="/stitch/img-037.jpg" />
                </div>
                {" "}
                <div className="bg-surface-container-low/5 p-4 rounded-xl rounded-tl-none border border-white/5">
                  <p className="font-label-caps text-[10px] text-primary-fixed-dim mb-1">SARAH L.</p>
                  {" "}
                  <p className="font-body-sm text-white/80">Are the wefting tools shown here available in the Atelier store?</p>
                </div>
              </div>
            </div>
            {/* Roadmap View (Hidden) */}
            <div className="hidden space-y-4" id="view-roadmap">
              <div className="relative pl-8 border-l border-primary/30 py-2">
                <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#755b15]"></div>
                {" "}
                <p className="font-label-caps text-[10px] text-primary">CURRENTLY</p>
                {" "}
                <h4 className="font-display-md text-lg text-white">Visual Grading of Raw Strands</h4>
                {" "}
                <p className="font-body-sm text-white/40">Identifying donor age and hair elasticity.</p>
              </div>
              {" "}
              <div className="relative pl-8 border-l border-white/10 py-2 opacity-50">
                <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-white/20"></div>
                {" "}
                <p className="font-label-caps text-[10px] text-white/40">NEXT</p>
                {" "}
                <h4 className="font-display-md text-lg text-white">Wig Construction: Base Mapping</h4>
              </div>
              {" "}
              <div className="relative pl-8 border-l border-white/10 py-2 opacity-50">
                <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-white/20"></div>
                {" "}
                <p className="font-label-caps text-[10px] text-white/40">FINAL</p>
                {" "}
                <h4 className="font-display-md text-lg text-white">Sourcing Logistics & Ethics</h4>
              </div>
            </div>
          </div>
          {/* Chat Input Area */}
          <div className="p-6 border-t border-white/5 bg-on-surface">
            <div className="relative">
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-primary-container focus:ring-0 text-white placeholder-white/30 transition-all" placeholder="Share your thoughts with the elite..." type="text" />
              {" "}
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary-fixed-dim transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            {" "}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] font-label-caps text-white/40">42 ELITE MEMBERS ACTIVE</span>
              {" "}
              <div className="flex gap-2">
                <button className="material-symbols-outlined text-white/40 text-lg hover:text-white transition-colors">
                  mood
                </button>
                {" "}
                <button className="material-symbols-outlined text-white/40 text-lg hover:text-white transition-colors">
                  attachment
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
      {/* Success Notification Toast (Example Interaction) */}
      <div className="fixed bottom-8 right-8 bg-primary-container text-on-primary-container px-6 py-4 rounded-xl shadow-2xl transform translate-y-24 opacity-0 transition-all duration-500 z-[100] flex items-center gap-3" id="toast">
        <span className="material-symbols-outlined">check_circle</span>
        {" "}
        <span className="font-label-caps text-[12px] tracking-widest">HAND RAISED • NOTIFYING MENTOR</span>
      </div>
    </div>
  );
}
