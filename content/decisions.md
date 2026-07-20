# Design decisions

When in doubt, follow these choices instead of improvising.

## Typography

- **Choice:** DM Sans primary; Lora optional for editorial (`--font-editorial`)
- **Why:** Humanist sans, readable, quietly expressive
- **Rejected:** Display serifs everywhere; cold geometric sans

## Color

- **Choice:** Mood for shape; `data-accent` for brand color (8 named palettes)
- **Why:** Apps should not all look violet; finance can stay evergreen, study apps can use teal
- **Rejected:** One global accent; hardcoded purple in every App product

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

## Overlays

- **Choice:** Bottom sheet (`AkSheet`) for mobile detail/forms; rare `--shadow-md` on elevated surfaces
- **Why:** Thumb-reachable; keeps context; matches mood `app` PWAs
- **Rejected:** Centered desktop modals as the default mobile pattern

## API

- **Choice:** Vue 3 + TS; props in English; CSS variables; no Tailwind in the library
- **Why:** Portable, themeable, npm-friendly
- **Rejected:** Utility-class coupling in components
