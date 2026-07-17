<script setup lang="ts">
import { AkAmbientBg, AkCard } from '@akoma'
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">AmbientBg</h1>
    <p class="docs-lead">
      Fixed blurred orbs behind your app shell. Place once at the root; content sits above.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Preview</h2>
    <div
      class="docs-preview"
      style="position: relative; min-height: 280px; overflow: hidden; isolation: isolate"
    >
      <AkAmbientBg contained />
      <AkCard padding="lg" style="position: relative; z-index: 1; max-width: 320px">
        <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 6px">
          Soft atmosphere
        </h3>
        <p style="font-size: 14px; color: var(--text-secondary)">
          Ambient orbs drift slowly and respect reduced-motion preferences.
        </p>
      </AkCard>
    </div>
    <pre class="docs-code">&lt;AkAmbientBg /&gt;
&lt;main class="akoma-shell"&gt;…&lt;/main&gt;</pre>
  </section>
</template>
