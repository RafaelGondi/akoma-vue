<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()

defineSlots<{
  icon?: () => unknown
  action?: () => unknown
}>()
</script>

<template>
  <div class="ak-empty">
    <div class="ak-empty__icon" aria-hidden="true">
      <span class="ak-empty__ring ak-empty__ring--outer" />
      <span class="ak-empty__ring ak-empty__ring--inner" />
      <span v-if="$slots.icon" class="ak-empty__glyph">
        <slot name="icon" />
      </span>
    </div>
    <h3 class="ak-empty__title">{{ title }}</h3>
    <p v-if="description" class="ak-empty__description">{{ description }}</p>
    <div v-if="$slots.action" class="ak-empty__action">
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped>
.ak-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 44px 28px;
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.ak-empty__icon {
  position: relative;
  width: 72px;
  height: 72px;
  margin-bottom: 18px;
  display: grid;
  place-items: center;
  animation: ak-empty-float 3.2s ease-in-out infinite;
}

.ak-empty__ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid var(--accent-soft);
  background: transparent;
}

.ak-empty__ring--outer {
  inset: 0;
  background: var(--accent-soft);
}

.ak-empty__ring--inner {
  inset: 12px;
  border-color: color-mix(in srgb, var(--accent) 25%, transparent);
}

.ak-empty__glyph {
  position: relative;
  z-index: 1;
  color: var(--accent);
  display: inline-flex;
  width: 22px;
  height: 22px;
}

.ak-empty__glyph :deep(svg) {
  width: 100%;
  height: 100%;
}

.ak-empty__title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 6px;
}

.ak-empty__description {
  font-size: 14px;
  color: var(--text-secondary);
  max-width: 280px;
  line-height: 1.55;
}

.ak-empty__action {
  margin-top: 22px;
}

@keyframes ak-empty-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ak-empty__icon {
    animation: none;
  }
}
</style>
