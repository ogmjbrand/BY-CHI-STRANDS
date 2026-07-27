import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy
 * "ByChi Strands Academy | The Art of the Source"
 */

export const metadata: Metadata = {
  title: "Academy",
};

export default function AcademyPage() {
  return (
    <div className="scr-academy bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Header / TopNavBar (Shared Component) */}
      <nav className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto">
          <div className="font-display-lg text-display-md font-bold tracking-tighter text-on-surface">ByChi Strands</div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
              Shop
            </a>
            {" "}
            <a className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
              Collections
            </a>
            {" "}
            <a className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
              Services
            </a>
            {" "}
            <a className="font-body-md text-body-sm uppercase tracking-widest text-primary font-semibold border-b border-primary pb-1" href="#">
              Academy
            </a>
            {" "}
            <a className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
              About
            </a>
          </div>
          {" "}
          <div className="flex items-center space-x-6">
            <button className="hidden md:block bg-on-surface text-surface px-6 py-2 text-label-caps uppercase tracking-widest hover:bg-primary-container transition-all duration-300 scale-95 active:scale-100">
              Book Appointment
            </button>
            {" "}
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-on-surface cursor-pointer scale-95 active:scale-100 transition-transform duration-300" data-icon="shopping_bag">
                shopping_bag
              </span>
              {" "}
              <span className="material-symbols-outlined md:hidden text-on-surface cursor-pointer" data-icon="menu">
                menu
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="CEO of ByChi Strands presenting her luxury hair brand" className="w-full h-full object-cover brightness-[0.9]" src="/stitch/img-116.jpg" />
          {" "}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        {" "}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop py-section-padding">
          <div className="max-w-2xl fade-up" id="hero-content">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block mb-6">
              Masterclass Enrollment Now Open
            </span>
            {" "}
            <h1 className="font-display-lg text-display-lg text-on-surface mb-8 leading-tight tracking-[-0.02em]">
              The Art of
              {" "}
              <br />
              the Source:
              {" "}
              <span className="italic font-normal">Vietnam</span>
            </h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-12 leading-relaxed">
              A comprehensive Vietnam Hair Importation Masterclass designed for entrepreneurs who demand nothing less than hair industry excellence. Learn to bridge the gap between factory floors and luxury storefronts.
            </p>
            {" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <a className="bg-on-surface text-white px-10 py-5 text-label-caps uppercase tracking-widest text-center btn-primary-interaction" href="#enroll">
                Apply for Intake
              </a>
              {" "}
              <a className="border border-primary text-primary px-10 py-5 text-label-caps uppercase tracking-widest text-center hover:bg-primary hover:text-white transition-all duration-300" href="#curriculum">
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Academy Ethos / Subtle Branding */}
      <section className="ivory-bg py-section-padding border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center items-center">
            <div className="fade-up">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Elite Sourcing</h3>
              {" "}
              <p className="font-body-md text-body-sm text-on-surface-variant">Uncover the hidden trade routes of premium Vietnamese raw strands.</p>
            </div>
            {" "}
            <div className="fade-up">
              <div className="w-px h-24 bg-outline-variant/40 mx-auto hidden md:block"></div>
              {" "}
              <div className="md:hidden w-24 h-px bg-outline-variant/40 mx-auto my-8"></div>
            </div>
            {" "}
            <div className="fade-up">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Authority Scaling</h3>
              {" "}
              <p className="font-body-md text-body-sm text-on-surface-variant">
                Transform your importation business into a globally recognized luxury brand.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Curriculum Grid */}
      <section className="py-section-padding bg-surface" id="curriculum">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                The Blueprint
              </span>
              {" "}
              <h2 className="font-display-md text-display-md text-on-surface tracking-[-0.01em]">Curated Mastery</h2>
            </div>
            {" "}
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Four intensive pillars designed to navigate the complexities of high-end hair commerce.
            </p>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" data-alt="A macro close-up of high-quality raw Vietnamese hair bundles being inspected under warm, soft studio lighting. The texture is silky and lustrous, showcasing individual strands with a premium champagne gold glow. Minimalist and editorial style." src="/stitch/img-124.jpg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 01</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Factory Direct Sourcing</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  Bypassing the middleman to negotiate directly with the heart of Vietnam's top hair manufacturers.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" data-alt="A professional workspace with a minimalist white desk featuring high-end tools for hair grading. There are notebooks, a golden scale, and pristine hair samples neatly arranged. The lighting is crisp and bright, creating a clean editorial aesthetic for a luxury beauty business." src="/stitch/img-087.jpg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 02</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Grading Mastery</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  Developing the expert eye to distinguish between authentic raw hair and processed imitations.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" data-alt="An elegant, modern office space with large windows, ivory walls, and minimalist gold accents. A person's hands are seen working on a sleek laptop next to a glass of champagne, symbolizing the growth and success of a luxury brand. Soft, diffused daylight fills the room." src="/stitch/img-048.jpg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 03</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Scaling Your Brand</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  Advanced logistics and inventory management strategies for global distribution at scale.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" data-alt="A high-fashion magazine layout concept featuring ByChi Strands products. The design uses asymmetrical grids, ample white space, and bold serif typography. The lighting is high-key and prestigious, evoking the feeling of a Dior or Chanel advertisement in a luxury hair context." src="/stitch/img-050.jpg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 04</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Marketing for Luxury</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  The editorial approach to social media and digital presence that attracts high-net-worth clientele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Proof / Testimonials */}
      <section className="ivory-bg py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-24">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-4">
              The Success Circle
            </span>
            {" "}
            <h2 className="font-display-md text-display-md text-on-surface tracking-[-0.01em]">Trusted by the Best</h2>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Testimonial 1 */}
            <div className="bg-white p-10 border border-outline-variant/30 flex flex-col justify-between h-full fade-up">
              <div>
                <div className="flex text-primary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                {" "}
                <p className="font-body-md text-body-md italic text-on-surface-variant mb-10 leading-relaxed">
                  "Before the masterclass, I was struggling with inconsistent quality. ByChi's sourcing secrets changed my business overnight. My salon is now fully stocked with the finest raw hair."
                </p>
              </div>
              {" "}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="A portrait of a confident African American woman with elegant, sleek hair and subtle gold jewelry. She is wearing a professional ivory blazer and looking warmly towards the camera. The background is a soft-focus luxury salon interior." src="/stitch/img-012.jpg" />
                </div>
                {" "}
                <div>
                  <p className="font-body-md font-bold text-on-surface text-sm uppercase tracking-widest">Anita M.</p>
                  {" "}
                  <p className="font-body-sm text-primary text-xs">Salon Owner, London</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-10 border border-outline-variant/30 flex flex-col justify-between h-full fade-up">
              <div>
                <div className="flex text-primary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                {" "}
                <p className="font-body-md text-body-md italic text-on-surface-variant mb-10 leading-relaxed">
                  "The scaling module was the missing piece. I went from importing 10kg to 100kg a month with total confidence in my supply chain. This is the only training you need."
                </p>
              </div>
              {" "}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="A sophisticated woman with long, voluminous burgundy waves, similar to the CEO's style, wearing a chic red dress. She has a bright, successful smile. The background is a bright, high-end showroom with minimalist decor." src="/stitch/img-051.jpg" />
                </div>
                {" "}
                <div>
                  <p className="font-body-md font-bold text-on-surface text-sm uppercase tracking-widest">Sarah J.</p>
                  {" "}
                  <p className="font-body-sm text-primary text-xs">CEO, Crown Luxe</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-10 border border-outline-variant/30 flex flex-col justify-between h-full fade-up">
              <div>
                <div className="flex text-primary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {" "}
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                {" "}
                <p className="font-body-md text-body-md italic text-on-surface-variant mb-10 leading-relaxed">
                  "The marketing strategies taught here are world-class. My brand aesthetic now reflects the high price point of my hair products, and the customers have responded amazingly."
                </p>
              </div>
              {" "}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="A portrait of a stylish entrepreneur with a sleek ponytail and minimal, expensive-looking makeup. She is in a high-key studio setting with a clean, ivory-toned background that matches the brand's luxury aesthetic." src="/stitch/img-018.jpg" />
                </div>
                {" "}
                <div>
                  <p className="font-body-md font-bold text-on-surface text-sm uppercase tracking-widest">Zainab O.</p>
                  {" "}
                  <p className="font-body-sm text-primary text-xs">Founder, Strands Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enrollment CTA Form */}
      <section className="py-section-padding bg-background overflow-hidden relative" id="enroll">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block"></div>
        {" "}
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="fade-up">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                Limited Intake
              </span>
              {" "}
              <h2 className="font-display-md text-display-md text-on-surface mb-8 tracking-[-0.01em]">Secure Your Legacy</h2>
              {" "}
              <p className="font-body-xl text-body-xl text-on-surface-variant mb-12 max-w-lg leading-relaxed">
                To maintain our standard of excellence, we accept only 12 students per intake. Apply now to be considered for the next session.
              </p>
              {" "}
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  {" "}
                  <span className="font-body-md text-on-surface">Direct Contact with 3 Verified Factories</span>
                </li>
                {" "}
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  {" "}
                  <span className="font-body-md text-on-surface">Lifetime Access to Private Sourcing Community</span>
                </li>
                {" "}
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  {" "}
                  <span className="font-body-md text-on-surface">1-on-1 Branding Strategy Audit</span>
                </li>
              </ul>
            </div>
            {" "}
            <div className="bg-white p-8 md:p-12 border border-outline-variant/30 luxury-shadow relative z-10 fade-up">
              <form className="space-y-8">
                <div>
                  <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Full Name</label>
                  {" "}
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md" placeholder="Enter your name" type="text" />
                </div>
                {" "}
                <div>
                  <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Email Address</label>
                  {" "}
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md" placeholder="Enter your email" type="email" />
                </div>
                {" "}
                <div>
                  <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Business Type</label>
                  {" "}
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md appearance-none">
                    <option>Aspiring Entrepreneur</option>
                    {" "}
                    <option>Salon Owner</option>
                    {" "}
                    <option>Retailer / Distributor</option>
                    {" "}
                    <option>Other</option>
                  </select>
                </div>
                {" "}
                <div>
                  <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Message / Goals</label>
                  {" "}
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 transition-all duration-300 font-body-md" placeholder="What do you hope to achieve?" rows={3}></textarea>
                </div>
                {" "}
                <button className="w-full bg-on-surface text-white py-6 text-label-caps uppercase tracking-widest btn-primary-interaction mt-4" type="submit">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer (Shared Component) */}
      <footer className="bg-surface-container-low border-t border-outline-variant/20 pt-section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="font-display-md text-headline-lg text-primary mb-8">ByChi Strands</div>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed">
              Elevating the hair industry through education and premium Vietnamese sourcing.
            </p>
          </div>
          {" "}
          <div>
            <h5 className="font-label-caps text-xs tracking-widest text-on-surface uppercase mb-8">Navigation</h5>
            {" "}
            <ul className="space-y-4">
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="#">
                  Instagram
                </a>
              </li>
              {" "}
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="#">
                  TikTok
                </a>
              </li>
              {" "}
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="#">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <h5 className="font-label-caps text-xs tracking-widest text-on-surface uppercase mb-8">Legal</h5>
            {" "}
            <ul className="space-y-4">
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="#">
                  Privacy Policy
                </a>
              </li>
              {" "}
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="#">
                  Terms of Service
                </a>
              </li>
              {" "}
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="#">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <h5 className="font-label-caps text-xs tracking-widest text-on-surface uppercase mb-8">Connect</h5>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant mb-6">Receive exclusive updates on masterclasses and inventory arrivals.</p>
            {" "}
            <div className="flex">
              <input className="bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-2 text-sm w-full font-body-md" placeholder="Email" type="email" />
              {" "}
              <button className="border-b border-outline-variant hover:border-primary transition-colors px-2">
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        {" "}
        <div className="max-w-container-max mx-auto px-margin-desktop pt-8 border-t border-outline-variant/10 text-center">
          <p className="font-body-md text-body-sm text-on-surface-variant/60">© 2024 ByChi Strands. Timeless Vietnamese Artistry.</p>
        </div>
      </footer>
    </div>
  );
}
