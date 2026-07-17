<script setup lang="ts">
import { computed, inject } from 'vue'
import type { ListRowPadding } from '../types'

const props = withDefaults(
  defineProps<{
    interactive?: boolean
    disabled?: boolean
    padding?: ListRowPadding
    divider?: boolean
  }>(),
  {
    interactive: false,
    disabled: false,
    padding: 'md',
    divider: true,
  },
)

defineSlots<{
  leading?: () => unknown
  default?: () => unknown
  subtitle?: () => unknown
  trailing?: () => unknown
}>()

const inList = inject('ak-list', false)

const rowClasses = computed(() => [
  'ak-list-row',
  `ak-list-row--pad-${props.padding}`,
  {
    'ak-list-row--interactive': props.interactive,
    'ak-list-row--disabled': props.disabled,
  },
])
</script>

<template>
  <li
    v-if="inList"
    class="ak-list-row-item"
    :class="{ 'ak-list-row-item--divider': divider }"
  >
    <button
      v-if="interactive"
      type="button"
      :class="rowClasses"
      :disabled="disabled"
    >
      <span v-if="$slots.leading" class="ak-list-row__leading">
        <slot name="leading" />
      </span>
      <span class="ak-list-row__content">
        <span class="ak-list-row__title"><slot /></span>
        <span v-if="$slots.subtitle" class="ak-list-row__subtitle">
          <slot name="subtitle" />
        </span>
      </span>
      <span v-if="$slots.trailing" class="ak-list-row__trailing">
        <slot name="trailing" />
      </span>
    </button>
    <div v-else :class="rowClasses">
      <span v-if="$slots.leading" class="ak-list-row__leading">
        <slot name="leading" />
      </span>
      <span class="ak-list-row__content">
        <span class="ak-list-row__title"><slot /></span>
        <span v-if="$slots.subtitle" class="ak-list-row__subtitle">
          <slot name="subtitle" />
        </span>
      </span>
      <span v-if="$slots.trailing" class="ak-list-row__trailing">
        <slot name="trailing" />
      </span>
    </div>
  </li>

  <button
    v-else-if="interactive"
    type="button"
    :class="rowClasses"
    :disabled="disabled"
  >
    <span v-if="$slots.leading" class="ak-list-row__leading">
      <slot name="leading" />
    </span>
    <span class="ak-list-row__content">
      <span class="ak-list-row__title"><slot /></span>
      <span v-if="$slots.subtitle" class="ak-list-row__subtitle">
        <slot name="subtitle" />
      </span>
    </span>
    <span v-if="$slots.trailing" class="ak-list-row__trailing">
      <slot name="trailing" />
    </span>
  </button>

  <div v-else :class="rowClasses">
    <span v-if="$slots.leading" class="ak-list-row__leading">
      <slot name="leading" />
    </span>
    <span class="ak-list-row__content">
      <span class="ak-list-row__title"><slot /></span>
      <span v-if="$slots.subtitle" class="ak-list-row__subtitle">
        <slot name="subtitle" />
      </span>
    </span>
    <span v-if="$slots.trailing" class="ak-list-row__trailing">
      <slot name="trailing" />
    </span>
  </div>
</template>

<style scoped>
.ak-list-row-item {
  list-style: none;
}

.ak-list-row-item--divider:not(:last-child) {
  border-bottom: 1px solid var(--border);
}

.ak-list-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  text-align: left;
  background: var(--bg);
  border: 0;
  color: inherit;
  font: inherit;
}

.ak-list-row--pad-sm {
  padding: var(--space-3) var(--space-4);
}

.ak-list-row--pad-md {
  padding: var(--space-4);
}

.ak-list-row--interactive {
  cursor: pointer;
  transition: background-color var(--transition);
}

.ak-list-row--interactive:hover:not(:disabled) {
  background: var(--bg-soft);
}

.ak-list-row--interactive:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}

.ak-list-row--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ak-list-row__leading,
.ak-list-row__trailing {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
}

.ak-list-row__content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.ak-list-row__title {
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--text);
}

.ak-list-row__subtitle {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.45;
}

@media (prefers-reduced-motion: reduce) {
  .ak-list-row--interactive {
    transition: none;
  }
}
</style>
