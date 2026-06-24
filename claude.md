# Aalborg Freelancer Portfolio Site

## Project Overview

Custom portfolio website for **Mathias Oliver Nielsen**, a freelance web developer based in Aalborg, Denmark. The site showcases technical skills, projects, and services with a clean, minimal light-themed design.

## Key Requirements

### Content & Copy

- **Languages:** Danish (default) + English toggle
- **Name:** Mathias Oliver Nielsen (use throughout)
- **Contact email:** hej@mathiasnielsen.dk
- **Location:** Aalborg, Denmark

### Sections

1. **Hero** — Animated word-swapping tagline: "arbejder på dit {app, server, environment}"
2. **About Me / Om mig** — Personal intro + transparent PNG profile photo
3. **Tech Stack** — Clickable tools with links to docs/official sites
4. **Projects / Cases** — Portfolio projects (user will provide later)
5. **Services / Ydelser** — What you offer
6. **Testimonials** — Client feedback (if available)
7. **Contact Form** — Form that opens mailto: prefilled

### Tech Stack (with links)

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, SCSS
- **Backend/DB:** PostgreSQL, MongoDB, SQL Queries
- **Tools:** Figma, Claude Code
- **Marquee display:** All tools scroll as "Next.js • React • TypeScript • Tailwind • SCSS • PostgreSQL • MongoDB • Figma • Claude Code"

### Design System

- **Bound to:** Figma Design System (light theme)
- **Primary accent color:** Purple (#A259FF)
- **Typography:** Inter only (one font family max)
- **Theme:** Light mode, lots of whitespace, clean & minimal
- **Two layout directions:** Compare A (centered) vs B (split hero with code card)

### Animations & Interactions

- Keyframe animations for reveals
- Text sliding across screen (ghost marquee with accent dots)
- Word-swapping in hero (arbedar på dit + rotating words)
- Smooth, restrained transitions (no bouncy effects)
- All animations respect `prefers-reduced-motion`

### Build Target

- **Framework:** Next.js (when handed off to Claude Code)
- **Styling:** Tailwind CSS + design tokens
- **Language toggle:** Client-side, persists in localStorage
- **Contact form:** Opens email client with prefilled fields

## Files & Structure

```
Portfolio.html          # Current HTML prototype
assets/
  styles.css           # Design tokens, keyframes, layout variants
  i18n.js              # Danish/English translations + tech stack
  app.js               # Language toggle, animations, marquee, form logic
```

## Next Steps for Development

1. **Download as ZIP** from the project
2. **Set up Next.js locally:** `npx create-next-app@latest my-portfolio`
3. **Copy design files** into `/styles`, `/lib`, `/public`
4. **Push to GitHub**
5. **Share repo with Claude Code** to convert to full Next.js app

## Design Notes

- **No fillers:** Every element earns its place; no placeholder text beyond what's needed
- **Whitespace:** Generous margins, light density
- **Color restraint:** Purple accent only; black text, white/neutral backgrounds
- **Icons:** Phosphor Icons (ph-\*) for UI elements
- **Responsive:** Mobile-first, scales gracefully to large screens
- **Accessibility:** All animations gated on `@media (prefers-reduced-motion: no-preference)`

## Brand Voice

- Direct, confident, collaborative
- Focus on "what you build together" not feature-heavy sales copy
- Sentence case everywhere
- No emoji in primary UI

## Contact & Language Persistence

- Default language: **Danish**
- Language choice stored in localStorage as `lang`
- Form opens mailto with subject/body prefilled
