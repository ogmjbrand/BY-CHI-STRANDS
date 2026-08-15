import { RevealObserver } from "@/components/stitch/Reveal";
import { CartUiProvider } from "@/components/stitch/CartDrawer";
import { StoreBridge } from "@/components/stitch/StoreBridge";
import { Interactions } from "@/components/stitch/Interactions";
import { ToastProvider } from "@/components/stitch/Toast";
import { MobileMenu } from "@/components/stitch/MobileMenu";
import { MotionSystem } from "@/components/stitch/MotionSystem";
import { LuxuryCursor } from "@/components/stitch/LuxuryCursor";
import { SmoothScroll } from "@/components/stitch/SmoothScroll";
import { HouseHeader, HouseFooter } from "@/components/flagship/HouseChrome";
import { MobileTabBar } from "@/components/flagship/MobileTabBar";

/**
 * The chrome lives here, once.
 *
 * Every screen used to ship its own header and footer, which is how the site
 * ended up running four header systems plus hand-rolled <nav> blocks and
 * twelve different footers — a different top bar on almost every route. The
 * layout now renders the one house header and footer, and pages render none.
 *
 * Screen CSS is imported from globals.css, which controls its cascade
 * position.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <CartUiProvider>
        <HouseHeader />
        {children}
        <HouseFooter />
        <MobileTabBar />
        <RevealObserver />
        <Interactions />
        <StoreBridge />
        <MobileMenu />
        <MotionSystem />
        <LuxuryCursor />
        <SmoothScroll />
      </CartUiProvider>
    </ToastProvider>
  );
}
