<script setup lang="ts">
import { computed, useId } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    placeholder?: string
    hint?: string
    error?: string
    disabled?: boolean
    required?: boolean
    rows?: number
    name?: string
  }>(),
  {
    modelValue: '',
    disabled: false,
    required: false,
    rows: 4,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const uid = useId()
const inputId = computed(() => `ak-textarea-${uid}`)
const hintId = computed(() => (props.hint || props.error ? `ak-textarea-hint-${uid}` : undefined))

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="ak-field" :class="{ 'ak-field--disabled': disabled, 'ak-field--error': !!error }">
    <span v-if="label" class="ak-field__label">
      {{ label }}
      <span v-if="required" class="ak-field__required" aria-hidden="true">*</span>
    </span>
    <textarea
      :id="inputId"
      class="ak-field__control"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :name="name"
      :rows="rows"
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
  gap: 6px;
  width: 100%;
}

.ak-field__label {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--text-secondary);
}

.ak-field__required {
  color: var(--danger);
  margin-left: 2px;
}

.ak-field__control {
  width: 100%;
  min-height: 100px;
  padding: 13px 16px;
  font-size: 15px;
  line-height: 1.55;
  border-radius: var(--radius-md);
  background: var(--bg-soft);
  border: 1.5px solid transparent;
  color: var(--text);
  outline: none;
  resize: vertical;
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    background-color var(--transition);
}

.ak-field__control::placeholder {
  color: var(--text-tertiary);
}

.ak-field__control:hover:not(:disabled):not(:focus) {
  background: var(--bg-muted);
}

.ak-field__control:focus {
  background: var(--bg-elevated);
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.ak-field--error .ak-field__control {
  border-color: var(--danger);
  background: var(--bg-elevated);
}

.ak-field--error .ak-field__control:focus {
  box-shadow: 0 0 0 4px var(--danger-soft);
}

.ak-field--disabled {
  opacity: 0.6;
}

.ak-field__hint {
  font-size: 12.5px;
  color: var(--text-tertiary);
}

.ak-field--error .ak-field__hint {
  color: var(--danger);
}
</style>
