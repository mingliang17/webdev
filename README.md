# Solstice Kombucha — Next.js + Tailwind v4

A design/animation replica inspired by the structure of ciaokombucha.com —
hero with drifting gradient blobs, a rotating "flavor dial" (the signature
piece: a spinning text ring + crossfading can, echoing the source site's
repeated-flavor-name carousel), scroll-revealed flavor showcase rows, an
animated process strip, and a marquee footer. Branding, copy, colors, and
the can artwork are original — only the animation/interaction patterns are
replicated, per the brief.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4 (CSS-first config via `@theme` in `app/globals.css` — no
  `tailwind.config.js` needed)
- No external animation library — all motion is CSS keyframes +
  `IntersectionObserver` for scroll-triggered reveals, kept in
  `app/globals.css` and the individual components

## Structure

```
app/
  layout.tsx        Root layout, Google Fonts (Bricolage Grotesque, Inter, Space Mono)
  page.tsx           Composes all sections
  globals.css        Tailwind v4 @theme tokens + custom keyframes + .can-shape
components/
  Header.tsx          Sticky nav, blurs on scroll
  Hero.tsx            Staggered rise-in, drifting blobs, bobbing cans
  FlavorDial.tsx       Signature piece — rotating ring + crossfading can + pills
  FlavorShowcase.tsx  Alternating scroll-reveal rows (IntersectionObserver)
  ProcessStrip.tsx     3-step strip with a connector line that draws in on scroll
  Newsletter.tsx        Footer: signup form, drifting blobs, marquee strip
  Can.tsx              Reusable CSS-drawn "can" shape (no product photography used)
lib/
  flavors.ts          Flavor data (name, gradient colors, copy, tags)
```

## Notes

- Swap `Can.tsx` for real product photography whenever you have it — it's
  the only piece standing in for brand assets.
- All animation respects standard reduced-motion practice; if you want to
  wire up `prefers-reduced-motion`, add a media query in `globals.css` that
  disables `.animate-*` and transitions.
- The flavor dial auto-advances every 4.2s and pauses conceptually when a
  pill is clicked (timer resets from the new index) — see `FlavorDial.tsx`.
