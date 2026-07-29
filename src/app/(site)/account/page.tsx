import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_customer_dashboard
 * "ByChi Strands | Client Dashboard"
 */

export const metadata: Metadata = {
  title: "Client Dashboard",
};

export default function CustomerDashboardPage() {
  return (
    <div className="scr-customer-dashboard bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* TopNavBar (Global Actions) */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl shadow-[0px_20px_50px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="font-display-md text-display-md tracking-widest text-primary uppercase">ByChi Strands</div>
          {" "}
          <nav className="hidden md:flex space-x-10">
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps uppercase text-label-caps tracking-[0.15em]" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps uppercase text-label-caps tracking-[0.15em]" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="text-primary border-b border-primary/50 font-medium font-label-caps uppercase text-label-caps tracking-[0.15em]" href="/account">
              Orders
            </Link>
          </nav>
          {" "}
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity">shopping_bag</button>
            {" "}
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity">person</button>
          </div>
        </div>
      </header>
      {/* SideNavBar (Primary Dashboard Nav) */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-surface border-r border-outline-variant/30 flex flex-col py-margin-desktop pt-32 space-y-unit hidden md:flex">
        <div className="px-8 mb-10">
          <div className="font-display-md text-display-md text-primary mb-1 tracking-[-0.01em]">Aura Client</div>
          {" "}
          <div className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant opacity-60">
            Elite Member
          </div>
        </div>
        {" "}
        <nav className="flex flex-col space-y-4">
          <a className="sidebar-active flex items-center group transition-all duration-300" href="#">
            <span className="material-symbols-outlined mr-3">dashboard</span>
            {" "}
            <span className="font-label-caps text-label-caps uppercase tracking-widest">Overview</span>
          </a>
          {" "}
          <a className="text-on-tertiary-fixed-variant pl-8 flex items-center group hover:text-primary transition-all duration-300" href="#">
            <span className="material-symbols-outlined mr-3">history</span>
            {" "}
            <span className="font-label-caps text-label-caps uppercase tracking-widest">Order History</span>
          </a>
          {" "}
          <a className="text-on-tertiary-fixed-variant pl-8 flex items-center group hover:text-primary transition-all duration-300" href="#">
            <span className="material-symbols-outlined mr-3">content_cut</span>
            {" "}
            <span className="font-label-caps text-label-caps uppercase tracking-widest">My Atelier</span>
          </a>
          {" "}
          <Link className="text-on-tertiary-fixed-variant pl-8 flex items-center group hover:text-primary transition-all duration-300" href="/academy">
            <span className="material-symbols-outlined mr-3">school</span>
            {" "}
            <span className="font-label-caps text-label-caps uppercase tracking-widest">Academy</span>
          </Link>
          {" "}
          <a className="text-on-tertiary-fixed-variant pl-8 flex items-center group hover:text-primary transition-all duration-300" href="#">
            <span className="material-symbols-outlined mr-3">settings</span>
            {" "}
            <span className="font-label-caps text-label-caps uppercase tracking-widest">Profile</span>
          </a>
        </nav>
        {" "}
        <div className="mt-auto px-6 pb-8">
          <button className="w-full py-4 bg-primary text-white font-label-caps text-label-caps uppercase tracking-widest rounded-lg hover:bg-primary-container transition-colors duration-400">
            Book Consultation
          </button>
        </div>
      </aside>
      {/* Main Content Area */}
      <main className="md:ml-64 pt-32 min-h-screen px-margin-mobile md:px-margin-desktop pb-section-padding">
        <div className="max-w-container-max mx-auto">
          {/* Welcome Header */}
          <section className="fade-in mb-16">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-4 tracking-[-0.02em]">Welcome back, Elena</h1>
            {" "}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                {" "}
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                  Status:
                  {" "}
                  <span className="text-primary font-bold">Elite Member</span>
                </p>
              </div>
              {" "}
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  diamond
                </span>
                {" "}
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                  Hair Investment:
                  {" "}
                  <span className="text-on-surface font-bold">£12,450</span>
                </p>
              </div>
            </div>
          </section>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Recent Orders & Elite Benefits */}
            <div className="lg:col-span-8 space-y-8">
              {/* Recent Orders */}
              <section className="glass-card p-10 rounded-xl">
                <div className="flex justify-between items-end mb-8">
                  <h2 className="font-headline-lg text-headline-lg">Recent Orders</h2>
                  {" "}
                  <Link className="text-primary font-label-caps text-[10px] uppercase tracking-widest border-b border-primary/20 hover:border-primary transition-all" href="/shop">
                    View All
                  </Link>
                </div>
                {" "}
                <div className="space-y-6">
                  {/* Order Item 1 */}
                  <div className="flex items-center justify-between group cursor-pointer border-b border-outline-variant/20 pb-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-24 overflow-hidden rounded-lg bg-surface-container">
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A macro studio photograph of a premium, deep-brown silk-base wig, styled in soft waves, resting on a minimalist marble stand. The lighting is warm and directional, emphasizing the realistic scalp transition and the high-gloss sheen of the human hair fibers against a creamy ivory background." src="/stitch/img-086.jpg" />
                      </div>
                      {" "}
                      <div>
                        <p className="font-label-caps text-[10px] text-primary mb-1 uppercase">Order #AS-8821</p>
                        {" "}
                        <h3 className="font-headline-lg text-body-xl mb-1">Signature Silk-Base Wig</h3>
                        {" "}
                        <p className="font-body-sm text-on-surface-variant opacity-70">Custom length: 22", Color: Espresso Silk</p>
                      </div>
                    </div>
                    {" "}
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-secondary-container/30 text-on-secondary-container rounded-full text-[10px] font-label-caps uppercase tracking-widest mb-2">
                        In Atelier
                      </span>
                      {" "}
                      <p className="font-body-md font-bold">£3,200</p>
                    </div>
                  </div>
                  {/* Order Item 2 */}
                  <div className="flex items-center justify-between group cursor-pointer border-b border-outline-variant/20 pb-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-24 overflow-hidden rounded-lg bg-surface-container">
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A luxurious close-up of a high-end hair care kit, including a gold-capped amber bottle of serum and a sleek black wide-tooth comb. The products are presented in an open editorial-style white box lined with silk fabric, illuminated by soft morning light filtering through a sheer curtain, creating a peaceful, high-end beauty aesthetic." src="/stitch/img-062.jpg" />
                      </div>
                      {" "}
                      <div>
                        <p className="font-label-caps text-[10px] text-primary mb-1 uppercase">Order #AS-8704</p>
                        {" "}
                        <h3 className="font-headline-lg text-body-xl mb-1">Atelier Care Essentials Kit</h3>
                        {" "}
                        <p className="font-body-sm text-on-surface-variant opacity-70">Silk Serums, Refresh Mist & Sculpting Tool</p>
                      </div>
                    </div>
                    {" "}
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-[10px] font-label-caps uppercase tracking-widest mb-2">
                        Shipped
                      </span>
                      {" "}
                      <p className="font-body-md font-bold">£450</p>
                    </div>
                  </div>
                </div>
              </section>
              {/* Elite Benefits (Bento Section) */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary text-white p-8 rounded-xl flex flex-col justify-between h-64 hover:bg-primary-container transition-colors duration-400 group">
                  <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bolt
                  </span>
                  {" "}
                  <div>
                    <h3 className="font-headline-lg text-headline-lg mb-2">Priority Booking</h3>
                    {" "}
                    <p className="font-body-sm opacity-80 mb-6">
                      Skip the 4-month waitlist for all atelier services and refresh appointments.
                    </p>
                    {" "}
                    <Link className="font-label-caps text-label-caps uppercase tracking-widest border-b border-white/40 group-hover:border-white transition-all inline-block" href="/book">
                      Check Availability
                    </Link>
                  </div>
                </div>
                {" "}
                <div className="glass-card p-8 rounded-xl flex flex-col justify-between h-64 border-primary/20">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">concierge</span>
                  {" "}
                  <div>
                    <h3 className="font-headline-lg text-headline-lg mb-2">Atelier Express</h3>
                    {" "}
                    <p className="font-body-sm text-on-surface-variant mb-6">Complimentary same-day wig laundry and styling for all Elite members.</p>
                    {" "}
                    <Link className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary/20 hover:border-primary transition-all inline-block" href="/book">
                      Request Courier
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            {/* Right Column: Appointments & Academy */}
            <div className="lg:col-span-4 space-y-8">
              {/* Upcoming Appointments */}
              <section className="bg-surface-container-highest p-10 rounded-xl">
                <h2 className="font-label-caps text-label-caps uppercase tracking-widest text-primary mb-8">Next Scheduled</h2>
                {" "}
                <div className="mb-10">
                  <h3 className="font-display-md text-headline-lg mb-2">Wig Laundry & Refresh</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant">Atelier London | Suite 4B</p>
                </div>
                {" "}
                <div className="flex items-center space-x-6 mb-10 pb-10 border-b border-outline-variant/30">
                  <div className="text-center">
                    <p className="font-label-caps text-label-caps uppercase tracking-widest text-primary mb-1">Nov</p>
                    {" "}
                    <p className="font-display-md text-headline-lg">18</p>
                  </div>
                  {" "}
                  <div className="h-10 w-px bg-outline-variant/50"></div>
                  {" "}
                  <div>
                    <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-1">
                      Time
                    </p>
                    {" "}
                    <p className="font-body-xl font-medium">14:30 GMT</p>
                  </div>
                </div>
                {" "}
                <button className="w-full py-4 border border-primary text-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                  View Details
                </button>
              </section>
              {/* Academy Progress */}
              <section className="relative overflow-hidden group rounded-xl aspect-[3/4]">
                <div className="absolute inset-0 z-0">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A cinematic, shallow-focus shot of highly skilled hands working with bundles of premium raw hair from Vietnam. The environment is a clean, sunlit atelier with neutral textures and golden morning light. The image captures the exquisite detail and tactile quality of the hair, emphasizing the artisanal nature of the sourcing process in a high-fashion editorial style." src="/stitch/img-069.jpg" />
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                {" "}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
                  <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] mb-2 opacity-80">Academy / In Progress</p>
                  {" "}
                  <h3 className="font-display-md text-headline-lg mb-6 leading-tight">The Art of the Source: Vietnam</h3>
                  {" "}
                  <div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
                    <div className="h-full bg-primary-container w-[65%]"></div>
                  </div>
                  {" "}
                  <div className="flex justify-between items-center mb-8">
                    <p className="font-label-caps text-[10px] uppercase tracking-widest">Progress</p>
                    {" "}
                    <p className="font-label-caps text-[10px] uppercase tracking-widest">65% Complete</p>
                  </div>
                  {" "}
                  <button className="w-full py-4 bg-white text-black font-label-caps text-label-caps uppercase tracking-widest flex items-center justify-center group/btn hover:bg-primary-container hover:text-white transition-all">
                    Continue Learning
                    {" "}
                    <span className="material-symbols-outlined ml-2 transition-transform group-hover/btn:translate-x-2">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container w-full py-16 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-md text-display-md text-primary mb-8 md:mb-0 tracking-[-0.01em]">AURA</div>
          {" "}
          <div className="flex space-x-8 mb-8 md:mb-0">
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
          <p className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60">
            © 2024 ByChi Strands. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
