import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_student_dashboard
 * "Student Dashboard | ByChi Strands Academy"
 */

export const metadata: Metadata = {
  title: "Student Dashboard",
};

export default function StudentDashboardPage() {
  return (
    <div className="scr-student-dashboard font-body-md text-on-surface">
      {/* TopNavBar (Fixed) */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/50 shadow-sm flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto left-0 right-0">
        <div className="font-display-md text-display-md text-primary tracking-tight">Aura of Silk</div>
        {" "}
        <div className="hidden md:flex items-center gap-8 font-manrope text-body-md">
          <a className="text-primary font-semibold border-b-2 border-primary pb-1" href="#">Overview</a>
          {" "}
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Curriculum</a>
          {" "}
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Resource Library</a>
        </div>
        {" "}
        <div className="flex items-center gap-6">
          <button className="hover:opacity-80 transition-opacity duration-300">
            <span className="material-symbols-outlined text-primary">notifications</span>
          </button>
          {" "}
          <button className="hover:opacity-80 transition-opacity duration-300">
            <span className="material-symbols-outlined text-primary">shopping_bag</span>
          </button>
          {" "}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
            <img className="w-full h-full object-cover" data-alt="A sophisticated professional portrait of a young woman with elegant, high-gloss hair styling, wearing a minimalist silk blouse. She is positioned against a soft, ivory background with warm studio lighting that highlights the texture of her hair and skin, embodying a high-fashion editorial aesthetic suitable for a luxury beauty academy." src="/stitch/img-033.jpg" />
          </div>
        </div>
      </nav>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-surface-container-low flex flex-col gap-4 p-6 pt-24 hidden md:flex">
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Academy Portal</h2>
          {" "}
          <p className="font-manrope text-body-sm text-on-surface-variant opacity-70">Student Dashboard</p>
        </div>
        {" "}
        <nav className="flex-1 flex flex-col gap-2">
          <a className="flex items-center gap-3 p-3 text-primary font-bold bg-secondary-container/30 rounded-lg transition-all duration-300" href="#">
            <span className="material-symbols-outlined active-tab">dashboard</span>
            {" "}
            <span>Overview</span>
          </a>
          {" "}
          <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all duration-300 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">auto_stories</span>
            {" "}
            <span>Curriculum</span>
          </a>
          {" "}
          <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all duration-300 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">folder_shared</span>
            {" "}
            <span>Resource Library</span>
          </a>
          {" "}
          <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all duration-300 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">diversity_3</span>
            {" "}
            <span>Mentorship</span>
          </a>
          {" "}
          <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all duration-300 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
            {" "}
            <span>Settings</span>
          </a>
        </nav>
        {" "}
        <div className="mt-auto p-4 bg-primary-container/20 rounded-xl">
          <p className="text-label-caps text-on-primary-container mb-2 tracking-[0.15em]">PRO ACCESS</p>
          {" "}
          <p className="text-body-sm text-on-surface mb-4">Unlock advanced masterclasses and 1-on-1 calls.</p>
          {" "}
          <button className="w-full bg-on-surface text-surface py-2 rounded font-label-caps hover:bg-primary transition-soft">
            Upgrade to Pro
          </button>
        </div>
      </aside>
      {/* Main Content Area */}
      <main className="md:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Personalized Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-section-padding">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-label-caps text-primary tracking-widest mb-4">MEMBER SINCE 2024</span>
            {" "}
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 tracking-[-0.02em]">Welcome Back, Alexandra</h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant italic mb-8 max-w-lg border-l-2 border-primary-container pl-6">
              "Sophistication is not about being noticed, it's about being remembered." — The ByChi Philosophy
            </p>
            {" "}
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-on-surface text-surface font-label-caps tracking-widest flex items-center gap-2 hover:bg-primary transition-soft luxury-shadow">
                Resume Lesson
                {" "}
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
              {" "}
              <button className="px-8 py-4 border border-primary-container text-primary font-label-caps tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-soft">
                View Schedule
              </button>
            </div>
          </div>
          {" "}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg luxury-shadow">
              <img className="w-full h-full object-cover transition-soft group-hover:scale-105" data-alt="A high-fashion editorial image featuring a luxury hair stylist working on an intricate, voluminous hairstyle for a model. The setting is a minimalist, ivory-toned studio with golden light spilling from the side, creating long, soft shadows. The focus is on the precision of the hands and the silk-like quality of the deep burgundy hair strands." src="/stitch/img-104.jpg" />
            </div>
            {" "}
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 luxury-shadow max-w-[200px] border border-outline-variant/30">
              <p className="font-display-md text-primary">08</p>
              {" "}
              <p className="font-label-caps text-on-surface-variant leading-tight">Masterclasses Completed This Month</p>
            </div>
          </div>
        </section>
        {/* Learning Progress: The Four Pillars */}
        <section className="mb-section-padding">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">The Four Pillars of Mastery</h2>
              {" "}
              <p className="text-on-surface-variant opacity-60">Tracking your journey to technical excellence</p>
            </div>
            {" "}
            <button className="text-label-caps text-primary border-b border-primary hover:opacity-70 transition-opacity tracking-[0.15em]">
              Full Curriculum View
            </button>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Pillar 1 */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/20 hover:border-primary-container/50 transition-soft">
              <p className="font-label-caps text-tertiary mb-8">PILLAR I</p>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Elite Grading</h3>
              {" "}
              <div className="w-full h-[2px] bg-outline-variant mb-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: "65%" }}></div>
              </div>
              {" "}
              <div className="flex justify-between items-center">
                <span className="text-body-sm font-semibold text-primary">65% Complete</span>
                {" "}
                <span className="material-symbols-outlined text-primary-container">verified</span>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/20 hover:border-primary-container/50 transition-soft">
              <p className="font-label-caps text-tertiary mb-8">PILLAR II</p>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Architectural Cut</h3>
              {" "}
              <div className="w-full h-[2px] bg-outline-variant mb-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: "40%" }}></div>
              </div>
              {" "}
              <div className="flex justify-between items-center">
                <span className="text-body-sm font-semibold text-primary">40% Complete</span>
                {" "}
                <span className="material-symbols-outlined text-outline">pending</span>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/20 hover:border-primary-container/50 transition-soft">
              <p className="font-label-caps text-tertiary mb-8">PILLAR III</p>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Silk Installation</h3>
              {" "}
              <div className="w-full h-[2px] bg-outline-variant mb-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: "15%" }}></div>
              </div>
              {" "}
              <div className="flex justify-between items-center">
                <span className="text-body-sm font-semibold text-primary">15% Complete</span>
                {" "}
                <span className="material-symbols-outlined text-outline">lock</span>
              </div>
            </div>
            {/* Pillar 4 */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/20 hover:border-primary-container/50 transition-soft">
              <p className="font-label-caps text-tertiary mb-8">PILLAR IV</p>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Boutique Business</h3>
              {" "}
              <div className="w-full h-[2px] bg-outline-variant mb-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: "0%" }}></div>
              </div>
              {" "}
              <div className="flex justify-between items-center">
                <span className="text-body-sm font-semibold text-tertiary">Not Started</span>
                {" "}
                <span className="material-symbols-outlined text-outline">lock</span>
              </div>
            </div>
          </div>
        </section>
        {/* Dynamic Grid: Live Session & Toolkit */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-section-padding">
          {/* High Impact Live Session Card */}
          <div className="lg:col-span-2 relative h-[500px] group overflow-hidden rounded-xl">
            <img className="absolute inset-0 w-full h-full object-cover transition-soft group-hover:scale-110" data-alt="A cinematic, low-light shot of a luxury hair studio. A master stylist is silhouetted against a softly glowing warm lamp, with premium hair extensions draped elegantly over a golden stand in the foreground. The mood is exclusive, professional, and artistic, emphasizing the craft of high-end hair design." src="/stitch/img-105.jpg" />
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            {" "}
            <div className="absolute bottom-0 p-12 w-full flex flex-col items-start">
              <span className="px-4 py-1 bg-primary text-white text-label-caps rounded-full mb-4 tracking-[0.15em]">
                LIVE MASTERCLASS
              </span>
              {" "}
              <h2 className="font-display-md text-white mb-4">Advanced Frontal Melt: The Invisible Stitch</h2>
              {" "}
              <div className="flex items-center gap-6 text-white/80 font-manrope mb-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">calendar_month</span>
                  {" "}
                  <span>October 12, 2024</span>
                </div>
                {" "}
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">schedule</span>
                  {" "}
                  <span>7:00 PM GMT</span>
                </div>
              </div>
              {" "}
              <button className="bg-white text-on-surface px-10 py-4 font-label-caps tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-soft">
                Add to Calendar
              </button>
            </div>
          </div>
          {/* Toolkit Grid */}
          <div className="flex flex-col gap-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">The Knowledge Vault</h2>
            {" "}
            <div className="grid grid-cols-1 gap-4">
              <a className="group flex items-center gap-4 p-6 bg-surface-container border border-outline-variant/30 hover:border-primary transition-soft" href="#">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg">
                  <span className="material-symbols-outlined text-primary">menu_book</span>
                </div>
                {" "}
                <div>
                  <p className="font-manrope font-semibold text-on-surface">Curated Resources</p>
                  {" "}
                  <p className="text-body-sm text-on-surface-variant">Download templates & guides</p>
                </div>
                {" "}
                <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </a>
              {" "}
              <a className="group flex items-center gap-4 p-6 bg-surface-container border border-outline-variant/30 hover:border-primary transition-soft" href="#">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg">
                  <span className="material-symbols-outlined text-primary">diversity_1</span>
                </div>
                {" "}
                <div>
                  <p className="font-manrope font-semibold text-on-surface">Mentorship Booking</p>
                  {" "}
                  <p className="text-body-sm text-on-surface-variant">Schedule your 1-on-1 critique</p>
                </div>
                {" "}
                <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </a>
              {" "}
              <a className="group flex items-center gap-4 p-6 bg-surface-container border border-outline-variant/30 hover:border-primary transition-soft" href="#">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg">
                  <span className="material-symbols-outlined text-primary">groups</span>
                </div>
                {" "}
                <div>
                  <p className="font-manrope font-semibold text-on-surface">Private Community</p>
                  {" "}
                  <p className="text-body-sm text-on-surface-variant">Connect with elite alumni</p>
                </div>
                {" "}
                <span className="material-symbols-outlined ml-auto text-outline group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </a>
            </div>
            {" "}
            <div className="mt-auto aspect-square rounded-xl overflow-hidden relative">
              <img className="w-full h-full object-cover" data-alt="A macro shot of premium raw human hair with a healthy shine and rich texture, styled into a smooth wave. The lighting is bright and high-key, emphasizing the quality and 'silkiness' of the product, set against a clean ivory backdrop consistent with luxury branding." src="/stitch/img-066.jpg" />
              {" "}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center p-8 text-center backdrop-blur-[2px]">
                <p className="font-headline-lg text-on-surface-variant">"Precision is the hallmark of prestige."</p>
              </div>
            </div>
          </div>
        </section>
        {/* Recent Activity / Grades */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Academic Performance</h2>
            {" "}
            <span className="text-body-sm text-primary font-semibold">Average Grade: A-</span>
          </div>
          {" "}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/50">
                  <th className="text-left py-4 font-label-caps text-on-surface-variant opacity-60">MODULE / TASK</th>
                  {" "}
                  <th className="text-left py-4 font-label-caps text-on-surface-variant opacity-60">STATUS</th>
                  {" "}
                  <th className="text-left py-4 font-label-caps text-on-surface-variant opacity-60">GRADE</th>
                  {" "}
                  <th className="text-right py-4 font-label-caps text-on-surface-variant opacity-60">FEEDBACK</th>
                </tr>
              </thead>
              {" "}
              <tbody>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-6">
                    <p className="font-manrope font-medium text-on-surface">Introduction to Raw Hair Grading</p>
                    {" "}
                    <p className="text-body-sm text-on-surface-variant">Completed on Oct 05, 2024</p>
                  </td>
                  {" "}
                  <td>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Passed</span>
                  </td>
                  {" "}
                  <td className="font-headline-lg text-primary">A+</td>
                  {" "}
                  <td className="text-right">
                    <button className="text-label-caps text-on-surface hover:text-primary transition-colors tracking-[0.15em]">
                      View Mentor Comments
                    </button>
                  </td>
                </tr>
                {" "}
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-6">
                    <p className="font-manrope font-medium text-on-surface">Scalp Anatomy & Adhesive Science</p>
                    {" "}
                    <p className="text-body-sm text-on-surface-variant">Completed on Sept 28, 2024</p>
                  </td>
                  {" "}
                  <td>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Passed</span>
                  </td>
                  {" "}
                  <td className="font-headline-lg text-primary">A</td>
                  {" "}
                  <td className="text-right">
                    <button className="text-label-caps text-on-surface hover:text-primary transition-colors tracking-[0.15em]">
                      View Mentor Comments
                    </button>
                  </td>
                </tr>
                {" "}
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors opacity-50">
                  <td className="py-6">
                    <p className="font-manrope font-medium text-on-surface">Architecture of the Bob Cut</p>
                    {" "}
                    <p className="text-body-sm text-on-surface-variant">Assignment Pending</p>
                  </td>
                  {" "}
                  <td>
                    <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs rounded-full">In Progress</span>
                  </td>
                  {" "}
                  <td className="font-headline-lg text-outline">—</td>
                  {" "}
                  <td className="text-right">
                    <button className="text-label-caps text-outline cursor-not-allowed tracking-[0.15em]">No Feedback Yet</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-8 mt-auto bg-surface-bright border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto">
        <p className="font-manrope text-label-caps text-on-surface-variant mb-4 md:mb-0 tracking-[0.15em]">
          © 2024 ByChi Strands Academy. All rights reserved.
        </p>
        {" "}
        <div className="flex gap-8">
          <a className="font-manrope text-label-caps text-on-tertiary-fixed-variant hover:text-primary hover:underline transition-all tracking-[0.15em]" href="#">
            Privacy Policy
          </a>
          {" "}
          <a className="font-manrope text-label-caps text-on-tertiary-fixed-variant hover:text-primary hover:underline transition-all tracking-[0.15em]" href="#">
            Terms of Service
          </a>
          {" "}
          <a className="font-manrope text-label-caps text-on-tertiary-fixed-variant hover:text-primary hover:underline transition-all tracking-[0.15em]" href="#">
            Support
          </a>
        </div>
      </footer>
      {/* Mobile Nav (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 flex justify-around p-4 z-50">
        <button className="flex flex-col items-center text-primary">
          <span className="material-symbols-outlined active-tab">dashboard</span>
          {" "}
          <span className="text-[10px] uppercase mt-1 font-bold">Home</span>
        </button>
        {" "}
        <button className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">auto_stories</span>
          {" "}
          <span className="text-[10px] uppercase mt-1">Course</span>
        </button>
        {" "}
        <button className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">diversity_3</span>
          {" "}
          <span className="text-[10px] uppercase mt-1">Chat</span>
        </button>
        {" "}
        <button className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          {" "}
          <span className="text-[10px] uppercase mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
}
