<script setup lang="ts">
import { computed, ref } from 'vue'
import { AkBadge } from '@akoma'
import type { BadgeVariant } from '@akoma'

const variant = ref<BadgeVariant>('accent')
const label = ref('In progress')

const code = computed(
  () => `<AkBadge variant="${variant.value}" label="${label.value}" />`,
)
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Badge</h1>
    <p class="docs-lead">Compact status pills for metadata and state labels.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview">
      <AkBadge :variant="variant" :label="label" />
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="badge-variant">variant</label>
        <select id="badge-variant" v-model="variant">
          <option value="neutral">neutral</option>
          <option value="accent">accent</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="danger">danger</option>
          <option value="info">info</option>
        </select>
      </div>
      <div class="docs-control">
        <label for="badge-label">label</label>
        <input id="badge-label" v-model="label" type="text" />
      </div>
    </div>
    <pre class="docs-code">{{ code }}</pre>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">All variants</h2>
    <div class="docs-preview">
      <AkBadge variant="neutral">Neutral</AkBadge>
      <AkBadge variant="accent">Accent</AkBadge>
      <AkBadge variant="success">Success</AkBadge>
      <AkBadge variant="warning">Warning</AkBadge>
      <AkBadge variant="danger">Danger</AkBadge>
      <AkBadge variant="info">Info</AkBadge>
    </div>
  </section>
</template>
