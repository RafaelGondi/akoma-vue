<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
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
const itemRef = ref<HTMLButtonElement | null>(null)
const active = computed(() => ctx.active.value === props.value)

onMounted(() => {
  if (itemRef.value) ctx.register(props.value, itemRef.value)
})

onUnmounted(() => {
  ctx.unregister(props.value)
})

function select() {
  if (props.disabled) return
  ctx.select(props.value)
}
</script>

<template>
  <button
    ref="itemRef"
    type="button"
    class="ak-tab-bar__item"
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
  gap: 10px;
  min-width: 0;
  padding: 10px 6px 8px;
  border: 0;
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.01em;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    color var(--transition),
    transform 180ms var(--ease-spring);
}

.ak-tab-bar__item:hover:not(:disabled):not(.ak-tab-bar__item--active) {
  color: var(--text);
}

.ak-tab-bar__item:active:not(:disabled) {
  transform: scale(0.96);
}

.ak-tab-bar__item--active {
  color: var(--accent);
}

.ak-tab-bar__item:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.ak-tab-bar__item:focus-visible {
  outline: none;
  box-shadow: inset var(--focus-ring);
}

.ak-tab-bar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  line-height: 0;
  opacity: 0.76;
  transition:
    transform 320ms var(--ease-spring),
    opacity var(--transition);
}

.ak-tab-bar__item--active .ak-tab-bar__icon {
  transform: scale(1.04);
  opacity: 1;
}

.ak-tab-bar__label {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.76;
  transition:
    color var(--transition),
    font-weight 280ms var(--ease-smooth),
    opacity 280ms var(--ease-smooth);
}

.ak-tab-bar__item--active .ak-tab-bar__label {
  font-weight: 700;
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .ak-tab-bar__item:active:not(:disabled) {
    transform: none;
  }

  .ak-tab-bar__icon {
    transition: none;
  }

  .ak-tab-bar__item--active .ak-tab-bar__icon {
    transform: none;
  }
}
</style>
