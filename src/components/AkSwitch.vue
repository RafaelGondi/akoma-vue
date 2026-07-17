<script setup lang="ts">
import { computed, useId } from 'vue'

withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: string
    description?: string
    disabled?: boolean
  }>(),
  {
    modelValue: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const uid = useId()
const inputId = computed(() => `ak-switch-${uid}`)

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <label
    class="ak-switch"
    :class="{ 'ak-switch--disabled': disabled, 'ak-switch--on': modelValue }"
  >
    <span v-if="label || description" class="ak-switch__copy">
      <span v-if="label" class="ak-switch__label">{{ label }}</span>
      <span v-if="description" class="ak-switch__description">{{ description }}</span>
    </span>
    <span class="ak-switch__control">
      <input
        :id="inputId"
        class="ak-switch__input"
        type="checkbox"
        role="switch"
        :checked="modelValue"
        :disabled="disabled"
        @change="onChange"
      />
      <span class="ak-switch__track" aria-hidden="true">
        <span class="ak-switch__thumb" />
      </span>
    </span>
  </label>
</template>

<style scoped>
.ak-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  width: 100%;
  cursor: pointer;
}

.ak-switch--disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.ak-switch__copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.ak-switch__label {
  font-size: 14px;
  font-weight: 650;
  color: var(--text);
  letter-spacing: -0.01em;
}

.ak-switch__description {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.45;
}

.ak-switch__control {
  position: relative;
  flex-shrink: 0;
}

.ak-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.ak-switch__track {
  position: relative;
  display: block;
  width: 44px;
  height: 26px;
  border-radius: var(--radius-full);
  background: var(--bg-muted);
  border: 1px solid var(--border);
  transition:
    background-color var(--transition),
    border-color var(--transition);
}

.ak-switch__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: transform var(--transition);
}

.ak-switch--on .ak-switch__track {
  background: var(--accent);
  border-color: transparent;
}

.ak-switch--on .ak-switch__thumb {
  transform: translateX(18px);
  background: var(--accent-contrast);
  border-color: transparent;
}

.ak-switch__input:focus-visible + .ak-switch__track {
  box-shadow: var(--focus-ring);
}

@media (prefers-reduced-motion: reduce) {
  .ak-switch__track,
  .ak-switch__thumb {
    transition: none;
  }
}
</style>
