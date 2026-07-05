# Oxford Roofing — Design System

## Company overview

Oxford Roofing is a premium **commercial and residential roofing** contractor. The brand identity is built entirely from the uploaded logo mark — `assets/logo/oxford-roofing-logo.png` — which depicts a navy bull walking across a shingled roofline, rendered in a confident architectural line style, beneath a Roman-inscription serif wordmark ("OXFORD ROOFING") and a small gold-tracked tagline ("COMMERCIAL AND RESIDENTIAL") flanked by thin gold rules.

**Sources provided:**
- `uploads/Oxford Roofing .png` — the primary and only brand asset (logo lockup). No codebase, Figma file, or existing website was provided.
- A written brief specifying exact brand hex values (Oxford Navy `#03234D`, Metallic Gold `#C09657`, Olive Gold `#857D10` as a supporting-only accent, White `#FFFFFF`), a request to model spacing/restraint/hierarchy discipline on Apple's design language (without borrowing Apple's color, type, or product visual identity), and an explicit "avoid list" (no SaaS energy, no playful color, no cheap contractor clichés, no busy layouts, no excessive animation, no roofing-website stock-template tropes).

Because no codebase or Figma file was attached, this system was built **from brand guidelines outward**: the logo supplied the literal colors and typographic character; everything else (scales, components, layouts) was authored fresh to serve a premium roofing brand, using Apple's spacing/hierarchy discipline only as a *behavioral* reference, never a visual one.

## What's in this project

- `styles.css` — the single global stylesheet entry point (imports every token file below).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii/shadow/motion), `fonts.css` (webfont loading).
- `assets/logo/` — the Oxford Roofing logo lockup.
- `guidelines/` — foundation specimen cards for the Design System tab (colors, type, spacing, shadow/radius, brand mark).
- `components/` — reusable React UI primitives (see Components below).
- `ui_kits/marketing-site/` — a full marketing-website recreation (home, services, about/contact) built from the components.
- `SKILL.md` — portable skill file for using this system in Claude Code or elsewhere.

## Content fundamentals

**Voice:** authoritative, plainspoken, confident without hype. Oxford Roofing talks like a firm that has done this for decades and doesn't need to oversell — closer to how a structural engineer or an established architecture firm writes than how a lead-gen contractor site writes.

- **Address:** direct second person ("Protect what you've built") for headlines and CTAs; first person plural ("we") when describing the company's work and process. Avoid third-person distancing ("Oxford Roofing believes...").
- **Casing:** Sentence case for body copy and most headlines. Small caps / all-caps tracked wide is reserved for short eyebrow labels and the tagline treatment ("COMMERCIAL AND RESIDENTIAL"), mirroring the logo — never for full sentences.
- **Sentence rhythm:** short, declarative sentences. Avoid stacked adjectives ("amazing," "incredible," "affordable"). Let specificity do the persuading — materials, crew certifications, warranty terms, timelines — rather than superlatives.
- **Numbers over adjectives:** "25-year manufacturer warranty," "40+ years in the field," "installed in under a week" beat "the best roofing in town."
- **No emoji, no exclamation points.** Punctuation stays formal. A period, not an exclamation mark, ends a CTA line.
- **Example headline:** "Built to outlast the weather it stops." Example body line: "From tear-off to final inspection, one crew sees the job through — no subcontracted labor, no surprises on the invoice."
- **Example microcopy (button):** "Request an Inspection" / "View Our Work" — verb-first, specific, no "Learn More" filler on primary paths.

## Visual foundations

**Color:** Oxford Navy (`--navy-900`) is the dominant brand color — used for headings, primary buttons, footer backgrounds, and dark section tiles. Metallic Gold (`--gold-500`) is the accent — used sparingly for rules, small labels, icon accents, hover underlines, and the occasional accent button; it is never a large fill. Olive Gold is a *supporting-only* tertiary accent (badges, secondary tags) and should not carry primary actions. White is the primary canvas. No gradients, no bright/playful hues — every color in the system derives from the four brand anchors via consistent HSL scales (see `tokens/colors.css`).

