<script setup lang="ts">
import { accentPaletteIds, accentPalettes } from '@akoma'

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
  { name: 'Accent light', token: '--accent-light' },
  { name: 'Accent', token: '--accent' },
  { name: 'Accent dark', token: '--accent-dark' },
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
      CSS custom properties power every component. Swatches react to mood (App / Site),
      accent palette, and theme. Set <code>data-mood</code>, <code>data-accent</code>, and
      <code>data-theme="dark"</code> on <code>html</code>.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Accent palettes</h2>
    <p class="docs-section__desc" style="margin-bottom: 16px">
      Use the accent picker in the toolbar, or set <code>data-accent="teal"</code> on
      <code>html</code>. Without it, App defaults to violet and Site to evergreen.
    </p>
    <div class="docs-swatch-grid">
      <div v-for="id in accentPaletteIds" :key="id" class="docs-swatch">
        <div class="docs-swatch__shades" aria-hidden="true">
          <span :style="{ background: accentPalettes[id].light }" />
          <span :style="{ background: accentPalettes[id].sample }" />
          <span :style="{ background: accentPalettes[id].dark }" />
        </div>
        <div class="docs-swatch__meta">
          <div class="docs-swatch__name">{{ accentPalettes[id].label }}</div>
          <div class="docs-swatch__token">data-accent="{{ id }}"</div>
        </div>
      </div>
    </div>
    <p style="margin-top: 14px; font-size: 13px; color: var(--text-secondary)">
      Use the accent picker in the toolbar to preview each palette on live components.
    </p>
  </section>

  <section class="docs-section reveal reveal-d2">
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

  <section class="docs-section reveal reveal-d3">
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

  <section class="docs-section reveal reveal-d4">
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

  <section class="docs-section reveal reveal-d5">
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

  <section class="docs-section reveal reveal-d6">
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

  <section class="docs-section reveal reveal-d7">
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
