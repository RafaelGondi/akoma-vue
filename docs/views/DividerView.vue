<script setup lang="ts">
import { ref } from 'vue'
import { AkDivider } from '@akoma'

const label = ref('Today')
const spacing = ref<'sm' | 'md' | 'lg'>('md')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Divider</h1>
    <p class="docs-lead">Flat separators for sections and inline groups.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <p style="font-size: 14px; color: var(--text-secondary)">Content above</p>
      <AkDivider :label="label || undefined" :spacing="spacing" />
      <p style="font-size: 14px; color: var(--text-secondary)">Content below</p>
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="divider-label">label</label>
        <input id="divider-label" v-model="label" type="text" />
      </div>
      <div class="docs-control">
        <label for="divider-spacing">spacing</label>
        <select id="divider-spacing" v-model="spacing">
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
        </select>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Vertical</h2>
    <div class="docs-preview" style="min-height: 48px">
      <span style="font-size: 14px">Left</span>
      <AkDivider vertical spacing="md" />
      <span style="font-size: 14px">Right</span>
    </div>
  </section>
</template>
