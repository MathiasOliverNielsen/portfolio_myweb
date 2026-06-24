# Figma Design System

## Overview

Figma is a browser-based, collaborative design and prototyping tool. It enables teams to design, prototype, and hand off work in a single platform. The product is used by designers, developers, and product teams worldwide.

### Products / Surfaces
- **Figma Editor** — The core design canvas: a dark-chrome, infinite-canvas editor with layers, properties, and plugin panels.
- **FigJam** — A collaborative whiteboard product with a distinct playful, warm aesthetic vs the precise editor.
- **Figma Community** — A public hub for templates, plugins, and UI kits.
- **Figma Website (figma.com)** — Marketing site with a bold, high-contrast brand identity.
- **Dev Mode** — A code-focused view of designs for developer handoff.

### Sources Used
No external codebase or Figma file was attached. This design system was assembled from deep knowledge of Figma's publicly documented brand system, product UI, and marketing materials as of 2024–2025.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Empowering, not prescriptive.** Figma speaks to people who make things. The brand voice is energetic, optimistic, and inclusive.
- **Collaborative in spirit.** Copy often uses "together," "everyone," "your team" — design is a team sport.
- **Direct and confident.** Headlines are punchy. No hedging. Short sentences dominate.
- **Human, not corporate.** Conversational register; Figma avoids buzzwords and jargon.
- **"You" not "we" first.** The focus is on what the user/team can accomplish, not what Figma does.

### Casing
- **Headlines:** Sentence case on marketing (not title case). "Bring your ideas to life" not "Bring Your Ideas to Life."
- **UI labels:** Sentence case throughout the product.
- **CTAs:** Short, active verbs. "Get started," "Open in Figma," "Duplicate."

### Emoji
- Emoji are **not** used in primary brand communications or product UI.
- FigJam has an emoji reaction system, but it is user-generated content, not brand-applied.

### Vibe
- Clean, minimal, professional — but not cold.
- Marketing copy leans aspirational: "Nothing great is made alone."
- Celebrates craft and creativity. "Design" is a verb here.

### Examples
- "Everything you need to design at scale."
- "Bring your ideas to life, together."
- "From first sketch to final handoff."
- "One tool. One source of truth."

---

## VISUAL FOUNDATIONS

### Color Philosophy
Figma uses a high-contrast black-and-white base with carefully deployed accent colors. The brand palette is anchored by the **five logo component colors** — a deliberate nod to the modular, node-based design paradigm.

#### Brand / Logo Colors
| Token | Hex | Usage |
|---|---|---|
| `--figma-red` | `#F24E1E` | Logo top-left component |
| `--figma-purple` | `#A259FF` | Logo top-right component |
| `--figma-blue` | `#1ABCFE` | Logo right component |
| `--figma-green` | `#0ACF83` | Logo bottom component |
| `--figma-orange` | `#FF7262` | Logo center component |

#### Editor (Dark) UI
- Background: `#1E1E1E` (canvas surround), `#2C2C2C` (panels)
- Surface: `#333333`, `#3C3C3C`
- Text primary: `#E6E6E6`
- Text secondary: `#B3B3B3`, `#999999`
- Border: `#3C3C3C`, `#4D4D4D`
- Selection / Accent: `#0D99FF`

#### Light UI / Marketing
- Background: `#FFFFFF`, `#F5F5F5`
- Text: `#000000`, `#1E1E1E`, `#666666`
- Borders: `#E6E6E6`

### Typography
- **Primary font:** Inter (all weights 300–700)
- **Display (marketing):** Figma uses large, bold Inter or licensed display faces; closest free substitute is **Plus Jakarta Sans** or **DM Sans** for display. ⚠️ *Substitution flagged — see below.*
- **Monospace:** JetBrains Mono (used in Dev Mode code panels)
- **Scale (product UI):** 11px label, 12px small, 13px default, 14px body, 16px sub-heading, 20px heading
- **Scale (marketing):** 14px body, 20px sub-heading, 32–80px display

### Spacing
- Base unit: **4px grid**
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

### Backgrounds
- **Editor:** Pure dark (`#1E1E1E`), no textures, no gradients
- **Marketing:** White or black with bold type; occasional use of a colorful **mesh/noise gradient** background in campaign visuals
- **FigJam:** Dot-grid paper texture, warmer off-whites
- No hero images as backgrounds; photography used in contained cards
- Hand-drawn illustrations used sparingly in FigJam-related marketing

