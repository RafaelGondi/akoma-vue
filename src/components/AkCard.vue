<script setup lang="ts">
withDefaults(
  defineProps<{
    interactive?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    interactive: false,
    padding: 'md',
  },
)

defineSlots<{
  default?: () => unknown
  media?: () => unknown
  header?: () => unknown
  footer?: () => unknown
}>()
</script>

<template>
  <article
    class="ak-card"
    :class="[
      `ak-card--pad-${padding}`,
      { 'ak-card--interactive tap-scale': interactive },
    ]"
  >
    <div v-if="$slots.media" class="ak-card__media">
      <slot name="media" />
    </div>
    <div v-if="$slots.header" class="ak-card__header">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="ak-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="ak-card__footer">
      <slot name="footer" />
    </div>
  </article>
</template>

<style scoped>
.ak-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  overflow: hidden;
}

.ak-card--pad-none {
  padding: 0;
}

.ak-card--pad-sm {
  padding: var(--space-4);
}

.ak-card--pad-md {
  padding: var(--space-5);
}

.ak-card--pad-lg {
  padding: var(--space-8);
}

.ak-card--pad-none .ak-card__body,
.ak-card--pad-none .ak-card__header,
.ak-card--pad-none .ak-card__footer {
  padding-left: 18px;
  padding-right: 18px;
}

.ak-card--pad-none .ak-card__header {
  padding-top: 16px;
}

.ak-card--pad-none .ak-card__body {
  padding-bottom: 16px;
}

.ak-card--pad-none .ak-card__footer {
  padding-bottom: 18px;
}

.ak-card--interactive {
  cursor: pointer;
  transition:
    border-color var(--transition),
    box-shadow 220ms var(--ease-out-expo),
    transform 220ms var(--ease-out-expo);
}

.ak-card--interactive:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.ak-card--interactive:focus-within {
  border-color: var(--accent);
  box-shadow: var(--focus-ring);
}

.ak-card__media {
  flex-shrink: 0;
}

.ak-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.ak-card__body {
  flex: 1;
  min-width: 0;
}

.ak-card__footer {
  margin-top: var(--space-5);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

@media (prefers-reduced-motion: reduce) {
  .ak-card--interactive {
    transition: none;
  }
}
</style>
