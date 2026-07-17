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
    :style="active && color ? { '--ak-chip-active-bg': color } : undefined"
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
  min-height: 36px;
  padding: 0 15px;
  border-radius: var(--chip-radius);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 650;
  line-height: 1.2;
  color: var(--text-secondary);
  background: var(--bg-soft);
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color var(--transition),
    color var(--transition),
    border-color var(--transition),
    box-shadow var(--transition);
}

.ak-chip:hover:not(:disabled):not(.ak-chip--active) {
  background: var(--bg-muted);
  color: var(--text);
}

.ak-chip--active {
  background: var(--ak-chip-active-bg, var(--accent-soft));
  color: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 10%, transparent);
}

.ak-chip--active[style*='--ak-chip-active-bg'] {
  color: var(--accent-contrast);
}

.ak-chip:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.ak-chip:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}
</style>
