<script setup lang="ts">
import { computed, ref } from 'vue'
import { AkButton } from '@akoma'
import type { ButtonSize, ButtonVariant } from '@akoma'

const variant = ref<ButtonVariant>('primary')
const size = ref<ButtonSize>('md')
const label = ref('Continue')
const loading = ref(false)
const disabled = ref(false)
const block = ref(false)

const code = computed(
  () => `<AkButton
  variant="${variant.value}"
  size="${size.value}"${loading.value ? '\n  loading' : ''}${disabled.value ? '\n  disabled' : ''}${block.value ? '\n  block' : ''}
>
  ${label.value}
</AkButton>`,
)
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Button</h1>
    <p class="docs-lead">Pill-shaped actions with spring tap feedback. Use primary sparingly.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview" :class="{ 'docs-preview--stack': block }">
      <AkButton
        :variant="variant"
        :size="size"
        :loading="loading"
        :disabled="disabled"
        :block="block"
      >
        {{ label }}
      </AkButton>
    </div>

    <div class="docs-controls">
      <div class="docs-control">
        <label for="btn-variant">variant</label>
        <select id="btn-variant" v-model="variant">
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
          <option value="ghost">ghost</option>
          <option value="danger">danger</option>
        </select>
      </div>
      <div class="docs-control">
        <label for="btn-size">size</label>
        <select id="btn-size" v-model="size">
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
        </select>
      </div>
      <div class="docs-control">
        <label for="btn-label">label</label>
        <input id="btn-label" v-model="label" type="text" />
      </div>
      <div class="docs-control docs-control--checkbox">
        <input id="btn-loading" v-model="loading" type="checkbox" />
        <label for="btn-loading">loading</label>
      </div>
      <div class="docs-control docs-control--checkbox">
        <input id="btn-disabled" v-model="disabled" type="checkbox" />
        <label for="btn-disabled">disabled</label>
      </div>
      <div class="docs-control docs-control--checkbox">
        <input id="btn-block" v-model="block" type="checkbox" />
        <label for="btn-block">block</label>
      </div>
    </div>
    <pre class="docs-code">{{ code }}</pre>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Variants</h2>
    <div class="docs-preview">
      <AkButton variant="primary">Primary</AkButton>
      <AkButton variant="secondary">Secondary</AkButton>
      <AkButton variant="ghost">Ghost</AkButton>
      <AkButton variant="danger">Danger</AkButton>
    </div>
  </section>

  <section class="docs-section reveal reveal-d3">
    <h2 class="docs-section__title">Props</h2>
    <table class="docs-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>variant</code></td>
          <td><code>'primary' | 'secondary' | 'ghost' | 'danger'</code></td>
          <td><code>'primary'</code></td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td><code>'sm' | 'md' | 'lg'</code></td>
          <td><code>'md'</code></td>
        </tr>
        <tr>
          <td><code>loading</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>block</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>type</code></td>
          <td><code>'button' | 'submit' | 'reset'</code></td>
          <td><code>'button'</code></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
