# ByChiStrands — Luxury Vietnamese Hair

*Worn like a crown. Kept like an heirloom.*

The flagship digital experience for **ByChiStrands**: raw Vietnamese hair, single-donor reserve, the wig atelier, colour editions, lace essentials, atelier services and the Hair Importation Academy.

## Run it

```bash
npm install
npm run dev        # development — http://localhost:3000
npm run build      # production build (all routes prerendered)
npm run start      # serve the production build
```

If port 3000 is busy: `npx next start -p 3105`.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript, static prerendering of all 64 routes)
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` (`@theme` block)
- **Framer Motion** — reveals, parallax hero, carousel, page furniture
- Cart / wishlist / recently-viewed persist in `localStorage` via `src/context/StoreContext.tsx`

## Where things live

| Area | Path |
| --- | --- |
| Design tokens (colors, type scale, motion) | `src/app/globals.css` |
| Site config (contacts, socials, nav) | `src/lib/site.ts` |
| Products, tones, textures, pricing | `src/lib/products.ts` |
| Collections / services / journal / FAQs / testimonials | `src/lib/*.ts` |
| Storefront pages | `src/app/(site)/…` |
| Admin panel (mock data) | `src/app/admin/…` + `src/lib/admin.ts` |
| Procedural product artwork | `src/components/art/StrandArt.tsx` |
| SEO: sitemap, robots, JSON-LD | `src/app/sitemap.ts`, `src/app/robots.ts`, per-page |

## The artwork

Products currently render **procedural strand art** — deterministic SVG drawn from each product's tone and texture — so the site looks art-directed before photography exists. To move to real photos: add images under `public/images/products/<slug>/` and swap `StrandArt` for `next/image` in `ProductCard`, `ProductGallery`, and the cart/checkout thumbnails. Everything else stays.

## Wiring the real backend (already staged)

- **Payments** — `src/app/(site)/checkout/page.tsx` marks where Stripe connects (`STRIPE_SECRET_KEY`).
- **Auth + data** — the account page and admin panel run on preview data; swap the mock arrays in `src/lib/admin.ts` for Supabase queries and gate `/admin` behind Supabase auth with role checks.
- **Email / WhatsApp** — booking + checkout confirmations state the intended flow (Resend + WhatsApp reminders); trigger them from route handlers when keys exist.
- **Newsletter** — `Newsletter.tsx` validates and succeeds locally; point `subscribe()` at your ESP.

Prices are USD; change the default currency in `src/lib/utils.ts` (`formatPrice`).
