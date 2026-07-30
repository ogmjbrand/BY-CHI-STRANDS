"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    "bg-on-surface text-surface hover:bg-primary hover:text-on-primary transition-all duration-500",
  outline:
    "border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors duration-300",
};

const BASE =
  "inline-flex items-center justify-center gap-2 py-4 px-8 font-label-caps text-label-caps uppercase tracking-widest";

interface SharedProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * The two CTA idioms already repeated by hand across ProductConfigurator,
 * ShopBrowser and the new editorial sections — primary (solid, inverts on
 * hover) and outline (hairline border, fills on hover). Renders a Link when
 * `href` is given, a <button> otherwise.
 */
export function Cta(props: ButtonProps | LinkProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const cls = `${BASE} ${VARIANT_CLASS[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href as string} className={cls} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
