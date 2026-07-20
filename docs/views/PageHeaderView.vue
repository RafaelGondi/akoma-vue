<script setup lang="ts">
import { AkChip, AkIconButton, AkPageHeader, AkProgress } from '@akoma'
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">PageHeader</h1>
    <p class="docs-lead">
      Page chrome for mood <code>app</code>: label → title → meta → actions.
      See the <RouterLink to="/guides/patterns">Patterns</RouterLink> guide.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Bordered (day / settings)</h2>
    <div class="docs-preview docs-preview--flush">
      <AkPageHeader
        label="Your routine"
        title="Today"
        meta="Monday, 20 July"
        size="md"
      >
        <template #actions>
          <AkIconButton
            label="Previous"
            icon="caret-left-outline"
            size="sm"
          />
          <AkIconButton
            label="Next"
            icon="caret-right-outline"
            size="sm"
          />
        </template>
        <AkProgress
          :value="3"
          :max="5"
          label="3 of 5 done"
          show-value
        />
        <div class="docs-chip-row">
          <AkChip active>All</AkChip>
          <AkChip>Morning</AkChip>
          <AkChip>Night</AkChip>
        </div>
      </AkPageHeader>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Flush (progress)</h2>
    <div class="docs-preview docs-preview--flush">
      <AkPageHeader
        variant="flush"
        label="Your progress"
        title="Progress"
        meta="Trends help more than isolated days."
      />
    </div>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">Usage</h2>
    <pre class="docs-code"><code>&lt;AkPageHeader label="Your routine" title="Today" meta="Monday" size="md"&gt;
  &lt;template #actions&gt;…&lt;/template&gt;
  &lt;!-- optional body: progress, chips --&gt;
&lt;/AkPageHeader&gt;</code></pre>
  </section>
</template>

<style scoped>
.docs-preview--flush {
  padding: 0;
  overflow: hidden;
}

.docs-chip-row {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}
</style>
