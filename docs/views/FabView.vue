<script setup lang="ts">
import { AkButton, AkFab, AkIcon } from '@akoma'
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Fab</h1>
    <p class="docs-lead">
      Floating primary action pinned above the tab bar via
      <code>--fab-bottom</code>. Add <code>.ak-page-body--with-fab</code> on the
      scroll body so content clears the control.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Live preview</h2>
    <p class="docs-section__desc">
      Demo frame simulates a phone shell. The FAB stays fixed to the frame bottom.
    </p>
    <div class="docs-fab-frame">
      <div class="docs-fab-frame__body ak-page-body--with-fab">
        <p>Scrollable content clears the FAB.</p>
        <p
          v-for="n in 8"
          :key="n"
          class="docs-fab-line"
        >
          Row {{ n }}
        </p>
      </div>
      <div class="docs-fab-frame__nav" />
      <AkFab class="docs-fab-frame__fab">
        <AkButton>
          <template #icon>
            <AkIcon
              name="plus-outline"
              :size="18"
            />
          </template>
          New
        </AkButton>
      </AkFab>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Usage</h2>
    <pre class="docs-code"><code>&lt;div class="app-scroll ak-page-body--with-fab"&gt;…&lt;/div&gt;
&lt;AkFab&gt;
  &lt;AkButton&gt;New&lt;/AkButton&gt;
&lt;/AkFab&gt;</code></pre>
  </section>
</template>

<style scoped>
.docs-fab-frame {
  position: relative;
  max-width: 360px;
  height: 420px;
  margin-top: var(--space-4);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  background: var(--bg);
  overflow: hidden;
}

.docs-fab-frame__body {
  height: 100%;
  overflow-y: auto;
  padding: var(--space-5);
  padding-bottom: calc(var(--nav-height) + var(--fab-height) + var(--space-8));
  color: var(--text-secondary);
  font-size: 14px;
}

.docs-fab-line {
  margin: var(--space-3) 0;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--bg-soft);
}

.docs-fab-frame__nav {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: var(--nav-height);
  border-top: 1px solid var(--border);
  background: var(--bg-elevated);
}

.docs-fab-frame__fab {
  position: absolute;
  right: var(--page-pad-x);
  bottom: calc(var(--nav-height) + var(--space-3));
}
</style>
