import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_order_details
 * "Order Details | VIET LUXE HAIR"
 */

export const metadata: Metadata = {
  title: "Order Details",
};

export default function OrderDetailsPage() {
  return (
    <div className="scr-order-details font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* SideNavBar Anchor */}
      <nav className="h-screen w-80 fixed left-0 top-0 z-40 bg-surface border-r border-outline-variant/30 flex flex-col py-12 px-6">
        <div className="mb-12 px-6">
          <h1 className="font-display-lg text-headline-lg text-primary tracking-tight">VIET LUXE</h1>
          {" "}
          <p className="font-body-sm text-on-surface-variant mt-1">Client Portal</p>
        </div>
        {" "}
        <div className="flex-1 space-y-2">
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-colors hover:translate-x-1 duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            {" "}
            <span className="font-body-md">Overview</span>
          </a>
          {/* Active Tab: My Orders */}
          <a className="flex items-center gap-4 bg-secondary-container/30 text-primary font-semibold px-6 py-4 rounded-lg" href="#">
            <span className="material-symbols-outlined">package_2</span>
            {" "}
            <span className="font-body-md">My Orders</span>
          </a>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-colors hover:translate-x-1 duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            {" "}
            <span className="font-body-md">Bookings</span>
          </a>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-colors hover:translate-x-1 duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">school</span>
            {" "}
            <span className="font-body-md">Certifications</span>
          </a>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-colors hover:translate-x-1 duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">settings</span>
            {" "}
            <span className="font-body-md">Settings</span>
          </a>
        </div>
        {" "}
        <div className="pt-8 border-t border-outline-variant/20 space-y-2">
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-colors rounded-lg" href="#">
            <span className="material-symbols-outlined">help_outline</span>
            {" "}
            <span className="font-body-md">Support</span>
          </a>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-colors rounded-lg" href="#">
            <span className="material-symbols-outlined">logout</span>
            {" "}
            <span className="font-body-md">Sign Out</span>
          </a>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="ml-80 min-h-screen px-margin-desktop py-16 max-w-[1200px]">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-16">
          <div>
            <a className="flex items-center gap-2 text-primary font-label-caps mb-6 group" href="#">
              <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              {" "}
              BACK TO ORDERS
            </a>
            {" "}
            <h2 className="font-display-md text-display-md text-on-surface mb-2 tracking-[-0.01em]">Order #AS-8821</h2>
            {" "}
            <p className="font-body-md text-on-surface-variant">Placed on October 24, 2023 • 10:42 AM</p>
          </div>
          {" "}
          <div className="flex flex-col items-end gap-4">
            <span className="bg-secondary-container text-secondary font-label-caps px-6 py-2 rounded-full border border-primary-container/20">
              ARTISANAL PREPARATION
            </span>
            {" "}
            <button className="flex items-center gap-2 text-primary font-label-caps hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined">receipt_long</span>
              {" "}
              DOWNLOAD INVOICE
            </button>
          </div>
        </header>
        {/* Shipment Tracking (Editorial Timeline) */}
        <section className="mb-20">
          <div className="relative py-12">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2"></div>
            {" "}
            <div className="absolute top-1/2 left-0 w-1/2 h-[2px] bg-primary-container -translate-y-1/2"></div>
            {" "}
            <div className="relative z-10 flex justify-between">
              {/* Milestone 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-primary-container ring-4 ring-surface mb-4"></div>
                {" "}
                <span className="font-label-caps text-on-surface">ORDER PLACED</span>
                {" "}
                <span className="font-body-sm text-on-surface-variant mt-1">Oct 24</span>
              </div>
              {/* Milestone 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-primary-container ring-4 ring-surface mb-4"></div>
                {" "}
                <span className="font-label-caps text-on-surface">ARTISANAL PREP</span>
                {" "}
                <span className="font-body-sm text-on-surface-variant mt-1">In Progress</span>
              </div>
              {/* Milestone 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-surface-container-highest ring-4 ring-surface mb-4"></div>
                {" "}
                <span className="font-label-caps text-on-surface-variant">QUALITY INSPECTION</span>
                {" "}
                <span className="font-body-sm text-on-surface-variant mt-1">Pending</span>
              </div>
              {/* Milestone 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-surface-container-highest ring-4 ring-surface mb-4"></div>
                {" "}
                <span className="font-label-caps text-on-surface-variant">SHIPPED</span>
                {" "}
                <span className="font-body-sm text-on-surface-variant mt-1">—</span>
              </div>
              {/* Milestone 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-surface-container-highest ring-4 ring-surface mb-4"></div>
                {" "}
                <span className="font-label-caps text-on-surface-variant">DELIVERED</span>
                {" "}
                <span className="font-body-sm text-on-surface-variant mt-1">—</span>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <div className="grid grid-cols-12 gap-12">
          {/* Left Column: Items & Care */}
          <div className="col-span-8 space-y-12">
            {/* Item Breakdown */}
            <div className="bg-white border border-outline-variant/20 p-8 flex gap-8 luxury-shadow rounded-lg">
              <div className="w-48 h-64 bg-surface-container overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="A high-end editorial product shot of a luxury silk-base lace wig on a minimalist stand. The lighting is soft and cinematic, highlighting the natural texture and luster of the premium hair. The background is a clean ivory studio setting, maintaining a sophisticated and exclusive boutique feel in light-mode." src="/stitch/img-046.jpg" />
              </div>
              {" "}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-lg text-on-surface">Signature Silk-Base Wig</h3>
                    {" "}
                    <span className="font-headline-lg text-primary">$1,850.00</span>
                  </div>
                  {" "}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">LENGTH</p>
                      {" "}
                      <p className="font-body-md text-on-surface">22 Inches</p>
                    </div>
                    {" "}
                    <div>
                      <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">DENSITY</p>
                      {" "}
                      <p className="font-body-md text-on-surface">180% Ultra-Full</p>
                    </div>
                    {" "}
                    <div>
                      <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">LACE TYPE</p>
                      {" "}
                      <p className="font-body-md text-on-surface">HD Invisible Lace</p>
                    </div>
                    {" "}
                    <div>
                      <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">COLOR</p>
                      {" "}
                      <p className="font-body-md text-on-surface">Natural Obsidian</p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="pt-6 border-t border-outline-variant/10 flex gap-4">
                  <button className="font-label-caps text-primary underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
                    MODIFY CUSTOMIZATION
                  </button>
                  {" "}
                  <span className="text-outline-variant/30">|</span>
                  {" "}
                  <button className="font-label-caps text-primary underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
                    VIEW FULL SPECS
                  </button>
                </div>
              </div>
            </div>
            {/* Atelier Care Guide Snippet */}
            <div className="bg-surface-container-low p-10 border border-primary-container/10 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-[120px]">spa</span>
              </div>
              {" "}
              <h4 className="font-display-md text-[24px] text-primary mb-4">Atelier Care Guide</h4>
              {" "}
              <p className="font-body-md text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                Your Signature investment deserves meticulous care. As a premier member, your first
                {" "}
                <span className="text-primary font-semibold">'Wig Laundry'</span>
                {" "}
                deep-conditioning and restyling service is included with this purchase.
              </p>
              {" "}
              <div className="flex items-center gap-6">
                <button className="px-8 py-3 bg-primary text-white font-label-caps text-[11px] rounded-lg hover:bg-primary-container transition-colors shadow-lg shadow-primary/10">
                  SCHEDULE CARE SERVICE
                </button>
                {" "}
                <a className="font-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="#">
                  CARE MANUAL (PDF)
                  {" "}
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
          {/* Right Column: Logistics & Support */}
          <div className="col-span-4 space-y-8">
            {/* Logistics Card */}
            <div className="bg-white border border-outline-variant/20 p-8 rounded-lg luxury-shadow">
              <div className="mb-10">
                <h5 className="font-label-caps text-on-surface mb-6 border-b border-outline-variant/20 pb-4">SHIPPING ADDRESS</h5>
                {" "}
                <p className="font-body-md text-on-surface leading-loose">
                  Julianne Sterling
                  <br />
                  {" "}
                  1200 Avenue of the Stars, Suite 402
                  <br />
                  {" "}
                  Century City, CA 90067
                  <br />
                  {" "}
                  United States
                </p>
              </div>
              {" "}
              <div className="mb-10">
                <h5 className="font-label-caps text-on-surface mb-6 border-b border-outline-variant/20 pb-4">BILLING & PAYMENT</h5>
                {" "}
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">credit_card</span>
                  {" "}
                  <p className="font-body-md text-on-surface">•••• 8812 (Visa)</p>
                </div>
                {" "}
                <p className="font-body-sm text-on-surface-variant">Billing matches shipping address</p>
              </div>
              {" "}
              <div className="mb-10">
                <h5 className="font-label-caps text-on-surface mb-6 border-b border-outline-variant/20 pb-4">DELIVERY METHOD</h5>
                {" "}
                <div className="flex justify-between items-center">
                  <p className="font-body-md text-on-surface">Atelier Express</p>
                  {" "}
                  <span className="font-body-sm text-primary font-semibold">FREE</span>
                </div>
                {" "}
                <p className="font-body-sm text-on-surface-variant mt-1">Est. arrival: Oct 30 - Nov 02</p>
              </div>
              {" "}
              <div className="pt-6 border-t border-outline-variant/30 space-y-4">
                <div className="flex justify-between font-body-md">
                  <span className="text-on-surface-variant">Subtotal</span>
                  {" "}
                  <span className="text-on-surface">$1,850.00</span>
                </div>
                {" "}
                <div className="flex justify-between font-body-md">
                  <span className="text-on-surface-variant">Tax</span>
                  {" "}
                  <span className="text-on-surface">$148.00</span>
                </div>
                {" "}
                <div className="flex justify-between font-headline-lg border-t border-outline-variant/10 pt-4">
                  <span>Total</span>
                  {" "}
                  <span className="text-primary">$1,998.00</span>
                </div>
              </div>
            </div>
            {/* Support Card */}
            <div className="bg-primary text-white p-8 rounded-lg text-center luxury-shadow">
              <span className="material-symbols-outlined text-[48px] mb-4" style={{ fontVariationSettings: "'wght' 200" }}>
                support_agent
              </span>
              {" "}
              <h5 className="font-headline-lg text-[20px] mb-2">Personal Concierge</h5>
              {" "}
              <p className="font-body-sm text-white/80 mb-8 px-4">Our artisans are available for real-time updates on your preparation.</p>
              {" "}
              <button className="w-full py-4 bg-white text-primary font-label-caps rounded hover:bg-surface-container-highest transition-colors active:scale-95">
                CONTACT CONCIERGE
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Footer Anchor */}
      <footer className="ml-80 w-[calc(100%-320px)] mt-section-padding border-t border-outline-variant/50 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop py-16 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="font-display-md text-[24px] text-primary mb-2">VIET LUXE HAIR</h3>
            {" "}
            <p className="font-body-sm text-on-surface-variant">© 2024 VIET LUXE HAIR. ALL RIGHTS RESERVED.</p>
          </div>
          {" "}
          <div className="flex gap-8">
            <a className="font-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Sustainability
            </a>
            {" "}
            <a className="font-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Shipping & Returns
            </a>
            {" "}
            <a className="font-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            {" "}
            <a className="font-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
