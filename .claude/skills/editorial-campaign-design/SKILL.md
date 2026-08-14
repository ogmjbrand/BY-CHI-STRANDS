---
name: editorial-campaign-design
description: The dark-editorial campaign design system for ByChi Strands — product-as-composition, oversized type, a drawn organic path, layered depth, and a staged motion hierarchy. Use when designing or rebuilding any ByChi page or section, and especially when composing a mobile breakpoint, which is art-directed separately rather than shrunk from desktop.
---

# Editorial campaign design — the ByChi system

Reference: a dark editorial beverage campaign, analysed by the client. The
brief is to take the *system*, not the artwork. Green becomes gold, a coffee
cup becomes hair, a drawn line becomes a strand.

## The one idea

A normal site says "here is our product". This system says **"here is our
world, and the product lives inside it."** The product is not placed in a
card surrounded by UI — the product *is* the composition, and it breaks the
boundaries of its container.

## Hierarchy — in this order, always

1. Product / image
2. Brand identity
3. Main statement
4. Decorative graphic element
5. Supporting information
6. CTA
7. Navigation

Navigation is last. It should never compete with the hero.

## Palette

Black + white + one accent + photography. Nothing else — that restraint is
what reads as expensive.

| Token | ByChi value | Reference value |
|---|---|---|
| Background | `#0b0907` | `#050505` |
| Surface | `#141110` | `#0b0b0b` |
| Accent | `#c8a45d` (gold) | `#03714b` (emerald) |
| Accent on cream | `#8b6244` | — |
| Text primary | `#f5f0e8` (warm, never pure white) | `#ffffff` |
| Text secondary | `white/55` | `#a7a7a7` |
| Border | `white/12–15` | `rgba(255,255,255,.12)` |

**Accent contrast trap:** `#c8a45d` on the cream `#f5f0e8` ground is ~2:1 —
under the 4.5:1 small text needs. Use `#8b6244` on cream. This has already
bitten once.

## Type

Not every element is loud. Body text is deliberately small.

| Role | Size | Notes |
|---|---|---|
| Display | `clamp(3rem, 11vw, 7.5rem)` | serif, major statements only |
| Section head | `clamp(2.4rem, 10vw, 8rem)` | leading `.74–.9`, tracking `-.04` to `-.065` |
| Eyebrow | 8px, `tracking-[.5em]`, uppercase | with a short accent rule before it |
| Body | 13–14px mobile, 14–16px desktop | leading 6–7 |
| Nav / CTA | 8–9px, `tracking-[.32em]`, uppercase | understated on purpose |

## The drawn path

The signature element. A thick illustrative stroke — not a UI border — that
curves **around and behind** the product. For ByChi it is a strand, ribbon or
gold contour, never a literal copy of the reference's line.

It does five jobs: branding, motion, composition, depth, and eye direction.

Implementation: an inline SVG path, stroke ~2–6px on a phone (the reference's
62px is at artboard scale), animated with `stroke-dasharray` /
`stroke-dashoffset` so it **draws on** rather than fading in. `opacity: 0 → 1`
is not a substitute — the shape itself has to move.

## Layering

```
background → texture → product → decorative path → badges → headline → CTA
```

Elements must **cross over** each other. `path → product → path` reads as
depth; `background → product → everything on top` does not.

## Badges

Small stickers/seals near the product. Functionally unnecessary, and that is
the point — they carry brand personality. **Keep them small**: the contrast of
a huge product against tiny details is the premium move. For ByChi, only
truthful ones: `Raw Vietnamese`, `HD lace`, `Hand-tied`, `Super Double Drawn`.

## Motion hierarchy

Stagger it. Everything on the same timing reads mechanical.

| Level | Element | Window |
|---|---|---|
| 1 | Product settles | 200–400ms |
| 2 | Path draws | 400–900ms |
| 3 | Headline | 700–1200ms |
| 4 | Badges, supporting copy | 1000–1400ms |
| 5 | CTA | 1200–1600ms |

Eye path: **product → graphic → message → action.**

Easing: `ease-out` for entrances, `cubic-bezier(.22,1,.36,1)` for the
premium ones. No bounce — it fights the art direction. Everything respects
`prefers-reduced-motion`: no draw, no stagger, no auto-advance.

## Responsive philosophy — the important part

**Do not shrink desktop into mobile.** Each breakpoint gets its own
composition while sharing colours, type, spacing, components, imagery and
motion language.

- **Desktop** — horizontal, asymmetric, large product, full path, several
  floating elements.
- **Tablet** — fewer floating elements, smaller path.
- **Mobile** — *recomposed*: stacked but still layered. Eyebrow → oversized
  headline → product with the path crossing it → badges → one primary CTA.

The house rule that supersedes this when they conflict: **the client has
asked that mobile stay recognisably the same design as desktop.** Recompose
the geometry; never drop a section, a caption or a chapter to save height.
Verify with the desktop-vs-mobile visible-element diff (see below).

## Spacing and grid

4/8 scale: 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Hero compositions may
exceed it. Page gutters 24px mobile, 40px md, 64px lg. Section padding 96px
mobile, 144px desktop.

Grid: 12 columns desktop / 8 tablet / 4 mobile. Asymmetry comes from column
placement — headline 1–5, product 4–9, copy 9–12, CTA 10–12.

Radius: mostly sharp. Pills for small UI only. Heavy rounding and
glassmorphism weaken this style.

## Non-negotiables for this repo

- **Never fabricate.** No invented testimonials, stats, prices, awards or
  press. Badge text must be true of the actual product.
- **Desktop is protected.** Capture a baseline of desktop page heights before
  any responsive work and re-check after; drift must be zero.
- **Prove parity.** Diff every visible text node and rendered image/video at
  1440 against 390. Anything on desktop and not on mobile is either fixed or
  explained.
- **Sweep the breakpoints.** 320/360/375/390/414/430/768/1024/1280/1440/1920,
  checking horizontal overflow, duplicate chrome, heading-level jumps,
  zero-height media, console errors and 4xx.
