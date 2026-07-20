# Implementation checklist

Use when migrating an app to Akoma or briefing an agent.

1. Install `@rafael_dias/akoma`, `@sysvale/cuida-icons`, and import `@rafael_dias/akoma/style.css` once at entry
2. Pick mood at root: App for products, Site for finance/B2B — set an explicit `data-accent`
3. Read [patterns.md](./patterns.md) for shell, page chrome, sheets, and accent vs `--cat-*`
4. Map buttons, inputs, cards, lists, badges, chips to Akoma components
5. Prefer `AkList` over `AkCard` for primary personal-app surfaces
6. Use `AkSheet` for mobile detail/forms (not centered modals)
7. Use `AkTabBar` for primary navigation in mood `app` PWAs
8. Use `.ak-app-root` / `.ak-app-main` / `.ak-app-scroll` for the locked phone shell
9. Prefer Cuida icons via `AkIcon` / `AkIconButton icon=` (peer `@sysvale/cuida-icons`)
10. Replace loose hex/radius/shadow with tokens (`--bg`, `--accent`, `--space-*`, etc.)
11. Use `AkEmptyState` and `AkShimmer` instead of one-off empty/loading UI
12. Use `.numeric` for financial figures (tabular nums)
13. Map domain colors to `--cat-1` … `--cat-6` in app `:root` if needed
14. Do **not** refactor stores, routes, or API during UI-only work

## Setup example (finance app)

```ts
document.documentElement.dataset.mood = 'site'

import { createApp } from 'vue'
import { Akoma } from '@rafael_dias/akoma'
import '@rafael_dias/akoma/style.css'

createApp(App).use(Akoma).mount('#app')
```

## Reading guides in your app

```ts
import philosophy from '@rafael_dias/akoma/content/philosophy.md?raw'
import patterns from '@rafael_dias/akoma/content/patterns.md?raw'
import checklist from '@rafael_dias/akoma/content/implementation.md?raw'
```

Use in dev panels, onboarding, or agent prompts — versioned with the package.
