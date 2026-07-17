<script setup lang="ts">
import { ref } from 'vue'
import { AkBadge, AkButton, AkCard } from '@akoma'

const interactive = ref(true)
const padding = ref<'none' | 'sm' | 'md' | 'lg'>('md')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Card</h1>
    <p class="docs-lead">Elevated surface with optional media, header, and footer slots.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkCard :interactive="interactive" :padding="padding">
        <template #header>
          <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cat-1)">
            Series
          </span>
          <AkBadge variant="success">Watching</AkBadge>
        </template>
        <h3 style="font-family: var(--font-display); font-size: 18px; margin-bottom: 4px">
          Severance
        </h3>
        <p style="font-size: 13px; color: var(--text-tertiary)">Season 2 · Episode 4</p>
        <template #footer>
          <AkButton size="sm" variant="secondary">Details</AkButton>
          <AkButton size="sm">Continue</AkButton>
        </template>
      </AkCard>
    </div>

    <div class="docs-controls">
      <div class="docs-control">
        <label for="card-padding">padding</label>
        <select id="card-padding" v-model="padding">
          <option value="none">none</option>
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
        </select>
      </div>
      <div class="docs-control docs-control--checkbox">
        <input id="card-interactive" v-model="interactive" type="checkbox" />
        <label for="card-interactive">interactive</label>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">With media</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 280px">
      <AkCard padding="none" interactive>
        <template #media>
          <div
            style="
              height: 140px;
              background: linear-gradient(135deg, var(--accent-soft), var(--success-soft));
              display: grid;
              place-items: center;
              font-family: var(--font-display);
              font-size: 40px;
              font-weight: 600;
              color: var(--accent);
            "
          >
            A
          </div>
        </template>
        <h3 style="font-family: var(--font-display); font-size: 16px; margin-top: 4px">Akoma</h3>
        <p style="font-size: 12px; color: var(--text-tertiary)">Design system cover</p>
      </AkCard>
    </div>
  </section>
</template>
