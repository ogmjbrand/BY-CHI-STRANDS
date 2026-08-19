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

## Every chapter is branded and grounded

Two rules the client asked for directly, in these words: *"add the brand logo
on every section, i want images background on every sections, and the text
should be on the images"*.

**The mark.** Every chapter opens on `SectionMark` — the logo glyph, the words
*ByChi Strands*, a hairline, then the chapter label. It replaces the bare
numbered eyebrow (`01 / …`), so the brand arrives as part of the composition
rather than being pasted on top of it. The glyph is applied as a CSS
`mask-image` over `bg-current`, never as an `<img>`: that is what lets one
file render gold on noir, brown on cream, and white over photography.
`public/brand/logo-glyph.png` is the illustrated head cut from the supplied
logo with the paper keyed to transparency — the lockup's own type is unreadable
below about 100px, which is why the name beside it is set in the house serif.

**The ground.** Every chapter sits on a frame from the scene table, never a
flat fill and never a path written at the point of use. Two placement modes:

- default — the frame is `absolute inset-0` and the chapter's own content
  wrapper carries `relative`.
- `behind` — the frame goes to `-z-10` and the section carries `isolate`. Use
  this where the section *is* the grid, because wrapping a twelve-column grid
  in a div to host a backdrop collapses the layout. The section's own
  background still paints below the frame; an element's background is painted
  before its negative-index children.

Never `overflow-hidden` on the section to contain a backdrop. Overflow on
either axis makes a scroll container, and a scroll container becomes the
containing block for every `position: sticky` descendant.

## One frame, one chapter

The site was drawing eight chapters from four pictures, so the same hair
arrived behind four different headings and the client noticed before we did.
Every scene now names a distinct file, and adding a chapter means adding a
frame rather than reusing one. Grep the scene table for duplicate `src` before
shipping.

Where a real photograph legitimately illustrates the same *service* twice —
the one install photo appears on Services and in The Craft — the reuse stays,
because inventing a second picture of a thing photographed once is worse than
repeating the true one.

What disqualifies a frame, all of which were found in the folder in use:

- another company's branding in shot (a rival's box, a rival's bundle label)
- a "generated by AI" watermark
- a caption burnt into the image
- off-category subject matter
- under ~700px wide — it falls apart across a full-bleed section

## Contrast is measured, not judged

`#c8a45d` on `#f5f0e8` is about 2:1; cream chapters use `#8b6244`. Body copy
on cream at 55–60% ink is roughly 3.7:1 **before** a backdrop is added, so
raising the frame there without darkening the ink pushes it under 4.5:1. The
cream tone is held at 22% opacity under an 80% scrim with 75% ink; noir runs
46% under a 52% scrim, because white at 55% over near-black has room to spare.

Measuring this in-browser is harder than it looks and both obvious approaches
give wrong answers:

- `getComputedStyle(el).color` returns `oklab(...)` under Tailwind v4, so any
  `rgb`-shaped regex silently reads `0.99` as a red channel.
- Percentile luminance over a cropped screenshot swings with how much of the
  crop is ink versus paper, and is not stable enough to gate on.

Resolve colours through a canvas `fillStyle` round-trip, or read the composited
pixels and eyeball the render. **And run exactly one dev server**: overlapping
`next start` processes serve stale chunks, and the resulting "Application
error" page measures as perfect contrast and zero overflow.
