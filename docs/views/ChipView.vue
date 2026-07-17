<script setup lang="ts">
import { ref } from 'vue'
import { AkChip } from '@akoma'

const active = ref('all')
const filters = [
  { id: 'all', label: 'All' },
  { id: 'movies', label: 'Movies', color: 'var(--cat-1)' },
  { id: 'series', label: 'Series', color: 'var(--cat-2)' },
  { id: 'books', label: 'Books', color: 'var(--cat-3)' },
]
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Chip</h1>
    <p class="docs-lead">
      Filter and category pills. Pass <code>color</code> for category accent when active.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Interactive filters</h2>
    <div class="docs-preview">
      <AkChip
        v-for="item in filters"
        :key="item.id"
        :active="active === item.id"
        :color="item.color"
        @click="active = item.id"
      >
        {{ item.label }}
      </AkChip>
    </div>
    <pre class="docs-code">&lt;AkChip
  :active="active === 'movies'"
  color="var(--cat-1)"
  @click="active = 'movies'"
&gt;
  Movies
&lt;/AkChip&gt;</pre>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Props</h2>
    <table class="docs-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>active</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>color</code></td>
          <td><code>string</code></td>
          <td><code>—</code></td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
