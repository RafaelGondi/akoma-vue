# Accent palettes

Mood (App / Site) controls shape and surfaces. **Accent** controls brand color independently — so apps are not locked to violet or green.

## Usage

```html
<html data-mood="app" data-accent="teal">
```

```ts
import { accentPaletteIds, applyAccentPalette } from '@rafael_dias/akoma'

document.documentElement.dataset.mood = 'app'
document.documentElement.dataset.accent = 'teal'

// Or use the helper:
applyAccentPalette(document.documentElement, 'ocean')
```

## Defaults (no `data-accent`)

| Mood | Default accent |
|------|----------------|
| App | Violet |
| Site | Evergreen |

## Available palettes

| ID | Character | Good for |
|----|-----------|----------|
| `violet` | Mineral purple | Personal apps, creative tools |
| `evergreen` | Confident green | Finance, operations, B2B |
| `teal` | Calm mineral teal | Productivity, wellness, study apps |
| `ocean` | Trustworthy blue | Data, analytics, institutional |
| `amber` | Warm gold | Optimistic consumer products |
| `rose` | Dusty rose | Lifestyle, journaling |
| `coral` | Terracotta | Human, warm interfaces |
| `slate` | Blue-gray | Neutral enterprise UI |

All palettes include light and dark variants for `--accent`, `--accent-hover`, `--accent-soft`, `--accent-contrast`, `--bg-tinted`, and ambient orbs.

## Custom accent

Override tokens in your app — no fork required:

```css
:root {
  --accent: #006d77;
  --accent-hover: #005a62;
  --accent-soft: #e0f2f3;
  --accent-contrast: #ffffff;
}
```

Prefer named palettes when possible — they stay tested across components and dark mode.
