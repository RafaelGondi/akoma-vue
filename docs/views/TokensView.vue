<script setup lang="ts">
const surfaces = [
  { name: 'Background', token: '--bg' },
  { name: 'Elevated', token: '--bg-elevated' },
  { name: 'Soft', token: '--bg-soft' },
  { name: 'Muted', token: '--bg-muted' },
]

const text = [
  { name: 'Primary', token: '--text' },
  { name: 'Secondary', token: '--text-secondary' },
  { name: 'Tertiary', token: '--text-tertiary' },
]

const brand = [
  { name: 'Accent', token: '--accent' },
  { name: 'Accent soft', token: '--accent-soft' },
  { name: 'Accent hover', token: '--accent-hover' },
]

const cats = [
  { name: 'Category 1', token: '--cat-1' },
  { name: 'Category 2', token: '--cat-2' },
  { name: 'Category 3', token: '--cat-3' },
  { name: 'Category 4', token: '--cat-4' },
  { name: 'Category 5', token: '--cat-5' },
  { name: 'Category 6', token: '--cat-6' },
]

const semantic = [
  { name: 'Success', token: '--success' },
  { name: 'Warning', token: '--warning' },
  { name: 'Danger', token: '--danger' },
  { name: 'Info', token: '--info' },
]
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Foundation</span>
    <h1 class="page-title">Tokens</h1>
    <p class="docs-lead">
      CSS custom properties power every component. The swatches below react to the
      mood switch (App / Site) and theme. Override in your <code>:root</code>, or set
      <code>data-mood="site"</code> and <code>data-theme="dark"</code> on the
      <code>html</code> element.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Surfaces</h2>
    <div class="docs-swatch-grid">
      <div v-for="item in surfaces" :key="item.token" class="docs-swatch">
        <div class="docs-swatch__color" :style="{ background: `var(${item.token})` }" />
        <div class="docs-swatch__meta">
          <div class="docs-swatch__name">{{ item.name }}</div>
          <div class="docs-swatch__token">{{ item.token }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Text</h2>
    <div class="docs-swatch-grid">
      <div v-for="item in text" :key="item.token" class="docs-swatch">
        <div class="docs-swatch__color" :style="{ background: `var(${item.token})` }" />
        <div class="docs-swatch__meta">
          <div class="docs-swatch__name">{{ item.name }}</div>
          <div class="docs-swatch__token">{{ item.token }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">Brand</h2>
    <div class="docs-swatch-grid">
      <div v-for="item in brand" :key="item.token" class="docs-swatch">
        <div class="docs-swatch__color" :style="{ background: `var(${item.token})` }" />
        <div class="docs-swatch__meta">
          <div class="docs-swatch__name">{{ item.name }}</div>
          <div class="docs-swatch__token">{{ item.token }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d4">
    <h2 class="docs-section__title">Categories</h2>
    <div class="docs-swatch-grid">
      <div v-for="item in cats" :key="item.token" class="docs-swatch">
        <div class="docs-swatch__color" :style="{ background: `var(${item.token})` }" />
        <div class="docs-swatch__meta">
          <div class="docs-swatch__name">{{ item.name }}</div>
          <div class="docs-swatch__token">{{ item.token }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d5">
    <h2 class="docs-section__title">Semantic</h2>
    <div class="docs-swatch-grid">
      <div v-for="item in semantic" :key="item.token" class="docs-swatch">
        <div class="docs-swatch__color" :style="{ background: `var(${item.token})` }" />
        <div class="docs-swatch__meta">
          <div class="docs-swatch__name">{{ item.name }}</div>
          <div class="docs-swatch__token">{{ item.token }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d6">
    <h2 class="docs-section__title">Typography & radius</h2>
    <div class="docs-preview docs-preview--stack">
      <p style="font-family: var(--font-display); font-size: 32px; font-weight: 650; letter-spacing: -0.04em">
        DM Sans — clear, human, quietly expressive
      </p>
      <p style="font-family: var(--font-body); font-size: 16px; color: var(--text-secondary)">
        The same family carries headings, interface copy, and tabular financial data.
        Lora is available through <code>--font-editorial</code> for rare editorial moments.
      </p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px">
        <div
          v-for="r in ['sm', 'md', 'lg', 'full']"
          :key="r"
          :style="{
            width: r === 'full' ? '64px' : '72px',
            height: '48px',
            borderRadius: `var(--radius-${r})`,
            background: 'var(--accent-soft)',
            border: '1px solid var(--border)',
            display: 'grid',
            placeItems: 'center',
            fontSize: '12px',
            fontWeight: 600,
            color: 'var(--accent)',
          }"
        >
          {{ r }}
        </div>
      </div>
    </div>
  </section>
</template>
