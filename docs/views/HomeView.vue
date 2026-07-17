<script setup lang="ts">
import { AkBadge, AkButton, AkCard, AkChip } from '@akoma'
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Design system</span>
    <h1 class="page-title">Akoma</h1>
    <p class="docs-lead">
      A warm, human design system for Vue 3. Two moods, one family: the
      <strong>App</strong> mood is playful and calm, made for products; the
      <strong>Site</strong> mood is sober and natural, made for marketing sites.
      Try the switch in the top-right corner.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <div class="docs-preview docs-preview--center">
      <AkButton>Primary</AkButton>
      <AkButton variant="secondary">Secondary</AkButton>
      <AkChip active>Filter</AkChip>
      <AkBadge variant="accent">New</AkBadge>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Get started</h2>
    <p class="docs-section__desc">Install later from npm, or import locally while developing.</p>
    <pre class="docs-code">npm install @akoma/vue

import { createApp } from 'vue'
import { Akoma } from '@akoma/vue'
import '@akoma/vue/style.css'

createApp(App).use(Akoma).mount('#app')</pre>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">Browse</h2>
    <div class="docs-card-grid">
      <RouterLink to="/tokens" class="docs-link-card">
        <div class="docs-link-card__title">Tokens</div>
        <div class="docs-link-card__desc">Colors, radius, typography, motion</div>
      </RouterLink>
      <RouterLink to="/components/button" class="docs-link-card">
        <div class="docs-link-card__title">Button</div>
        <div class="docs-link-card__desc">Primary actions with variants and sizes</div>
      </RouterLink>
      <RouterLink to="/components/input" class="docs-link-card">
        <div class="docs-link-card__title">Input</div>
        <div class="docs-link-card__desc">Labeled fields with focus ring and errors</div>
      </RouterLink>
      <RouterLink to="/components/empty-state" class="docs-link-card">
        <div class="docs-link-card__title">EmptyState</div>
        <div class="docs-link-card__desc">Friendly empty lists with CTA slot</div>
      </RouterLink>
    </div>
  </section>

  <section class="docs-section reveal reveal-d4">
    <h2 class="docs-section__title">Principles</h2>
    <AkCard padding="lg">
      <ul style="display: grid; gap: 10px; color: var(--text-secondary); font-size: 14px; padding-left: 18px">
        <li>Warm, nature-inspired palettes — calm, close, trustworthy</li>
        <li>Hierarchy through spacing, not borders</li>
        <li>Generous white space, rounded corners, soft shadows</li>
        <li>Two moods: <code>data-mood="site"</code> switches the whole family</li>
        <li>Dark mode via <code>data-theme="dark"</code> — warm, never cold black</li>
        <li>Respect <code>prefers-reduced-motion</code>; no Tailwind, only CSS variables</li>
      </ul>
    </AkCard>
  </section>
</template>
