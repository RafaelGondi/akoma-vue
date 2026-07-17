# App vs Site

Same components. Different tokens. Pick once per product.

## App (default)

- **Activate:** no attribute needed
- **Use when:** daily-use products, personal tools, creative apps, mobile-first PWAs
- **Character:** tactile, optimistic, relaxed
- **Accent:** soft violet on warm stone
- **Shape:** pill buttons, round chips, 16px cards
- **Surfaces:** soft fills, minimal shadow, light borders on cards

## Site

- **Activate:** `<html data-mood="site">`
- **Use when:** finance, operations, dashboards, institutional marketing
- **Character:** composed, precise, trustworthy
- **Accent:** evergreen on mineral white
- **Shape:** 8–12px radii, structured controls
- **Surfaces:** white cards with hairline borders, almost no shadow

## Dark mode

Both moods support warm dark themes:

```ts
document.documentElement.dataset.theme = 'dark'
```

Never use cold pure black — backgrounds stay mineral or forest-toned.

## Accent palettes

Brand color is independent from mood. Without `data-accent`, App defaults to **violet** and Site to **evergreen**.

```html
<html data-mood="app" data-accent="teal">
```

Available: `violet`, `evergreen`, `teal`, `ocean`, `amber`, `rose`, `coral`, `slate`.

See [colors.md](./colors.md) for the full guide.
