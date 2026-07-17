# Icons

Akoma uses **[Cuida Icons](https://github.com/Sysvale/cuida-icons)** (`@sysvale/cuida-icons`) — the same open-source set from the Cuida design system.

## Install

```bash
npm install @rafael_dias/akoma @sysvale/cuida-icons
```

`@sysvale/cuida-icons` is a **peer dependency** of Akoma.

### Vite alias (recommended)

The Cuida Icons npm package entry is misconfigured. In your `vite.config.ts`:

```ts
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@sysvale/cuida-icons': path.resolve(
        __dirname,
        'node_modules/@sysvale/cuida-icons/dist/index.js',
      ),
    },
  },
})
```

Akoma docs and library build already use this alias.

## Usage

```vue
<script setup lang="ts">
import { AkIcon, AkIconButton } from '@rafael_dias/akoma'
</script>

<template>
  <AkIcon name="home-outline" :size="20" />

  <AkIconButton label="Delete" icon="trash-outline" variant="danger" />

  <AkButton>
    <template #icon>
      <AkIcon name="plus-outline" :size="18" />
    </template>
    Add item
  </AkButton>
</template>
```

## Naming

Icon names match Cuida Icons exports: `kebab-case` with suffix, e.g. `edit-outline`, `check-circle-outline`, `open-book-outline`.

Browse the full set: [cuida.sysvale.com — Iconografia](https://cuida.sysvale.com/foundation/iconografia.html) or the [GitHub repo](https://github.com/Sysvale/cuida-icons).

## TypeScript

```ts
import type { CuidaIconName } from '@rafael_dias/akoma'

const icon: CuidaIconName = 'calendar-outline'
```

## Accessibility

- Decorative icons inside labelled buttons: omit `label` on `AkIcon` (uses `aria-hidden`)
- Standalone icons: pass `label` for screen readers

```vue
<AkIcon name="warning-outline" label="Warning" />
```
