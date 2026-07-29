import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy_resource_library
 * "Academy Resource Library | ByChi Academy"
 */

export const metadata: Metadata = {
  title: "The Knowledge Vault",
};

export default function AcademyResourceLibraryPage() {
  return (
    <div className="scr-academy-resource-library bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/50 shadow-sm">
        <div className="flex justify-between items-center px-8 md:px-20 py-4 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-display-md text-[28px] md:text-display-md text-on-surface dark:text-surface-bright tracking-tighter md:tracking-[-0.01em]">
              ByChi Academy
            </span>
            {" "}
            <div className="hidden md:flex gap-6">
              <Link className="text-on-surface-variant/70 font-medium pb-1 font-body-md text-body-md uppercase tracking-widest hover:text-primary transition-colors duration-300" href="/academy">
                Curriculum
              </Link>
              {" "}
              <Link className="text-primary font-semibold border-b border-primary pb-1 font-body-md text-body-md uppercase tracking-widest" href="/collections">
                Archive
              </Link>
              {" "}
              <Link className="text-on-surface-variant/70 font-medium pb-1 font-body-md text-body-md uppercase tracking-widest hover:text-primary transition-colors duration-300" href="/academy/mentorship">
                Mentorship
              </Link>
              {" "}
              <Link className="text-on-surface-variant/70 font-medium pb-1 font-body-md text-body-md uppercase tracking-widest hover:text-primary transition-colors duration-300" href="/academy/resources">
                Community
              </Link>
            </div>
          </div>
          {" "}
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity">
              search
            </span>
            {" "}
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity">
              shopping_bag
            </span>
            {" "}
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity">
              account_circle
            </span>
          </div>
        </div>
      </nav>
      <main className="pt-24">
        {/* Hero Section: The Knowledge Vault */}
        <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover" data-alt="A sophisticated watermark of the BY CHI STRANDS logo repeating in a subtle grid pattern against an ivory silk-textured background, evoking exclusivity and brand heritage in a high-fashion digital space." src="/stitch/img-111.jpg" />
          </div>
          {" "}
          <div className="relative z-10 max-w-3xl">
            <span className="font-label-caps text-label-caps text-primary mb-4 block animate-fade-in tracking-[0.15em]">
              EXCLUSIVE CURRICULUM
            </span>
            {" "}
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8 tracking-tighter leading-tight md:leading-[1.1] md:tracking-[-0.02em]">
              The Knowledge Vault
            </h1>
            {" "}
            <div className="relative w-full max-w-xl mx-auto group">
              <input className="w-full bg-surface-container-lowest border border-outline-variant/30 py-5 px-12 focus:ring-0 focus:border-primary-container outline-none transition-all shadow-sm font-body-md text-on-surface placeholder:text-outline/50 rounded-lg" placeholder="Search modules, masterclasses, or toolkits..." type="text" />
              {" "}
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline/60 group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
          </div>
        </section>
        {/* Categories / Filter Bar */}
        <section className="sticky top-[72px] z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/20 py-4">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto">
            <div className="flex items-center justify-center gap-8 whitespace-nowrap min-w-max pb-2">
              <button className="text-primary font-semibold border-b-2 border-primary pb-1 font-label-caps transition-all">
                All Resources
              </button>
              {" "}
              <button className="text-on-surface-variant hover:text-primary transition-all font-label-caps">Masterclass Replays</button>
              {" "}
              <button className="text-on-surface-variant hover:text-primary transition-all font-label-caps">Sourcing & Logistics</button>
              {" "}
              <button className="text-on-surface-variant hover:text-primary transition-all font-label-caps">Marketing & Branding</button>
              {" "}
              <button className="text-on-surface-variant hover:text-primary transition-all font-label-caps">Technical Artistry</button>
            </div>
          </div>
        </section>
        {" "}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Main Content Area: Resource Grid */}
          <div className="lg:col-span-8 space-y-section-padding/2">
            {/* Masterclass Replays Section */}
            <div>
              <div className="flex justify-between items-end mb-8 border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline-lg text-headline-lg">Masterclass Replays</h2>
                {" "}
                <Link className="font-label-caps text-primary hover:underline" href="/shop">View All</Link>
              </div>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Cinematic Card 1 */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-xl mb-4 bg-surface-variant">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A portrait of the CEO of BY CHI STRANDS, exuding confidence and professionalism in a high-end atelier setting. Soft directional lighting highlights the textures of premium hair extensions in the background, set against a palette of ivory and deep charcoal." src="/stitch/img-052.jpg" />
                    {" "}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          play_arrow
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        Elite Access
                      </span>
                    </div>
                  </div>
                  {" "}
                  <span className="font-body-sm text-outline text-[12px] uppercase tracking-tighter">October 14, 2024</span>
                  {" "}
                  <h3 className="font-headline-lg text-[22px] mt-1 group-hover:text-primary transition-colors">The Alchemy of Global Sourcing</h3>
                </div>
                {/* Cinematic Card 2 */}
                <div className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-xl mb-4 bg-surface-variant">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Arrangement of luxury BY CHI STRANDS hair extension packages on a minimalist marble surface. The lighting is bright and editorial, emphasizing the sleek ivory and gold branding. The mood is one of premium retail excellence." src="/stitch/img-121.jpg" />
                    {" "}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          play_arrow
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        Elite Access
                      </span>
                    </div>
                  </div>
                  {" "}
                  <span className="font-body-sm text-outline text-[12px] uppercase tracking-tighter">September 28, 2024</span>
                  {" "}
                  <h3 className="font-headline-lg text-[22px] mt-1 group-hover:text-primary transition-colors">Scaling Your Boutique Branding</h3>
                </div>
              </div>
            </div>
            {/* PDF Guides & Toolkits */}
            <div>
              <div className="flex justify-between items-end mb-8 border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline-lg text-headline-lg">PDF Guides & Toolkits</h2>
                {" "}
                <Link className="font-label-caps text-primary hover:underline" href="/academy/resources">Download All</Link>
              </div>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Guide Card */}
                <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 flex items-start gap-4 hover:border-primary-container transition-all group">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">description</span>
                  </div>
                  {" "}
                  <div className="flex-1">
                    <h4 className="font-body-md font-bold text-on-surface mb-1">Vendor Quality Control Checklist</h4>
                    {" "}
                    <p className="text-body-sm text-outline mb-4">Essential 24-point audit for virgin hair procurement.</p>
                    {" "}
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-label-caps opacity-60">PDF • 4.2 MB</span>
                      {" "}
                      <button className="flex items-center gap-2 text-primary font-label-caps group-hover:underline">
                        Download
                        {" "}
                        <span className="material-symbols-outlined text-sm">download</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Guide Card */}
                <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 flex items-start gap-4 hover:border-primary-container transition-all group">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">calculate</span>
                  </div>
                  {" "}
                  <div className="flex-1">
                    <h4 className="font-body-md font-bold text-on-surface mb-1">Profitability Matrix Spreadsheet</h4>
                    {" "}
                    <p className="text-body-sm text-outline mb-4">Automated calculator for wholesale margins.</p>
                    {" "}
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-label-caps opacity-60">XLSX • 1.8 MB</span>
                      {" "}
                      <button className="flex items-center gap-2 text-primary font-label-caps group-hover:underline">
                        Download
                        {" "}
                        <span className="material-symbols-outlined text-sm">download</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Guide Card */}
                <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 flex items-start gap-4 hover:border-primary-container transition-all group">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                  </div>
                  {" "}
                  <div className="flex-1">
                    <h4 className="font-body-md font-bold text-on-surface mb-1">Visual Branding Kit v2.0</h4>
                    {" "}
                    <p className="text-body-sm text-outline mb-4">Templates for high-converting social assets.</p>
                    {" "}
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-label-caps opacity-60">ZIP • 125 MB</span>
                      {" "}
                      <button className="flex items-center gap-2 text-primary font-label-caps group-hover:underline">
                        Download
                        {" "}
                        <span className="material-symbols-outlined text-sm">download</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Guide Card */}
                <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 flex items-start gap-4 hover:border-primary-container transition-all group">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">import_contacts</span>
                  </div>
                  {" "}
                  <div className="flex-1">
                    <h4 className="font-body-md font-bold text-on-surface mb-1">Shipping & Logistics Playbook</h4>
                    {" "}
                    <p className="text-body-sm text-outline mb-4">Global customs and import navigation guide.</p>
                    {" "}
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-label-caps opacity-60">PDF • 8.5 MB</span>
                      {" "}
                      <button className="flex items-center gap-2 text-primary font-label-caps group-hover:underline">
                        Download
                        {" "}
                        <span className="material-symbols-outlined text-sm">download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-gutter">
            {/* Trending Insights */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20">
              <h3 className="font-headline-lg text-[24px] mb-6 border-b border-primary/20 pb-2">Trending Insights</h3>
              {" "}
              <div className="space-y-6">
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center font-display-md text-primary text-xl">
                    01
                  </div>
                  {" "}
                  <div>
                    <p className="font-body-sm font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                      How to Spot Synthetics in Bulk Orders
                    </p>
                    {" "}
                    <p className="text-body-sm text-outline uppercase mt-1">1.2k Views this week</p>
                  </div>
                </div>
                {" "}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center font-display-md text-primary text-xl">
                    02
                  </div>
                  {" "}
                  <div>
                    <p className="font-body-sm font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                      Negotiating with Asian Wholesalers
                    </p>
                    {" "}
                    <p className="text-body-sm text-outline uppercase mt-1">940 Views this week</p>
                  </div>
                </div>
                {" "}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center font-display-md text-primary text-xl">
                    03
                  </div>
                  {" "}
                  <div>
                    <p className="font-body-sm font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                      Content Pillars for Luxury Brands
                    </p>
                    {" "}
                    <p className="text-body-sm text-outline uppercase mt-1">820 Views this week</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mentorship & Community CTA Cards */}
            <div className="space-y-4">
              {/* Mentorship */}
              <div className="relative overflow-hidden group cursor-pointer h-48 rounded-lg">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of a high-end gift-wrapped BY CHI STRANDS package, showcasing luxury materials, a gold ribbon, and the iconic branding. The shot is intimate and captures the feeling of receiving an exclusive product." src="/stitch/img-053.jpg" />
                {" "}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h4 className="font-headline-lg text-white text-xl">Mentorship Bookings</h4>
                  {" "}
                  <p className="text-white/80 text-body-sm mb-4">1-on-1 strategy sessions with Chi.</p>
                  {" "}
                  <span className="inline-flex items-center text-white font-label-caps gap-2 group-hover:translate-x-2 transition-transform">
                    Book Session
                    {" "}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
              {/* Community */}
              <div className="relative overflow-hidden group cursor-pointer h-48 rounded-lg bg-inverse-surface">
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-4 gap-2 p-2">
                    <div className="w-full aspect-square bg-white/20 rounded-sm"></div>
                    {" "}
                    <div className="w-full aspect-square bg-white/20 rounded-sm"></div>
                    {" "}
                    <div className="w-full aspect-square bg-white/20 rounded-sm"></div>
                    {" "}
                    <div className="w-full aspect-square bg-white/20 rounded-sm"></div>
                  </div>
                </div>
                {" "}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h4 className="font-headline-lg text-white text-xl">Private Community</h4>
                  {" "}
                  <p className="text-white/80 text-body-sm mb-4">Connect with 500+ global stylists.</p>
                  {" "}
                  <span className="inline-flex items-center text-white font-label-caps gap-2 group-hover:translate-x-2 transition-transform">
                    Enter Hub
                    {" "}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </section>
        {/* Newsletter / Access Section */}
        <section className="bg-surface-container py-section-padding border-t border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface mb-6 tracking-tight md:tracking-[-0.01em]">
                Stay Ahead of the Market
              </h2>
              {" "}
              <p className="font-body-xl text-body-xl text-outline mb-10">
                Receive weekly market reports, new resource alerts, and exclusive invites to live Q&A sessions.
              </p>
              {" "}
              <form className="flex flex-col md:flex-row gap-4">
                <input className="flex-1 bg-surface-container-lowest border-b border-outline p-4 outline-none focus:border-primary transition-colors text-body-md" placeholder="Your executive email address" type="email" />
                {" "}
                <button className="bg-on-surface text-surface px-10 py-4 font-label-caps hover:bg-primary transition-all duration-300">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full relative bg-surface dark:bg-inverse-surface border-t border-outline-variant/30 mt-section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-gutter max-w-container-max mx-auto gap-unit">
          <div className="flex flex-col gap-2">
            <span className="font-display-md text-display-md text-on-surface dark:text-surface-bright tracking-[-0.01em]">
              ByChi Strands
            </span>
            {" "}
            <p className="font-body-sm text-body-sm tracking-wide text-secondary dark:text-secondary-fixed opacity-70">
              © 2024 BYCHI STRANDS ACADEMY. ALL RIGHTS RESERVED.
            </p>
          </div>
          {" "}
          <div className="flex gap-8">
            <Link className="text-on-surface-variant font-body-sm text-body-sm tracking-wide hover:text-primary underline transition-all" href="/privacy">
              Privacy Policy
            </Link>
            {" "}
            <Link className="text-on-surface-variant font-body-sm text-body-sm tracking-wide hover:text-primary underline transition-all" href="/terms">
              Terms of Service
            </Link>
            {" "}
            <Link className="text-on-surface-variant font-body-sm text-body-sm tracking-wide hover:text-primary underline transition-all" href="/faqs">
              Support
            </Link>
            {" "}
            <Link className="text-on-surface-variant font-body-sm text-body-sm tracking-wide hover:text-primary underline transition-all" href="/academy/enroll">
              Institutional Access
            </Link>
          </div>
        </div>
      </footer>
      {/* Micro-interaction Scripts */}
    </div>
  );
}
