"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { adminSections } from "@/lib/admin";

export function AdminNav() {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Analytics" },
    ...adminSections.map((s) => ({ href: `/admin/${s.slug}`, label: s.title })),
    { href: "/admin/settings", label: "Settings" },
  ];

  return (
    <aside className="flex w-full shrink-0 flex-col bg-on-surface text-surface lg:min-h-svh lg:w-64">
      <Link
        href="/"
        className="flex items-center gap-3 px-6 py-6 transition-opacity hover:opacity-80"
      >
        <span className="font-display-md text-headline-lg tracking-widest text-primary-container uppercase">
          Aura of Silk
        </span>
      </Link>
      <p className="font-label-caps text-label-caps uppercase tracking-widest border-y border-surface/10 px-6 py-3 text-primary-fixed-dim">
        House Management
      </p>
      <nav aria-label="Admin" className="flex-1 overflow-x-auto py-4 lg:overflow-visible">
        <ul className="flex gap-1 px-3 lg:flex-col">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="shrink-0">
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block px-3 py-2.5 font-body-md text-body-sm tracking-wide transition-colors",
                    active
                      ? "border-l-2 border-primary-container bg-surface/5 text-primary-fixed"
                      : "border-l-2 border-transparent text-surface/60 hover:text-surface"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hidden border-t border-surface/10 px-6 py-5 lg:block">
        <p className="font-body-md text-body-sm text-surface/40">
          Signed in as{" "}
          <span className="text-surface/70">chi@bychistrands.com</span>
        </p>
        <Link
          href="/"
          className="font-label-caps text-label-caps uppercase tracking-widest mt-3 inline-block text-primary-fixed-dim border-b border-primary-container pb-1"
        >
          View storefront
        </Link>
      </div>
    </aside>
  );
}
