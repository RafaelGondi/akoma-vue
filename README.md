# Akoma

A warm, human design system for Vue 3 — calm, close, and trustworthy. Nature-inspired
colors, generous white space, rounded corners, and hierarchy built through spacing
instead of borders.

Built with **Vue 3 Composition API + TypeScript**. Styles use CSS variables (no Tailwind).

## Two moods, one family

| Mood | Feel | Use for | Activate |
|------|------|---------|----------|
| **App** (default) | Warm, playful, calm | Products and apps | — |
| **Site** | Sober, natural, trustworthy | Marketing sites | `<html data-mood="site">` |

Both moods share the same typography (Fraunces + Nunito Sans), components, and
spacing DNA — only tokens change (palette, radius, shadows). Dark mode works in both
via `data-theme="dark"` and stays warm (never cold black).

## Quick start

```bash
npm install
npm run dev
```

Interactive docs: [http://localhost:5173](http://localhost:5173)

## Library usage (after publish)

```bash
npm install @akoma/vue
```

```ts
import { createApp } from 'vue'
import { Akoma, AkButton } from '@akoma/vue'
import '@akoma/vue/style.css'

createApp(App).use(Akoma).mount('#app')
```

Or import components à la carte:

```vue
<script setup lang="ts">
import { AkButton, AkInput } from '@akoma/vue'
</script>
```

### Dark mode & mood

```ts
document.documentElement.dataset.theme = 'dark' // warm dark theme
document.documentElement.dataset.mood = 'site' // sober "Site" mood
```

## Components (v0.1)

| Component | Description |
|-----------|-------------|
| `AkButton` | Primary / secondary / ghost / danger |
| `AkBadge` | Status pills |
| `AkChip` | Filter & category chips |
| `AkCard` | Elevated surface with slots |
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

## Project structure

```
akoma/
├── src/                 # Library source
│   ├── components/      # Vue SFCs
│   ├── styles/          # tokens, base, motion
│   ├── plugin.ts
│   └── index.ts
├── docs/                # Interactive playground
├── vite.config.ts       # Docs app
└── vite.lib.config.ts   # npm library build
```

## Publish to npm

```bash
npm run build
npm publish --access public
```

Ensure the package name `@akoma/vue` is available (or rename in `package.json`).
