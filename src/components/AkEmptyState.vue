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
  padding: var(--space-12) var(--space-8);
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
}

.ak-empty__icon {
  position: relative;
  width: 76px;
  height: 70px;
  margin-bottom: var(--space-5);
  display: grid;
  place-items: center;
  animation: ak-empty-float 4s ease-in-out infinite;
}

.ak-empty__ring {
  position: absolute;
  border: 0;
  transition: transform 320ms var(--ease-out-expo);
}

.ak-empty__ring--outer {
  inset: 3px 1px 0 4px;
  border-radius: 46% 54% 61% 39% / 52% 42% 58% 48%;
  background: var(--accent-soft);
  transform: rotate(-5deg);
}

.ak-empty__ring--inner {
  inset: 16px 14px 13px 16px;
  border-radius: 55% 45% 42% 58% / 44% 56% 46% 54%;
  background: color-mix(in srgb, var(--accent) 14%, var(--bg-elevated));
  transform: rotate(8deg);
}

.ak-empty__glyph {
  position: relative;
  z-index: 1;
  color: var(--accent);
  display: inline-flex;
  width: 21px;
  height: 21px;
}

.ak-empty__glyph :deep(svg) {
  width: 100%;
  height: 100%;
}

.ak-empty__title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 650;
  letter-spacing: -0.025em;
  color: var(--text);
  margin-bottom: var(--space-2);
}

.ak-empty__description {
  font-size: 14px;
  color: var(--text-secondary);
  max-width: 280px;
  line-height: 1.55;
}

.ak-empty__action {
  margin-top: var(--space-6);
}

@keyframes ak-empty-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px) rotate(1deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ak-empty__icon {
    animation: none;
  }
}
</style>
