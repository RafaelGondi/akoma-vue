<script setup lang="ts">
import type { BadgeVariant } from '../types'

withDefaults(
  defineProps<{
    variant?: BadgeVariant
    label?: string
  }>(),
  {
    variant: 'neutral',
  },
)

defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <span class="ak-badge" :class="`ak-badge--${variant}`">
    <slot>{{ label }}</slot>
  </span>
</template>

<style scoped>
.ak-badge {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  width: fit-content;
  min-height: 24px;
  padding: 3px 9px;
  border-radius: var(--badge-radius);
  font-size: 11.5px;
  font-weight: 650;
  line-height: 1.3;
  letter-spacing: 0.005em;
}

.ak-badge--neutral {
  background: var(--bg-soft);
  color: var(--text-secondary);
}

.ak-badge--accent {
  background: var(--accent-soft);
  color: var(--accent);
}

.ak-badge--success {
  background: var(--success-soft);
  color: var(--success);
}

.ak-badge--warning {
  background: var(--warning-soft);
  color: var(--warning);
}

.ak-badge--danger {
  background: var(--danger-soft);
  color: var(--danger);
}

.ak-badge--info {
  background: var(--info-soft);
  color: var(--info);
}
</style>
