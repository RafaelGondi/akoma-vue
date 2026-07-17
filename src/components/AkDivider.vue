<script setup lang="ts">
import type { DividerSpacing } from '../types'

withDefaults(
  defineProps<{
    /** Horizontal spacing around the line */
    spacing?: DividerSpacing
    /** Optional centered label */
    label?: string
    vertical?: boolean
  }>(),
  {
    spacing: 'md',
    vertical: false,
  },
)
</script>

<template>
  <div
    class="ak-divider"
    :class="[
      vertical ? 'ak-divider--vertical' : 'ak-divider--horizontal',
      `ak-divider--spacing-${spacing}`,
    ]"
    role="separator"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
  >
    <span v-if="label && !vertical" class="ak-divider__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.ak-divider--horizontal {
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--text-tertiary);
}

.ak-divider--horizontal::before,
.ak-divider--horizontal::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-strong);
}

.ak-divider--horizontal:not(:has(.ak-divider__label))::after {
  display: none;
}

.ak-divider__label {
  padding: 0 var(--space-3);
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.ak-divider--vertical {
  align-self: stretch;
  width: 1px;
  background: var(--border-strong);
}

.ak-divider--spacing-sm.ak-divider--horizontal {
  margin: var(--space-3) 0;
}

.ak-divider--spacing-md.ak-divider--horizontal {
  margin: var(--space-5) 0;
}

.ak-divider--spacing-lg.ak-divider--horizontal {
  margin: var(--space-8) 0;
}

.ak-divider--spacing-sm.ak-divider--vertical {
  margin: 0 var(--space-3);
}

.ak-divider--spacing-md.ak-divider--vertical {
  margin: 0 var(--space-4);
}

.ak-divider--spacing-lg.ak-divider--vertical {
  margin: 0 var(--space-5);
}
</style>
