import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col items-center justify-center px-margin-mobile text-center">
      <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-8">
        Error 404
      </span>
      <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8 max-w-2xl">
        This page has slipped{" "}
        <span className="italic font-normal">the strand.</span>
      </h1>
      <p className="font-body-xl text-body-xl text-on-surface-variant max-w-lg mb-12">
        The page you were looking for is no longer here. Return to the boutique
        and continue where you left off.
      </p>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Link
          className="bg-on-surface text-surface px-12 py-5 rounded-lg font-label-caps tracking-widest hover:bg-primary transition-all duration-500 uppercase"
          href="/"
        >
          Return Home
        </Link>
        <Link
          className="font-label-caps text-on-surface border-b border-primary pb-1 hover:text-primary transition-all uppercase tracking-widest"
          href="/shop"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  );
}
