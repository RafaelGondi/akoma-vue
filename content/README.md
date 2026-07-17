# Akoma guides

Design philosophy and implementation guides shipped with the npm package.

| File | Description |
|------|-------------|
| [philosophy.md](./philosophy.md) | North star, pillars, anti-patterns |
| [moods.md](./moods.md) | App vs Site — when to use each |
| [colors.md](./colors.md) | Accent palettes — brand color options |
| [icons.md](./icons.md) | Cuida Icons usage |
| [decisions.md](./decisions.md) | Design decision log |
| [implementation.md](./implementation.md) | Checklist for migrating apps |

## Usage in apps

```ts
// Vite — import as raw text
import philosophy from '@rafael_dias/akoma/content/philosophy.md?raw'

// Node / bundlers without ?raw — read from node_modules
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const path = fileURLToPath(
  import.meta.resolve('@rafael_dias/akoma/content/philosophy.md'),
)
const text = readFileSync(path, 'utf8')
```

Published docs: https://rafaelgondi.github.io/akoma-vue/
