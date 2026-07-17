<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressSize } from '../types'

const props = withDefaults(
  defineProps<{
    /** Current value */
    value?: number
    max?: number
    size?: ProgressSize
    /** CSS color for the fill (defaults to accent) */
    color?: string
    label?: string
    showValue?: boolean
  }>(),
  {
    value: 0,
    max: 100,
    size: 'md',
    showValue: false,
  },
)

const percent = computed(() => {
  if (props.max <= 0) return 0
  return Math.min(100, Math.max(0, (props.value / props.max) * 100))
})

const fillStyle = computed(() => ({
  width: `${percent.value}%`,
  ...(props.color ? { background: props.color } : {}),
}))
</script>

<template>
  <div class="ak-progress" :class="`ak-progress--${size}`">
    <div v-if="label || showValue" class="ak-progress__meta">
      <span v-if="label" class="ak-progress__label">{{ label }}</span>
      <span v-if="showValue" class="ak-progress__value numeric">{{ Math.round(percent) }}%</span>
    </div>
    <div
      class="ak-progress__track"
      role="progressbar"
      :aria-valuenow="value"
      :aria-valuemin="0"
      :aria-valuemax="max"
      :aria-label="label"
    >
      <span class="ak-progress__fill" :style="fillStyle" />
    </div>
  </div>
</template>

<style scoped>
.ak-progress {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
}

.ak-progress__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
}

.ak-progress__label {
  font-size: 12px;
  font-weight: 650;
  color: var(--text-secondary);
}

.ak-progress__value {
  font-size: 12px;
  font-weight: 650;
  color: var(--text-tertiary);
}

.ak-progress__track {
  overflow: hidden;
  background: var(--bg-soft);
  border-radius: var(--radius-full);
}

.ak-progress__fill {
  display: block;
  height: 100%;
  background: var(--accent);
  border-radius: inherit;
  transition: width 280ms var(--ease-smooth);
}

.ak-progress--sm .ak-progress__track {
  height: 6px;
}

.ak-progress--md .ak-progress__track {
  height: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .ak-progress__fill {
    transition: none;
  }
}
</style>
