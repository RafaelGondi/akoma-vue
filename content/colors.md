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

## Shades

Every palette exposes three chromatic steps:

| Token | Role |
|-------|------|
| `--accent-light` | Lighter step — chips, secondary emphasis |
| `--accent` | Base brand color |
| `--accent-dark` | Darker step — hover / pressed depth |

`--accent-hover` aliases the darker step in light mode and the lighter step in dark mode. `--accent-soft` remains the tinted wash for backgrounds (not a chromatic shade).

```css
.badge {
  background: var(--accent-light);
}
.cta:active {
  background: var(--accent-dark);
}
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

All palettes include light and dark theme variants for the shade tokens, plus `--accent-soft`, `--accent-contrast`, `--bg-tinted`, and ambient orbs.

## Custom accent

Override tokens in your app — no fork required:

```css
:root {
  --accent-light: #3d8f99;
  --accent: #006d77;
  --accent-dark: #005a62;
  --accent-hover: var(--accent-dark);
  --accent-soft: #e0f2f3;
  --accent-contrast: #ffffff;
}
```

Prefer named palettes when possible — they stay tested across components and dark mode.
