<script setup lang="ts">
import { ref } from 'vue'
import { AkTextarea } from '@akoma'

const value = ref('')
const label = ref('Notes')
const placeholder = ref('Add a short description…')
const rows = ref(4)
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Textarea</h1>
    <p class="docs-lead">Multi-line field matching the Input visual language.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 480px">
      <AkTextarea
        v-model="value"
        :label="label"
        :placeholder="placeholder"
        :rows="rows"
        hint="Markdown is not supported yet."
      />
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="ta-label">label</label>
        <input id="ta-label" v-model="label" type="text" />
      </div>
      <div class="docs-control">
        <label for="ta-rows">rows</label>
        <input id="ta-rows" v-model.number="rows" type="number" min="2" max="12" />
      </div>
    </div>
  </section>
</template>
