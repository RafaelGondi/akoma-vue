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
  padding: 5px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
}

.ak-badge--neutral {
  background: var(--bg-muted);
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
