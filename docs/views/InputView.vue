<script setup lang="ts">
import { ref } from 'vue'
import { AkInput } from '@akoma'
import type { InputSize } from '@akoma'

const value = ref('')
const label = ref('Email')
const placeholder = ref('you@example.com')
const hint = ref('We never share your email.')
const error = ref('')
const size = ref<InputSize>('md')
const disabled = ref(false)
const required = ref(true)
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Input</h1>
    <p class="docs-lead">Labeled text field with focus ring, hint, and error states.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkInput
        v-model="value"
        :label="label"
        :placeholder="placeholder"
        :hint="hint"
        :error="error"
        :size="size"
        :disabled="disabled"
        :required="required"
        type="email"
      />
    </div>

    <div class="docs-controls">
      <div class="docs-control">
        <label for="input-label">label</label>
        <input id="input-label" v-model="label" type="text" />
      </div>
      <div class="docs-control">
        <label for="input-placeholder">placeholder</label>
        <input id="input-placeholder" v-model="placeholder" type="text" />
      </div>
      <div class="docs-control">
        <label for="input-hint">hint</label>
        <input id="input-hint" v-model="hint" type="text" />
      </div>
      <div class="docs-control">
        <label for="input-error">error</label>
        <input id="input-error" v-model="error" type="text" placeholder="Leave empty for none" />
      </div>
      <div class="docs-control">
        <label for="input-size">size</label>
        <select id="input-size" v-model="size">
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
        </select>
      </div>
      <div class="docs-control docs-control--checkbox">
        <input id="input-required" v-model="required" type="checkbox" />
        <label for="input-required">required</label>
      </div>
      <div class="docs-control docs-control--checkbox">
        <input id="input-disabled" v-model="disabled" type="checkbox" />
        <label for="input-disabled">disabled</label>
      </div>
    </div>
    <pre class="docs-code">&lt;AkInput
  v-model="value"
  label="{{ label }}"
  placeholder="{{ placeholder }}"
  {{ error ? `error="${error}"` : `hint="${hint}"` }}
  size="{{ size }}"
/&gt;</pre>
  </section>
</template>
