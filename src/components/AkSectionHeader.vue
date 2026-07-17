<script setup lang="ts">
defineProps<{
  title?: string
}>()

defineSlots<{
  default?: () => unknown
  action?: () => unknown
}>()
</script>

<template>
  <header class="ak-section-header">
    <h2 class="ak-section-header__title">
      <slot>{{ title }}</slot>
    </h2>
    <div v-if="$slots.action" class="ak-section-header__action">
      <slot name="action" />
    </div>
  </header>
</template>

<style scoped>
.ak-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.ak-section-header__title {
  margin: 0;
  color: var(--text-tertiary);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.3;
  text-transform: uppercase;
}

.ak-section-header__action {
  flex-shrink: 0;
}
</style>
