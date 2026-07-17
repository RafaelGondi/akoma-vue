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
  position: relative;
  font-family: var(--font-body);
  font-weight: 650;
  letter-spacing: -0.01em;
  border-radius: var(--button-radius);
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color var(--transition),
    color var(--transition),
    border-color var(--transition),
    box-shadow var(--transition),
    opacity var(--transition),
    transform var(--transition);
  white-space: nowrap;
  user-select: none;
}

.ak-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.ak-button:active:not(:disabled) {
  transform: translateY(0) scale(0.985);
}

.ak-button:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.ak-button:disabled {
  opacity: 0.46;
  cursor: not-allowed;
  transform: none !important;
}

.ak-button--block {
  width: 100%;
}

.ak-button--sm {
  min-height: 34px;
  padding: 0 15px;
  font-size: 13px;
}

.ak-button--md {
  min-height: 42px;
  padding: 0 20px;
  font-size: 14px;
}

.ak-button--lg {
  min-height: 50px;
  padding: 0 24px;
  font-size: 15px;
}

.ak-button--primary {
  background: var(--accent);
  color: var(--accent-contrast);
  box-shadow: var(--button-shadow);
}

.ak-button--primary:hover:not(:disabled) {
  background: var(--accent-hover);
  box-shadow: var(--button-shadow);
}

.ak-button--secondary {
  background: var(--bg-elevated);
  color: var(--text);
  border-color: var(--control-border);
}

.ak-button--secondary:hover:not(:disabled) {
  background: var(--bg-soft);
  border-color: transparent;
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
  color: var(--accent-contrast);
  box-shadow: 0 4px 14px color-mix(in srgb, var(--danger) 22%, transparent);
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
  .ak-button {
    transition: none;
  }

  .ak-button__spinner {
    animation: none;
    border-right-color: currentColor;
    opacity: 0.6;
  }
}
</style>
