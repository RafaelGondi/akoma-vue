<script setup lang="ts">
import type { ButtonSize, ButtonVariant } from '../types'

withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    disabled?: boolean
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
    block: false,
  },
)

defineSlots<{
  default?: () => unknown
  icon?: () => unknown
}>()
</script>

<template>
  <button
    class="ak-button tap-scale"
    :class="[
      `ak-button--${variant}`,
      `ak-button--${size}`,
      { 'ak-button--block': block, 'ak-button--loading': loading },
    ]"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
  >
    <span v-if="loading" class="ak-button__spinner" aria-hidden="true" />
    <span v-if="$slots.icon && !loading" class="ak-button__icon">
      <slot name="icon" />
    </span>
    <span class="ak-button__label">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.ak-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-body);
  font-weight: 700;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition:
    background-color var(--transition),
    color var(--transition),
    box-shadow var(--transition),
    opacity var(--transition);
  white-space: nowrap;
  user-select: none;
}

.ak-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.ak-button--block {
  width: 100%;
}

.ak-button--sm {
  height: 34px;
  padding: 0 16px;
  font-size: 13px;
}

.ak-button--md {
  height: 42px;
  padding: 0 22px;
  font-size: 14px;
}

.ak-button--lg {
  height: 50px;
  padding: 0 26px;
  font-size: 15px;
}

.ak-button--primary {
  background: var(--accent);
  color: #fff;
  box-shadow: var(--shadow-sm);
}

.ak-button--primary:hover:not(:disabled) {
  background: var(--accent-hover);
  box-shadow: var(--shadow-md);
}

.ak-button--secondary {
  background: var(--bg-elevated);
  color: var(--text);
  box-shadow: var(--shadow-sm);
}

.ak-button--secondary:hover:not(:disabled) {
  background: var(--bg-soft);
}

.ak-button--ghost {
  background: transparent;
  color: var(--accent);
}

.ak-button--ghost:hover:not(:disabled) {
  background: var(--accent-soft);
}

.ak-button--danger {
  background: var(--danger);
  color: #fff;
}

.ak-button--danger:hover:not(:disabled) {
  filter: brightness(0.95);
}

.ak-button__icon {
  display: inline-flex;
  width: 1.1em;
  height: 1.1em;
}

.ak-button__icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.ak-button__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ak-spin 0.7s linear infinite;
}

.ak-button--loading .ak-button__label {
  opacity: 0.85;
}

@keyframes ak-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ak-button__spinner {
    animation: none;
    border-right-color: currentColor;
    opacity: 0.6;
  }
}
</style>
