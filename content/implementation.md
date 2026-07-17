# Implementation checklist

Use when migrating an app to Akoma or briefing an agent.

1. Install `@rafael_dias/akoma`, `@sysvale/cuida-icons`, and import `@rafael_dias/akoma/style.css` once at entry
2. Pick mood at root: App for products, Site for finance/B2B
3. Map buttons, inputs, cards, lists, badges, chips to Akoma components
4. Replace loose hex/radius/shadow with tokens (`--bg`, `--accent`, `--space-*`, etc.)
5. Use `AkEmptyState` and `AkShimmer` instead of one-off empty/loading UI
6. Use `.numeric` for financial figures (tabular nums)
7. Map domain colors to `--cat-1` … `--cat-6` in app `:root` if needed
8. Do **not** refactor stores, routes, or API during UI-only work

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
import checklist from '@rafael_dias/akoma/content/implementation.md?raw'
```

Use in dev panels, onboarding, or agent prompts — versioned with the package.
