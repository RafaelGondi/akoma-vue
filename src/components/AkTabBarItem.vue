<script setup lang="ts">
import { computed, inject } from 'vue'
import AkIcon from './AkIcon.vue'
import { TAB_BAR_KEY } from './tab-bar-context'
import type { CuidaIconName } from '../icons/cuida-icon-map'

const props = withDefaults(
  defineProps<{
    value: string
    label: string
    icon?: CuidaIconName
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

defineSlots<{
  icon?: () => unknown
}>()

const tabBar = inject(TAB_BAR_KEY)

if (!tabBar) {
  throw new Error('AkTabBarItem must be used inside AkTabBar')
}

const ctx = tabBar

const active = computed(() => ctx.active.value === props.value)

function select() {
  if (props.disabled) return
  ctx.select(props.value)
}
</script>

<template>
  <button
    type="button"
    class="ak-tab-bar__item tap-scale"
    :class="{ 'ak-tab-bar__item--active': active }"
    role="tab"
    :aria-selected="active"
    :aria-label="label"
    :disabled="disabled"
    @click="select"
  >
    <span class="ak-tab-bar__icon" aria-hidden="true">
      <slot name="icon">
        <AkIcon v-if="icon" :name="icon" :size="22" />
      </slot>
    </span>
    <span class="ak-tab-bar__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.ak-tab-bar__item {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-width: 0;
  padding: 6px 4px 4px;
  border: 0;
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--text-tertiary);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition:
    color var(--transition),
    background-color var(--transition);
}

.ak-tab-bar__item:hover:not(:disabled):not(.ak-tab-bar__item--active) {
  color: var(--text-secondary);
}

.ak-tab-bar__item--active {
  color: var(--accent);
}

.ak-tab-bar__item--active::before {
  content: '';
  position: absolute;
  inset: 1px 2px;
  z-index: -1;
  border-radius: var(--radius-full);
  background: var(--accent-soft);
}

:global([data-mood='site']) .ak-tab-bar__item--active::before {
  inset: auto 0 0;
  height: 2px;
  border-radius: 0;
  background: var(--accent);
}

.ak-tab-bar__item:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.ak-tab-bar__item:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.ak-tab-bar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  line-height: 0;
}

.ak-tab-bar__label {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
