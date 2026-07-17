<script setup lang="ts">
import { ref } from 'vue'
import { AkButton, AkEmptyState } from '@akoma'

const title = ref('Nothing here yet')
const description = ref('Add your first item to start building your library.')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">EmptyState</h1>
    <p class="docs-lead">Centered empty list placeholder with floating rings and action slot.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview docs-preview--center">
      <div style="width: min(100%, 360px)">
        <AkEmptyState :title="title" :description="description">
          <template #icon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14" stroke-linecap="round" />
            </svg>
          </template>
          <template #action>
            <AkButton>Add item</AkButton>
          </template>
        </AkEmptyState>
      </div>
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="empty-title">title</label>
        <input id="empty-title" v-model="title" type="text" />
      </div>
      <div class="docs-control">
        <label for="empty-desc">description</label>
        <input id="empty-desc" v-model="description" type="text" />
      </div>
    </div>
  </section>
</template>
