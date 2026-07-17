<script setup lang="ts">
import { ref } from 'vue'
import { AkIconButton } from '@akoma'
import type { IconButtonSize, IconButtonVariant } from '@akoma'

const variant = ref<IconButtonVariant>('ghost')
const size = ref<IconButtonSize>('md')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">IconButton</h1>
    <p class="docs-lead">Compact icon-only actions for toolbars, list rows, and dialogs.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview">
      <AkIconButton label="Add item" :variant="variant" :size="size">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14" stroke-linecap="round" />
        </svg>
      </AkIconButton>
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="icon-variant">variant</label>
        <select id="icon-variant" v-model="variant">
          <option value="ghost">ghost</option>
          <option value="secondary">secondary</option>
          <option value="danger">danger</option>
        </select>
      </div>
      <div class="docs-control">
        <label for="icon-size">size</label>
        <select id="icon-size" v-model="size">
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
        </select>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">All variants</h2>
    <div class="docs-preview">
      <AkIconButton label="Add" variant="ghost">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12h14" stroke-linecap="round" />
        </svg>
      </AkIconButton>
      <AkIconButton label="Edit" variant="secondary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </AkIconButton>
      <AkIconButton label="Delete" variant="danger">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </AkIconButton>
    </div>
  </section>
</template>
