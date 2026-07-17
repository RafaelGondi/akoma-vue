<script setup lang="ts">
withDefaults(
  defineProps<{
    active?: boolean
    disabled?: boolean
    /** CSS color value used when active (e.g. var(--cat-1)) */
    color?: string
  }>(),
  {
    active: false,
    disabled: false,
  },
)

defineSlots<{
  default?: () => unknown
}>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    type="button"
    class="ak-chip tap-scale"
    :class="{ 'ak-chip--active': active }"
    :style="active && color ? { '--ak-chip-active-bg': color, color: '#fff' } : undefined"
    :disabled="disabled"
    :aria-pressed="active"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
.ak-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-secondary);
  background: var(--bg-soft);
  border: none;
  cursor: pointer;
  transition:
    background-color var(--transition),
    color var(--transition),
    box-shadow var(--transition);
}

.ak-chip:hover:not(:disabled):not(.ak-chip--active) {
  background: var(--bg-muted);
  color: var(--text);
}

.ak-chip--active {
  background: var(--ak-chip-active-bg, var(--accent-soft));
  color: var(--accent);
  box-shadow: var(--shadow-sm);
}

.ak-chip--active[style*='--ak-chip-active-bg'] {
  color: #fff;
}

.ak-chip:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}
</style>
