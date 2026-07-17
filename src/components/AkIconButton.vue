<script setup lang="ts">
import type { IconButtonSize, IconButtonVariant } from '../types'

withDefaults(
  defineProps<{
    variant?: IconButtonVariant
    size?: IconButtonSize
    disabled?: boolean
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
    label: string
  }>(),
  {
    variant: 'ghost',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
  },
)

defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <button
    class="ak-icon-button tap-scale"
    :class="[
      `ak-icon-button--${variant}`,
      `ak-icon-button--${size}`,
      { 'ak-icon-button--loading': loading },
    ]"
    :type="type"
    :disabled="disabled || loading"
    :aria-label="label"
    :aria-busy="loading || undefined"
  >
    <span v-if="loading" class="ak-icon-button__spinner" aria-hidden="true" />
    <span v-else class="ak-icon-button__icon">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.ak-icon-button {
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color var(--transition),
    color var(--transition),
    border-color var(--transition),
    opacity var(--transition);
}

.ak-icon-button:disabled {
  opacity: 0.46;
  cursor: not-allowed;
}

.ak-icon-button:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.ak-icon-button--sm {
  width: 32px;
  height: 32px;
}

.ak-icon-button--md {
  width: 36px;
  height: 36px;
}

.ak-icon-button--lg {
  width: 42px;
  height: 42px;
}

.ak-icon-button--ghost {
  background: transparent;
  color: var(--text-secondary);
}

.ak-icon-button--ghost:hover:not(:disabled) {
  background: var(--bg-soft);
  color: var(--text);
}

.ak-icon-button--secondary {
  background: var(--bg-soft);
  color: var(--text-secondary);
  border-color: var(--border);
}

.ak-icon-button--secondary:hover:not(:disabled) {
  background: var(--bg-muted);
  color: var(--text);
  border-color: var(--border-strong);
}

.ak-icon-button--danger {
  background: transparent;
  color: var(--danger);
}

.ak-icon-button--danger:hover:not(:disabled) {
  background: var(--danger-soft);
}

.ak-icon-button__icon {
  display: inline-flex;
  width: 1.1em;
  height: 1.1em;
}

.ak-icon-button__icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.ak-icon-button__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ak-spin 0.7s linear infinite;
}

@keyframes ak-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ak-icon-button__spinner {
    animation: none;
    border-right-color: currentColor;
    opacity: 0.6;
  }
}
</style>
