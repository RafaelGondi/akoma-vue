<script setup lang="ts">
import { useRouter } from 'vue-router'
import { AkBadge, AkButton, AkCard, AkChip } from '@akoma'

const router = useRouter()
</script>

<template>
  <header class="docs-page-header docs-hero reveal">
    <span class="page-label">Design for real people</span>
    <h1 class="page-title">Clarity can feel warm.</h1>
    <p class="docs-lead">
      Akoma is a human design system for Vue 3. It balances calm, personality,
      and trust across two expressions — without turning serious products cold
      or playful products childish.
    </p>
    <div class="docs-hero__actions">
      <AkButton size="lg" @click="router.push('/components/button')">
        Explore components
      </AkButton>
      <AkButton size="lg" variant="secondary" @click="router.push('/tokens')">
        View foundations
      </AkButton>
    </div>
  </header>

  <section class="docs-section reveal reveal-d1">
    <div class="docs-section-heading">
      <div>
        <span class="page-label">Two expressions</span>
        <h2 class="docs-section__title">Different contexts, shared character</h2>
      </div>
      <p class="docs-section__desc">
        Typography, spacing, accessibility, and component anatomy remain the same.
        Color, shape, and elevation adapt to the job.
      </p>
    </div>

    <div class="docs-expression-grid">
      <article class="docs-expression" data-mood="app">
        <div class="docs-expression__top">
          <span class="docs-expression__index">01</span>
          <AkBadge variant="accent">App</AkBadge>
        </div>
        <h3>Relaxed and expressive</h3>
        <p>
          Softer shapes, tactile surfaces, and a mineral violet accent for
          products that should feel personal and easy to return to.
        </p>
        <div class="docs-expression__demo">
          <div class="docs-demo-copy">
            <span>Today</span>
            <strong>A gentle start</strong>
            <small>3 of 5 moments complete</small>
          </div>
          <div class="docs-demo-progress">
            <span />
          </div>
          <div class="docs-demo-actions">
            <AkChip active>Focus</AkChip>
            <AkButton size="sm">Continue</AkButton>
          </div>
        </div>
      </article>

      <article class="docs-expression" data-mood="site">
        <div class="docs-expression__top">
          <span class="docs-expression__index">02</span>
          <AkBadge variant="success">Site</AkBadge>
        </div>
        <h3>Composed and trustworthy</h3>
        <p>
          Controlled radii, crisp controls, and evergreen tones for finance,
          operations, and other high-confidence environments.
        </p>
        <div class="docs-expression__demo">
          <div class="docs-finance-head">
            <span>Available balance</span>
            <AkBadge variant="success">Up to date</AkBadge>
          </div>
          <strong class="docs-balance numeric">R$ 24.860,40</strong>
          <div class="docs-finance-meta">
            <span>Monthly result</span>
            <strong class="numeric">+8.4%</strong>
          </div>
          <AkButton size="sm" block>View statement</AkButton>
        </div>
      </article>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <div class="docs-section-heading">
      <div>
        <span class="page-label">Family principles</span>
        <h2 class="docs-section__title">Human, not ornamental</h2>
      </div>
    </div>
    <div class="docs-principle-grid">
      <AkCard padding="lg">
        <span class="docs-principle__number">01</span>
        <h3>Space creates hierarchy</h3>
        <p>Separation comes from rhythm first. Borders only appear when they clarify behavior.</p>
      </AkCard>
      <AkCard padding="lg">
        <span class="docs-principle__number">02</span>
        <h3>Warmth supports trust</h3>
        <p>Natural neutrals soften the experience while deep ink keeps information credible.</p>
      </AkCard>
      <AkCard padding="lg">
        <span class="docs-principle__number">03</span>
        <h3>Personality stays quiet</h3>
        <p>Shape, color, and motion add humanity without competing with the task at hand.</p>
      </AkCard>
    </div>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">Start using Akoma</h2>
    <p class="docs-section__desc">
      App is the default. Add <code>data-mood="site"</code> at the root for the
      more restrained expression.
    </p>
    <pre class="docs-code">npm install @akoma/vue

import { createApp } from 'vue'
import { Akoma } from '@akoma/vue'
import '@akoma/vue/style.css'

document.documentElement.dataset.mood = 'site'
createApp(App).use(Akoma).mount('#app')</pre>
  </section>

  <section class="docs-section reveal reveal-d4">
    <h2 class="docs-section__title">Browse the system</h2>
    <div class="docs-card-grid">
      <RouterLink to="/tokens" class="docs-link-card">
        <span class="docs-link-card__eyebrow">Foundation</span>
        <div class="docs-link-card__title">Tokens</div>
        <div class="docs-link-card__desc">Color, type, spacing, radius, and motion.</div>
      </RouterLink>
      <RouterLink to="/components/button" class="docs-link-card">
        <span class="docs-link-card__eyebrow">Action</span>
        <div class="docs-link-card__title">Button</div>
        <div class="docs-link-card__desc">Clear actions with calm, useful feedback.</div>
      </RouterLink>
      <RouterLink to="/components/input" class="docs-link-card">
        <span class="docs-link-card__eyebrow">Form</span>
        <div class="docs-link-card__title">Input</div>
        <div class="docs-link-card__desc">Friendly fields that remain precise.</div>
      </RouterLink>
      <RouterLink to="/components/empty-state" class="docs-link-card">
        <span class="docs-link-card__eyebrow">Feedback</span>
        <div class="docs-link-card__title">EmptyState</div>
        <div class="docs-link-card__desc">A gentle way to guide the next step.</div>
      </RouterLink>
    </div>
  </section>
</template>
