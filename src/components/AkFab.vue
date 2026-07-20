<script setup lang="ts">
/**
 * Floating primary action — pinned above the tab bar.
 * Place outside the scroll container; add `.ak-page-body--with-fab` to the body.
 */
defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <div class="ak-fab">
    <slot />
  </div>
</template>

<style scoped>
.ak-fab {
  position: fixed;
  z-index: 20;
  right: var(--page-pad-x);
  bottom: var(--fab-bottom);
}
</style>
