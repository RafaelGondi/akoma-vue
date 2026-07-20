# App patterns (mood `app`)

Conventions for mobile-first PWAs built on Akoma. Extracted from real product use
(Habitify and siblings) — things that lived as implicit convention before this guide.

Accent-agnostic: every rule below works with `violet`, `teal`, `evergreen`, `slate`, etc.

## Page tone vs editorial type

**Page tone** is a *visual register*: hierarchy comes from typography and spacing,
not colored boxes, heavy shadows, or widget grids. Calm, readable, breathing room —
closer to a magazine page than a dashboard.

**Editorial type** is the optional Lora face (`--font-editorial`). Do not confuse the two.
Most operational UI uses `--font-display` / DM Sans via `.page-title`.

| | Page tone (mood `app`) | Dashboard / admin | Card-heavy (Material) |
|---|------------------------|-------------------|------------------------|
| Background | Flat `--bg` | Dense utility | Grey + elevation |
| Hierarchy | Large type at the top | KPI grids | Stacked cards |
| Shadows | None or rare | Moderate | Strong |
| Color | Accent reserved for actions | Semantic everywhere | Colored surfaces |

### Prefer lists over cards

In personal PWAs, prefer `AkList` / `AkListRow` for the main surface. Use `AkCard`
only when the interaction *needs* a contained surface. Habitify’s primary screens
do not use `AkCard` at all.

## Page chrome

Every authenticated screen should open with:

1. **Label** — `.page-label` (accent, small, bold) — context (“Your routine”)
2. **Title** — `.page-title` (display, large) — focus (“Today”)
3. **Meta** — secondary text (`--text-secondary`) — date, short intro
4. **Actions** — optional `AkIconButton`s on the side, never inside the title

Use `AkPageHeader` for this anatomy:

```vue
<AkPageHeader
  label="Your routine"
  title="Today"
  meta="Monday, 20 July"
  size="md"
>
  <template #actions>…</template>
  <!-- optional body: progress, chips -->
</AkPageHeader>
```

Section-level chrome uses `AkSectionHeader`, not a second `.page-label`.

## App shell

Contract for phone-like PWAs:

1. Root locks to `100dvh` with `overflow: hidden`
2. Exactly **one** scroll container (not the window)
3. Bottom padding ≥ `--nav-height` + `--safe-bottom` (plus FAB offset if needed)
4. Cap width with `--shell-max` (480px) and center
5. Pair with `AkTabBar` and `AkAmbientBg` (`contained`)

Use the shipped shell classes:

```html
<div class="ak-app-root">
  <AkAmbientBg contained />
  <main class="ak-app-main">
    <div class="ak-app-page">
      <div class="ak-app-scroll">…</div>
    </div>
  </main>
  <AkTabBar>…</AkTabBar>
</div>
```

`.akoma-shell` remains a lighter content wrapper (max-width + nav padding) for simpler pages.
Do not invent a parallel shell that forgets the scroll/`dvh` contract.

## System accent vs category color

| Role | Tokens | Use for |
|------|--------|---------|
| **System accent** | `data-accent` → `--accent-*` | Page labels, tabs, checks, progress, completion heatmaps |
| **Category color** | `--cat-1` … `--cat-6` | Entity identity in lists (habit wash, tag chips) |

Never paint intensity charts with `--cat-*`. Never paint list entity chips with the
system accent alone if items need to be distinguishable from each other.

## Completion scale

Akoma’s five chromatic shades are not only button states — they map **intensity**.
Use the helpers and utilities shipped in the package:

```ts
import {
  completionShade,
  completionShadeClass,
  completionShadeColor,
} from '@rafael_dias/akoma'

const shade = completionShade(0.8) // 'dark'
const cls = completionShadeClass(shade) // 'ak-completion-shade--dark'
const color = completionShadeColor(shade) // 'var(--accent-dark)'
```

```html
<div class="ak-completion-shade--base">75%</div>
```

