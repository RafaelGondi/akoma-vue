# Design decisions

When in doubt, follow these choices instead of improvising.

## Typography

- **Choice:** DM Sans primary; Lora optional for editorial (`--font-editorial`)
- **Why:** Humanist sans, readable, quietly expressive
- **Rejected:** Display serifs everywhere; cold geometric sans

## Color

- **Choice:** App → violet on stone; Site → evergreen on mineral white
- **Why:** App feels personal; Site feels credible for finance/B2B
- **Rejected:** Single accent for everything; cold blue-gray SaaS palette

## Surfaces

- **Choice:** Flat layers — border + background step; shadows only where needed (nav, modals)
- **Why:** Asana-like calm; less visual noise in data-heavy screens
- **Rejected:** Floating cards with heavy blur/shadow stacks

## Radius

- **Choice:** App generous but not bubbly; Site controlled 8–16px
- **Why:** Shape signals mood without changing APIs
- **Rejected:** Identical radius everywhere; sharp 0px enterprise corners

## Motion

- **Choice:** Short transitions; reveal on entry; subtle tap feedback
- **Why:** Tactile without theatre; always respect `prefers-reduced-motion`
- **Rejected:** Bouncy motion on every element

## Forms

- **Choice:** Sentence-case labels; soft fills in App; bordered fields in Site
- **Why:** Friendly vs precise contexts
- **Rejected:** Uppercase micro-labels; inputs without focus rings

## API

- **Choice:** Vue 3 + TS; props in English; CSS variables; no Tailwind in the library
- **Why:** Portable, themeable, npm-friendly
- **Rejected:** Utility-class coupling in components
