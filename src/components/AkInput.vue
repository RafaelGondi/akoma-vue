<script setup lang="ts">
import { computed, useId } from 'vue'
import type { InputSize } from '../types'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    label?: string
    placeholder?: string
    hint?: string
    error?: string
    type?: string
    disabled?: boolean
    required?: boolean
    size?: InputSize
    autocomplete?: string
    name?: string
  }>(),
  {
    modelValue: '',
    type: 'text',
    disabled: false,
    required: false,
    size: 'md',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const uid = useId()
const inputId = computed(() => `ak-input-${uid}`)
const hintId = computed(() => (props.hint || props.error ? `ak-input-hint-${uid}` : undefined))

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="ak-field" :class="{ 'ak-field--disabled': disabled, 'ak-field--error': !!error }">
    <span v-if="label" class="ak-field__label">
      {{ label }}
      <span v-if="required" class="ak-field__required" aria-hidden="true">*</span>
    </span>
    <input
      :id="inputId"
      class="ak-field__control"
      :class="`ak-field__control--${size}`"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :name="name"
      :autocomplete="autocomplete"
      :aria-invalid="!!error || undefined"
      :aria-describedby="hintId"
      @input="onInput"
    />
    <span v-if="error || hint" :id="hintId" class="ak-field__hint">
      {{ error || hint }}
    </span>
  </label>
</template>

<style scoped>
.ak-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
}

.ak-field__label {
  color: var(--text);
  font-size: 13px;
  font-weight: 650;
  letter-spacing: -0.005em;
}

.ak-field__required {
  color: var(--danger);
  margin-left: 2px;
}

.ak-field__control {
  width: 100%;
  border-radius: var(--field-radius);
  background: var(--field-bg);
  border: 1px solid var(--field-border);
  color: var(--text);
  outline: none;
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    background-color var(--transition);
}

.ak-field__control::placeholder {
  color: var(--text-tertiary);
}

.ak-field__control--sm {
  min-height: 38px;
  padding: 8px 13px;
  font-size: 14px;
}

.ak-field__control--md {
  min-height: 44px;
  padding: 11px 15px;
  font-size: 15px;
}

.ak-field__control--lg {
  min-height: 50px;
  padding: 13px 17px;
  font-size: 16px;
}

.ak-field__control:hover:not(:disabled):not(:focus) {
  background: var(--field-bg-hover);
  border-color: var(--control-border);
}

.ak-field__control:focus {
  background: var(--bg-elevated);
  border-color: var(--accent);
  box-shadow: var(--focus-ring);
}

.ak-field--error .ak-field__control {
  border-color: var(--danger);
  background: var(--bg-elevated);
}

.ak-field--error .ak-field__control:focus {
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--danger) 14%, transparent);
}

.ak-field--disabled {
  opacity: 0.6;
}

.ak-field__hint {
  padding-left: 1px;
  font-size: 12px;
  color: var(--text-tertiary);
}

.ak-field--error .ak-field__hint {
  color: var(--danger);
}
</style>
