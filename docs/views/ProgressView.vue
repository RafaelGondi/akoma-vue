<script setup lang="ts">
import { ref } from 'vue'
import { AkProgress } from '@akoma'

const value = ref(62)
const size = ref<'sm' | 'md'>('md')
const showValue = ref(true)
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Progress</h1>
    <p class="docs-lead">Minimal progress bars for goals, loading context, and completion.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkProgress
        :value="value"
        label="Weekly goal"
        :size="size"
        :show-value="showValue"
      />
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="progress-value">value</label>
        <input id="progress-value" v-model.number="value" type="number" min="0" max="100" />
      </div>
      <div class="docs-control">
        <label for="progress-size">size</label>
        <select id="progress-size" v-model="size">
          <option value="sm">sm</option>
          <option value="md">md</option>
        </select>
      </div>
      <div class="docs-control docs-control--checkbox">
        <input id="progress-show" v-model="showValue" type="checkbox" />
        <label for="progress-show">showValue</label>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Custom color</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkProgress :value="45" label="Category" color="var(--cat-4)" show-value />
      <AkProgress :value="78" size="sm" color="var(--warning)" />
    </div>
  </section>
</template>