| Rate | Shade | Class |
|------|-------|-------|
| 0% | `none` | `.ak-completion-shade--none` |
| 1–24% | `lighter` | `.ak-completion-shade--lighter` |
| 25–49% | `light` | `.ak-completion-shade--light` |
| 50–74% | `base` | `.ak-completion-shade--base` |
| 75–99% | `dark` | `.ak-completion-shade--dark` |
| 100% | `darker` | `.ak-completion-shade--darker` |

More complete → deeper. Remains correct when the product changes `data-accent`.

Do **not** remap `--accent: var(--accent-light)` globally — that collapses the scale.

## Sheets (`AkSheet`)

Mobile detail and forms open in a **bottom sheet**, not a centered modal.

- Surface: `--bg-elevated` + `--shadow-md` (rare elevation — allowed here and on toasts)
- Handle + swipe-down to dismiss
- Width capped to `--shell-max`, centered
- Domain content stays in the app; the shell is Akoma’s

```vue
<AkSheet v-model:open="open" title="Edit item" close-label="Fechar">
  <!-- form -->
</AkSheet>
```

Confirm destructive actions with a sheet + `AkButton variant="danger"`, not `window.confirm`.

## Floating primary (`AkFab`)

Pin the primary action above the tab bar — never inside the scroll container.

```vue
<div class="app-scroll ak-page-body--with-fab">…</div>
<AkFab>
  <AkButton>New</AkButton>
</AkFab>
```

Tokens: `--fab-height`, `--fab-bottom`.

## Theme (`useAkomaTheme`)

```ts
const { mode, setMode, toggleMode } = useAkomaTheme({
  mood: 'app',
  accent: 'teal',
  storageKey: 'my-app-theme',
})
```

Applies `data-theme` / `data-mood` / accent and syncs `theme-color` from `--bg`.

## Elevation policy

Shadows are exceptional:

- Allowed: `AkSheet`, toast hosts, tab bar if needed
- Default: borders + background steps (`--border`, `--bg-soft`, `--bg-muted`)

## Checklist for a sibling PWA

1. `data-mood="app"` + explicit `data-accent`
2. Shell: `100dvh`, one scroll container
3. Bottom padding clears tab bar (+ FAB if any)
4. Page chrome: label → title → meta
5. Lists over cards for primary surfaces
6. Accent on system chrome; `--cat-*` on entities
7. Intensity / heatmaps use the five accent shades
8. Overlays use `AkSheet`
9. Toast above the tab bar (not native alerts for routine feedback)
10. `AkTabBar` with Cuida icons
11. `theme-color` follows light/dark (ideally derived from `--bg`)
12. Tokens for color/space — no brand hex in UI CSS
13. Motion with purpose + `prefers-reduced-motion`
14. `AkAmbientBg` contained in the shell
15. Use `Ak*` for buttons, inputs, chips — do not reimplement

## Anti-patterns

| Don’t | Why |
|-------|-----|
| Grid of shadowed `AkCard`s on the home screen | Becomes Material/dashboard |
| Remap `--accent` to `--accent-light` globally | Breaks the five-shade scale |
| Paint calendar cells with `--cat-*` | Confuses brand with entity |
| Centered modal for edit flows on mobile | Awkward for thumbs — use `AkSheet` |
| FAB inside the scroll container | Scrolls away — pin above the tab bar |
| Window scroll + `position: fixed` tab bar | Content under nav / bounce bugs |
| Put Lora on every heading as “editorial” | That’s editorial *type*, not page tone |
| Hardcode another app’s `theme-color` hex | Status bar drifts from `--bg` |

## Glossary

| Term | Meaning |
|------|---------|
| **Page tone** | Typography-led layout register for mood `app` |
| **Editorial type** | Optional Lora (`--font-editorial`) |
| **Page chrome** | Label + title + meta + actions |
| **App shell** | `dvh` viewport, internal scroll, tab bar, safe areas |
| **System accent** | Product `data-accent` / `--accent-*` |
| **Category color** | `--cat-*` for list entities |
| **Completion scale** | Discrete rate → five accent shades |
| **Sheet** | Bottom overlay for detail/forms (`AkSheet`) |
