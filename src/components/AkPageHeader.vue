<script setup lang="ts">
/**
 * Page chrome — label / title / meta / actions.
 * Prefer typography hierarchy over card heroes (see content/patterns.md).
 */
withDefaults(
  defineProps<{
    label?: string
    title?: string
    meta?: string
    /** `flush` = no bottom border (progress-style); `bordered` = day/settings chrome */
    variant?: 'bordered' | 'flush'
    /** Slightly smaller display title (home day labels) */
    size?: 'md' | 'lg'
  }>(),
  {
    variant: 'bordered',
    size: 'lg',
  },
)

defineSlots<{
  label?: () => unknown
  title?: () => unknown
  meta?: () => unknown
  actions?: () => unknown
  default?: () => unknown
}>()
</script>

<template>
  <header
    class="ak-page-header"
    :class="[
      `ak-page-header--${variant}`,
      `ak-page-header--${size}`,
    ]"
  >
    <div class="ak-page-header__top">
      <div class="ak-page-header__heading">
        <slot name="label">
          <span
            v-if="label"
            class="page-label"
          >{{ label }}</span>
        </slot>
        <slot name="title">
          <h1
            v-if="title"
            class="page-title"
          >
            {{ title }}
          </h1>
        </slot>
        <slot name="meta">
          <p
            v-if="meta"
            class="ak-page-header__meta"
          >
            {{ meta }}
          </p>
        </slot>
      </div>
      <div
        v-if="$slots.actions"
        class="ak-page-header__actions"
      >
        <slot name="actions" />
      </div>
    </div>
    <div
      v-if="$slots.default"
      class="ak-page-header__body"
    >
      <slot />
    </div>
  </header>
</template>

<style scoped>
.ak-page-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding:
    calc(var(--page-pad-top) + var(--safe-top))
    var(--page-pad-x)
    var(--space-4);
  background: var(--bg);
}

.ak-page-header--bordered {
  border-bottom: 1px solid var(--border);
}

.ak-page-header--flush {
  padding-bottom: var(--space-6);
}

.ak-page-header__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}

.ak-page-header__heading {
  flex: 1;
  min-width: 0;
}

.ak-page-header__heading :deep(.page-title) {
  max-width: none;
}

.ak-page-header--md .ak-page-header__heading :deep(.page-title) {
  font-size: clamp(32px, 8vw, 40px);
}

.ak-page-header__meta {
  margin: var(--space-1) 0 0;
  font-size: 14px;
  line-height: 1.4;
  color: var(--text-secondary);
}

.ak-page-header__actions {
  display: flex;
  flex-shrink: 0;
  gap: var(--space-1);
  margin-top: var(--space-1);
  padding: 2px;
  border-radius: var(--radius-md);
  background: var(--bg-soft);
}

.ak-page-header__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
