# Solstice Kombucha — Next.js + Tailwind v4

A design/animation replica inspired by the structure of ciaokombucha.com and
bouncyballs.org — a physics-driven bubble hero that drops, bounces, and links
into a router, a "Warrior" section (drifting blobs, staggered rise-in) that
follows it, a rotating flavor dial, scroll-revealed flavor rows, an animated
process strip, and a marquee footer. Branding, copy, colors, and imagery are
original/placeholder — only the animation/interaction patterns are replicated.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4 (CSS-first config via `@theme` in `app/globals.css`)
- No animation or physics library — everything is hand-rolled: CSS keyframes,
  `IntersectionObserver` for scroll reveals, and a small `requestAnimationFrame`
  loop for the bubble physics

## Structure

```
app/
  layout.tsx            Root layout, Google Fonts
  page.tsx               Composes: Header -> Hero -> Warrior -> FlavorDial -> ...
  globals.css             Tailwind v4 @theme tokens + keyframes + .can-shape + bubble styles
  bubble/[id]/page.tsx    Router pages for each bubble (statically generated, ids 1-5)
components/
  Header.tsx              Sticky nav, blurs on scroll
  Hero.tsx                Combined hero: bubble physics layer + embedded Warrior
                           layer, pinned/locked scroll-jack crossfade between them
  Warrior.tsx              Content-only component (blobs, headline, CTAs, cans) —
                           rendered inside Hero's pinned layer, not its own section
  FlavorDial.tsx          Rotating ring + crossfading can + pill selector
  FlavorShowcase.tsx      Alternating scroll-reveal rows
  ProcessStrip.tsx        3-step strip with a connector line that draws in on scroll
  Newsletter.tsx          Footer: signup form, drifting blobs, marquee strip
  Can.tsx                 Reusable CSS-drawn "can" shape
lib/
  flavors.ts              Flavor data
  bubbles.ts               Bubble data (id, title, image, description)
```

## The bouncy hero, in detail

**Entrance.** All 5 bubbles spawn above the stage (negative y) with a staggered
vertical offset, so on load they cascade downward one after another under
gravity rather than all dropping at once.

**Physics.** A single `requestAnimationFrame` loop integrates gravity, then:
- resolves wall/floor/ceiling bounces with restitution (`WALL_RESTITUTION`),
- runs `COLLISION_ITERATIONS` (4) relaxation passes per frame over every
  ball pair — each pass fully separates any overlapping pair positionally and
  applies an impulse along the contact normal (`BALL_RESTITUTION`, currently
  0.86, i.e. bouncier than the wall bounce) — so bubbles converge to
  **never visually overlap**, even in a tight cluster,
- applies cursor repulsion within `REPEL_RADIUS`,
- snaps a ball to a full stop once its velocity is negligible and it's resting
  on the floor, so the scene settles instead of jittering forever.

Positions are written straight to each bubble's DOM node via
`translate3d(...)` from refs (not React state), which is what keeps 5
simultaneously-colliding bubbles smooth.

**Morph/squash.** Each ball tracks a `squash` (0–1) and `squashAngle`. Any
wall or ball impact sets `squash` proportional to impact speed and records the
contact angle; every frame `squash` decays by `SQUASH_DECAY` (0.84) back
toward 0. It's applied as `rotate(angle) scale(1+squash, 1-squash)
rotate(-angle)` layered on top of the position transform — this stretches the
bubble along the contact normal on impact and springs it back to a perfect
circle at rest, which is the "morph then settle into a sphere" effect.

**Hover.** Each bubble is a `next/link` to `/pages/[id]`. Hover/focus fades
the sample image out, fades a title card in, and brings up a conic-gradient
ring that spins clockwise (`.bubble-glow`, `.bubble-image`, `.bubble-title`
in `globals.css`).

**Locked scroll transition into Warrior.** `Hero` and `Warrior` are now one
combined component/section rather than two separate ones — `Warrior.tsx` is a
plain content component (no section wrapper, no own height) that `Hero.tsx`
renders as a second absolutely-positioned layer inside the same `position:
sticky` pinned box as the bubbles. `Hero`'s outer `<section>` is sized
`100svh + (HOLD_VH + TRANSITION_VH)vh` (constants at the top of `Hero.tsx`,
currently 25vh hold + 90vh transition):

- **Hold phase** (`0` → `HOLD_VH` scrolled): the section is pinned and fully
  locked — the bubble layer stays exactly as-is, no transform, full opacity.
- **Transition phase** (`HOLD_VH` → `HOLD_VH + TRANSITION_VH` scrolled): a
  scroll listener computes `t` (0→1) over that range and drives both layers:
  the bubble layer's `opacity` goes `1 → 0` while it `translate3d`s **upward**
  by `FLOAT_DISTANCE` px (bubbles float toward the top of the screen and fade
  out); simultaneously the Warrior layer's `opacity` goes `0 → 1` while it
  eases up from a 40px offset (rises + fades in). Pointer events are toggled
  off/on per layer around the midpoint so you can't click a half-visible
  layer mid-crossfade.
- **Unlock**: once `t` reaches 1, scrolled has reached the section's full
  extra height, so the sticky pin releases exactly as the crossfade
  completes — Warrior (now fully opaque) continues scrolling normally like
  any other section, and `FlavorDial` follows it in the document flow.

## Notes

- Sample images are placeholder photos from `picsum.photos` (seeded, stable
  across reloads) via plain `<img>` tags. Swap `lib/bubbles.ts` for real
  assets, and consider moving to `next/image` with `remotePatterns`
  configured in `next.config.ts` once you do.
- Tuning knobs for the physics (gravity, restitution, squash amount/decay,
  collision iterations, repel radius/strength) and the scroll-jack timing
  (`HOLD_VH`, `TRANSITION_VH`, `FLOAT_DISTANCE`) are all named constants at
  the top of `components/Hero.tsx`.
