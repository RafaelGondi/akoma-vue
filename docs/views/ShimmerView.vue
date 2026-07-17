<script setup lang="ts">
import { AkCard, AkShimmer } from '@akoma'
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Shimmer</h1>
    <p class="docs-lead">Loading placeholders that match content radius and proportions.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Skeleton card</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 360px">
      <AkCard padding="md">
        <div style="display: flex; gap: 14px; align-items: center">
          <AkShimmer width="56px" height="84px" radius="md" />
          <div style="flex: 1; display: grid; gap: 8px">
            <AkShimmer width="40%" height="10px" />
            <AkShimmer width="80%" height="14px" />
            <AkShimmer width="55%" height="12px" />
          </div>
        </div>
      </AkCard>
    </div>
    <pre class="docs-code">&lt;AkShimmer width="56px" height="84px" radius="md" /&gt;
&lt;AkShimmer width="80%" height="14px" /&gt;</pre>
  </section>
</template>
