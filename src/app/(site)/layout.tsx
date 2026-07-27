import { RevealObserver } from "@/components/stitch/Reveal";

/**
 * The Aura of Silk screens each ship their own header and footer, so this
 * layout only mounts the shared scroll-reveal observer. Screen CSS is
 * imported from globals.css, which controls its cascade position.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RevealObserver />
    </>
  );
}
