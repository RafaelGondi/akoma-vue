<script setup lang="ts">
import { ref } from 'vue'
import { AkIcon, type CuidaIconName } from '@akoma'

const name = ref<CuidaIconName>('home-outline')
const size = ref(24)

const samples: CuidaIconName[] = [
  'home-outline',
  'plus-outline',
  'edit-outline',
  'trash-outline',
  'search-outline',
  'settings-outline',
  'calendar-outline',
  'check-outline',
  'open-book-outline',
  'test-tube-outline',
]
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Icon</h1>
    <p class="docs-lead">
      Akoma uses <a href="https://github.com/Sysvale/cuida-icons" target="_blank" rel="noreferrer">Cuida Icons</a>
      via <code>AkIcon</code>. Names follow the Cuida convention, e.g.
      <code>trash-outline</code>.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview">
      <AkIcon :name="name" :size="size" />
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="icon-name">name</label>
        <input id="icon-name" v-model="name" type="text" />
      </div>
      <div class="docs-control">
        <label for="icon-size">size</label>
        <input id="icon-size" v-model.number="size" type="number" min="12" max="48" />
      </div>
    </div>
    <pre class="docs-code">&lt;AkIcon name="{{ name }}" :size="{{ size }}" /&gt;</pre>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Common icons</h2>
    <div class="docs-preview docs-icon-grid">
      <div v-for="icon in samples" :key="icon" class="docs-icon-cell">
        <AkIcon :name="icon" :size="22" />
        <span>{{ icon }}</span>
      </div>
    </div>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">Install</h2>
    <pre class="docs-code">npm install @rafael_dias/akoma @sysvale/cuida-icons</pre>
  </section>
</template>

<style scoped>
.docs-icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

.docs-icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 10px;
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  font-size: 11px;
  color: var(--text-secondary);
  text-align: center;
  word-break: break-word;
}
</style>
