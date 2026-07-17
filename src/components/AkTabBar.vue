<script setup lang="ts">
import { provide, toRef } from 'vue'
import { TAB_BAR_KEY } from './tab-bar-context'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

provide(TAB_BAR_KEY, {
  active: toRef(props, 'modelValue'),
  select: (value: string) => emit('update:modelValue', value),
})
</script>

<template>
  <nav class="ak-tab-bar" aria-label="Primary">
    <div class="ak-tab-bar__track" role="tablist">
      <slot />
    </div>
  </nav>
</template>

<style scoped>
.ak-tab-bar {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  z-index: 50;
  padding: 0 var(--page-pad-x) calc(var(--safe-bottom) + 10px);
  pointer-events: none;
}

.ak-tab-bar__track {
  display: flex;
  align-items: stretch;
  gap: 2px;
  width: 100%;
  max-width: var(--shell-max);
  min-height: calc(var(--nav-height) - 8px);
  margin: 0 auto;
  padding: 5px;
  pointer-events: auto;
  background: var(--nav-glass);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-nav);
}

:global([data-mood='site']) .ak-tab-bar__track {
  max-width: none;
  margin-inline: calc(var(--page-pad-x) * -1);
  padding-inline: var(--page-pad-x);
  border-radius: 0;
  border-inline: 0;
  border-bottom: 0;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--bg-elevated);
}
</style>
