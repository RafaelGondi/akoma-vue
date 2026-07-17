<script setup lang="ts">
import { ref } from 'vue'
import { AkIconButton, type CuidaIconName } from '@akoma'
import type { IconButtonSize, IconButtonVariant } from '@akoma'

const variant = ref<IconButtonVariant>('ghost')
const size = ref<IconButtonSize>('md')
const icon = ref<CuidaIconName>('plus-outline')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">IconButton</h1>
    <p class="docs-lead">
      Compact icon-only actions powered by Cuida Icons — pass <code>icon</code> or use the slot.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview">
      <AkIconButton label="Add item" :variant="variant" :size="size" :icon="icon" />
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
      <div class="docs-control">
        <label for="icon-name">icon</label>
        <input id="icon-name" v-model="icon" type="text" />
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">All variants</h2>
    <div class="docs-preview">
      <AkIconButton label="Add" icon="plus-outline" variant="ghost" />
      <AkIconButton label="Edit" icon="edit-outline" variant="secondary" />
      <AkIconButton label="Delete" icon="trash-outline" variant="danger" />
    </div>
  </section>
</template>
