<script setup lang="ts">
import { ref } from 'vue'
import { AkButton, AkSheet, AkInput } from '@akoma'

const open = ref(false)
const name = ref('Morning walk')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Sheet</h1>
    <p class="docs-lead">
      Mobile bottom sheet for detail and forms. Rare elevation on
      <code>--bg-elevated</code>. Prefer over centered modals in mood
      <code>app</code> PWAs. See the <RouterLink to="/guides/patterns">Patterns</RouterLink> guide.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Live preview</h2>
    <p class="docs-section__desc">
      Handle swipe-down, backdrop click, and the close button dismiss the sheet.
    </p>
    <div class="docs-preview">
      <AkButton @click="open = true">
        Open sheet
      </AkButton>
    </div>

    <AkSheet
      v-model:open="open"
      title="Edit item"
    >
      <div class="docs-sheet-body">
        <AkInput
          v-model="name"
          label="Name"
        />
        <AkButton
          block
          @click="open = false"
        >
          Save
        </AkButton>
      </div>
    </AkSheet>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Usage</h2>
    <pre class="docs-code"><code>&lt;AkSheet v-model:open="open" title="Edit item" close-label="Fechar"&gt;
  &lt;!-- form or detail --&gt;
&lt;/AkSheet&gt;</code></pre>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">Props</h2>
    <ul class="docs-props">
      <li><code>open</code> — controlled visibility (<code>v-model:open</code>)</li>
      <li><code>title</code> — optional header title</li>
      <li><code>closeLabel</code> — a11y label for the close button (default <code>Close</code>)</li>
      <li><code>showClose</code> — show close when title is set (default <code>true</code>)</li>
      <li><code>dismissible</code> — backdrop click closes (default <code>true</code>)</li>
    </ul>
  </section>
</template>

<style scoped>
.docs-sheet-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: 0 var(--space-5) var(--space-5);
}

.docs-props {
  margin: var(--space-3) 0 0;
  padding-left: 1.25rem;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

.docs-props code {
  color: var(--text);
  font-weight: 650;
}
</style>
