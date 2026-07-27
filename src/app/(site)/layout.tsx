import { RevealObserver } from "@/components/stitch/Reveal";
import { CartUiProvider } from "@/components/stitch/CartDrawer";
import { StoreBridge } from "@/components/stitch/StoreBridge";
import { Interactions } from "@/components/stitch/Interactions";
import { ToastProvider } from "@/components/stitch/Toast";
import { MobileMenu } from "@/components/stitch/MobileMenu";

/**
 * The Aura of Silk screens each ship their own header and footer, so this
 * layout adds no chrome. It mounts the behaviour the screens' inline scripts
 * described, plus the cart drawer they reference. Screen CSS is imported from
 * globals.css, which controls its cascade position.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <CartUiProvider>
        {children}
        <RevealObserver />
        <Interactions />
        <StoreBridge />
        <MobileMenu />
      </CartUiProvider>
    </ToastProvider>
  );
}