**Typography:** Cinzel (Roman inscription-style serif, matching the logo's wordmark) is reserved for display headlines and section titles only — never body copy, never long-form text, never below ~24px. Montserrat carries everything else: body copy, UI labels, navigation, buttons, forms. This mirrors the logo's own pairing of a carved-serif wordmark over a clean sans-serif tagline.

**Spacing & layout:** 8px base unit, generous section rhythm (120px vertical padding on full-bleed sections, echoing Apple's restraint) with a 1200px max content width. Grids are simple (2–4 columns), never dense. Whitespace is the primary signal of premium quality — resist the urge to fill it.

**Backgrounds:** flat color fields only (white, navy, subtle slate-tinted off-white). No repeating patterns, no textures, no decorative illustration, no gradients. Photography (roofs, crews, materials — to be supplied by the client) should be full-bleed and rest edge-to-edge in hero and case-study sections, similar in spirit to Apple's photography-first tiles, but the color system stays flat underneath it.

**Animation:** minimal and quiet. Fades and gentle upward slides (8–12px) on scroll-in, 240ms standard duration, standard ease-out curve (`--ease-standard`). No bounce, no spring physics, no looping decorative motion. Buttons use a subtle background-darken on hover, not scale/shrink tricks.

**Hover / press states:** hover darkens fills by one step on the relevant scale (e.g. navy-900 → navy-800) or introduces a 1px gold underline on text links. Press/active states step one further (navy-800 → navy-700). No color inversion, no scale-bounce.

**Borders & shadows:** hairline borders (`--border-subtle` / `--border-default`, 1px, slate-tinted) define card edges — not shadows. A single soft card shadow (`--shadow-card`) exists for elevated surfaces (modals, floating panels); it is not stacked on top of borders except where genuinely elevated (e.g. a sticky quote-request card). No inner shadows, no neumorphism, no colored glow except a thin gold ring reserved for focus states and premium "featured" callouts.

**Corner radii:** restrained — 0px for full-bleed photography and hero tiles, 8px for buttons and inputs, 14px for cards, pill (9999px) only for tag/badge chips and the rare capsule CTA. No exaggerated 24px+ "friendly SaaS" rounding.

**Transparency & blur:** used sparingly — a translucent navy scrim (for text legibility over photography) and a subtle backdrop-blur on the sticky header when scrolled. Not used decoratively.

**Imagery color vibe:** warm-neutral, true-to-life photography (roofs, materials, finished homes/commercial buildings) — not cool/blue-graded or heavily filtered. No stock-photo clichés (hard hats and thumbs-up). Since no photography was supplied, UI kits use labeled placeholder blocks in `--slate-100` / `--navy-900` rather than invented or generated imagery.

## Iconography

No icon set, icon font, or SVG sprite was supplied with the brand materials. The system uses **Lucide** (MIT-licensed, CDN-available, thin/consistent 1.5–2px stroke weight that matches the logo's linework) as the icon library, loaded via CDN in UI kit pages — this is a **substitution**, flagged here for the user to confirm or replace with a licensed icon set if one exists. No emoji and no unicode-glyph icons are used anywhere in the system. If Oxford Roofing has (or wants) a custom icon set matching the bull-mark's linework, supply it and this system will be updated to use it directly.

## Intentional additions

Because no codebase or Figma component library was provided, this is a **from-scratch** design system. The component inventory below is the standard set sized to a premium services marketing site — every family exists to serve the marketing site UI kit, not as speculative scope.

## Index

**Tokens** (`tokens/`): `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.

**Foundations** (`guidelines/`): color scales, type specimens, spacing scale, shadow/radius specimens, brand mark specimen — all visible in the Design System tab under their groups.

**Components** (`components/`):
- `core/Button.jsx` — primary, secondary, accent, ghost, sizes, disabled, with-icon
- `core/Badge.jsx` — status/label chips (navy, gold, olive, outline)
- `core/Card.jsx` — service card, stat card, testimonial card
- `forms/Input.jsx`, `forms/Select.jsx`, `forms/Checkbox.jsx`, `forms/Radio.jsx` — form primitives
- `navigation/NavBar.jsx` — sticky site header
- `navigation/Footer.jsx` — site footer
- `layout/Section.jsx` — full-bleed alternating-tile section wrapper
- `feedback/Accordion.jsx` — FAQ / expandable content

**UI kit** (`ui_kits/marketing-site/`): `index.html` — a clickable recreation of the Oxford Roofing marketing site (home, services, about/contact-adjacent sections) built entirely from the components above.

## Caveats & open questions

- **No existing codebase, Figma file, or live website was provided** — this system is authored from the logo + written brand brief only. If Oxford Roofing has an existing site or brand guideline PDF, attach it and this system can be reconciled against real usage.
- **Icon set is a CDN substitution (Lucide)** — confirm or supply a licensed/custom set.
- **No photography was supplied** — all imagery in the UI kit is a labeled placeholder. Real roof/crew/material photography will materially improve the premium feel this brand is going for.
- **Fonts are loaded from Google Fonts (Cinzel + Montserrat)** as the nearest open-source match to the logo's Trajan/Cinzel-style serif. If Oxford Roofing licenses the exact serif used in the logo (or a paired sans), supply the font files and this system will swap to self-hosted `@font-face` rules.