### Animation
- **Product UI:** Minimal. Fast transitions (100–200ms). `ease-out` easing dominates.
- **Marketing:** More expressive. Parallax scrolling, canvas-like reveal animations.
- No bouncy spring animations in the core editor.
- Hover/focus states use smooth color/opacity transitions.

### Hover & Press States
- **Hover (dark):** `rgba(255,255,255,0.08)` overlay on dark surfaces
- **Hover (light):** `rgba(0,0,0,0.06)` on light surfaces
- **Press:** Slight darken or `rgba(0,0,0,0.12)`
- **Active/selected:** Blue `#0D99FF` fill or left-border indicator
- Icon buttons: opacity shift + background pill on hover

### Borders & Radius
- **Input fields:** 6px radius, 1px border
- **Panels/cards (marketing):** 12–16px radius
- **Toolbar buttons:** 6px radius
- **Badges/chips:** 100px (fully rounded)
- **Editor panels:** 0–4px radius (sharp, utilitarian)

### Shadows & Elevation
- **Editor dropdowns/menus:** `0 4px 16px rgba(0,0,0,0.5)` on dark
- **Marketing cards:** `0 2px 8px rgba(0,0,0,0.08)`, `0 8px 32px rgba(0,0,0,0.12)`
- No heavy drop shadows inside the editor itself

### Cards
- Marketing: white bg, 12–16px radius, subtle shadow, 1px `#E6E6E6` border
- Editor: no cards; panels are flat dark surfaces with section dividers

### Iconography — see ICONOGRAPHY section below

### Imagery
- Photography: Diverse, real people collaborating; cool-to-neutral tones; minimal grain
- Marketing illustrations: bold flat geometric shapes, sometimes using logo component colors
- No stock-photo feel; everything feels editorial and intentional

### Transparency / Blur
- Editor uses **backdrop blur** for floating panels/modals: `blur(20px)`
- Marketing: no blur; sharp layers and shapes

---

## ICONOGRAPHY

Figma uses a **custom icon system** internally, distributed as a component library within Figma. Key traits:
- **Style:** 16×16 and 24×24 stroke icons, 1.5px stroke weight, rounded caps, minimal fill
- **CDN / package:** Not publicly distributed as a standalone package
- **Substitute:** This design system uses **Phosphor Icons** (CDN) — closest visual match to Figma's stroke weight and style. Phosphor is used with `weight="regular"` (1.5px equivalent).
- ⚠️ *Substitution flagged: Figma's actual icon set is proprietary and not copyable. Phosphor Icons are used as a visual stand-in.*

CDN usage:
```html
<script src="https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.js"></script>
<i class="ph ph-pencil"></i>
```

---

## FONT SUBSTITUTIONS ⚠️

| Figma Asset | Substitute Used | Source |
|---|---|---|
| Figma internal display face | Inter (heavy weights) | Google Fonts |
| Figma product UI | Inter | Google Fonts |
| Dev Mode code | JetBrains Mono | Google Fonts |

No proprietary font files were available. All fonts loaded from Google Fonts CDN.

---

## FILE INDEX

```
README.md                   ← You are here
SKILL.md                    ← Agent skill definition
colors_and_type.css         ← All CSS custom properties (colors + type)

assets/
  figma-logo.svg            ← Figma wordmark SVG
  figma-logo-icon.svg       ← Figma icon (component mark)
  figma-logo-dark.svg       ← Wordmark on dark

preview/
  colors-brand.html         ← Logo / brand accent colors
  colors-editor-dark.html   ← Editor dark surface colors
  colors-light.html         ← Light UI / marketing colors
  colors-semantic.html      ← Semantic color tokens
  type-scale-display.html   ← Display / marketing type scale
  type-scale-ui.html        ← Product UI type scale
  type-specimens.html       ← Type specimen: weight/style pairs
  spacing-tokens.html       ← Spacing scale tokens
  spacing-radii.html        ← Border radius + shadow tokens
  components-buttons.html   ← Button variants
  components-inputs.html    ← Input / form components
  components-menu.html      ← Menus, dropdowns, tooltips
  components-badges.html    ← Chips, badges, tags
  components-toolbar.html   ← Editor toolbar strip
  brand-logo.html           ← Logo variants
  brand-figjam.html         ← FigJam visual identity

ui_kits/
  figma-app/
    README.md               ← UI kit notes
    index.html              ← Interactive Figma editor prototype
    AppShell.jsx            ← Main layout shell
    Toolbar.jsx             ← Top toolbar
    LeftPanel.jsx           ← Layers / pages panel
    RightPanel.jsx          ← Properties panel
    Canvas.jsx              ← Design canvas area
    FilesBrowser.jsx        ← Files home screen
```
