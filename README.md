# Akoma

A human design system for Vue 3 — calm, clear, and trustworthy. Natural neutrals,
generous space, quiet personality, and hierarchy built through rhythm before borders.

Built with **Vue 3 Composition API + TypeScript**. Styles use CSS variables (no Tailwind).

## Two moods, one family

| Mood | Feel | Use for | Activate |
|------|------|---------|----------|
| **App** (default) | Tactile, optimistic, relaxed | Products and apps | — |
| **Site** | Composed, precise, trustworthy | Finance, B2B and institutional sites | `<html data-mood="site">` |

Both moods share DM Sans, an optional Lora editorial accent, components, spacing,
and accessible interaction states. Their palettes, radii, and surface treatment
adapt to context. Dark mode works in both via `data-theme="dark"`.

Design guides ship as Markdown in the npm package and in the docs under **Guides**
(`/philosophy`).

## Quick start

```bash
npm install
npm run dev
```

Interactive docs (local): [http://localhost:5173](http://localhost:5173)

Published docs: [https://rafaelgondi.github.io/akoma-vue/](https://rafaelgondi.github.io/akoma-vue/)

## Library usage (after publish)

```bash
npm install @rafael_dias/akoma @sysvale/cuida-icons
```

```ts
import { createApp } from 'vue'
import { Akoma, AkButton } from '@rafael_dias/akoma'
import '@rafael_dias/akoma/style.css'

createApp(App).use(Akoma).mount('#app')
```

Or import components à la carte:

```vue
<script setup lang="ts">
import { AkButton, AkInput } from '@rafael_dias/akoma'
</script>
```

### Dark mode & mood

```ts
document.documentElement.dataset.theme = 'dark'
document.documentElement.dataset.mood = 'site'
document.documentElement.dataset.accent = 'teal' // optional brand color
```

### Accent palettes (v0.8)

Eight named palettes — apps are not locked to purple. Mood controls shape; accent controls brand color.
Each palette exposes three chromatic shades: `--accent-light`, `--accent`, `--accent-dark`.

| Palette | Use for |
|---------|---------|
| `violet` | Default App |
| `evergreen` | Default Site |
| `teal` | Productivity, study, wellness |
| `ocean` | Data, analytics |
| `amber` | Warm consumer apps |
| `rose` / `coral` | Lifestyle, creative |
| `slate` | Neutral B2B |

```ts
import { accentPaletteIds, applyAccentPalette } from '@rafael_dias/akoma'

applyAccentPalette(document.documentElement, 'teal')
```

## Components (v0.6)

| Component | Description |
|-----------|-------------|
| `AkIcon` | Cuida Icons wrapper |
| `AkButton` | Primary / secondary / ghost / danger |
| `AkIconButton` | Icon-only actions |
| `AkBadge` | Status pills |
| `AkChip` | Filter & category chips |
| `AkCard` | Flat surface with slots |
| `AkList` / `AkListRow` | Grouped flat rows |
| `AkSectionHeader` | Uppercase section labels |
| `AkProgress` | Progress bars |
| `AkDivider` | Section separators |
| `AkSwitch` | Toggle settings |
| `AkInput` | Labeled text field |
| `AkTextarea` | Multi-line field |
| `AkEmptyState` | Empty list placeholder |
| `AkShimmer` | Loading skeleton |
| `AkAmbientBg` | Soft background orbs |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Interactive documentation |
| `npm run build` | Build library for npm (`dist/`) |
| `npm run build:docs` | Build static docs (`dist-docs/`) |
| `npm run preview` | Preview docs build |

## Design guides (Markdown)

Guides live in `content/` and ship with the package:

| File | Topic |
|------|-------|
| `philosophy.md` | North star, pillars, anti-patterns |
| `moods.md` | App vs Site |
| `decisions.md` | Design decision log |
| `implementation.md` | Migration checklist |

```ts
// Vite
import philosophy from '@rafael_dias/akoma/content/philosophy.md?raw'
```

See [content/README.md](./content/README.md) for Node usage.

## Project structure

```
akoma/
├── src/                 # Library source
│   ├── components/      # Vue SFCs
│   ├── styles/          # tokens, base, motion
│   ├── plugin.ts
│   └── index.ts
├── docs/                # Interactive playground
├── content/             # Markdown guides (npm + docs)
├── vite.config.ts       # Docs app
└── vite.lib.config.ts   # npm library build
```

## Publish to npm

```bash
npm run build
npm publish --access public
```

The package is published publicly as `@rafael_dias/akoma`.
