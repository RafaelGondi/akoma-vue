<script setup lang="ts">
import { ref } from 'vue'
import { AkSwitch } from '@akoma'

const enabled = ref(true)
const label = ref('Daily reminders')
const description = ref('Get a nudge when your study goal is close.')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">Switch</h1>
    <p class="docs-lead">Accessible toggle for settings and preferences.</p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Playground</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkSwitch
        v-model="enabled"
        :label="label"
        :description="description"
      />
    </div>
    <div class="docs-controls">
      <div class="docs-control">
        <label for="switch-label">label</label>
        <input id="switch-label" v-model="label" type="text" />
      </div>
      <div class="docs-control">
        <label for="switch-desc">description</label>
        <input id="switch-desc" v-model="description" type="text" />
      </div>
    </div>
    <pre class="docs-code">v-model: {{ enabled }}</pre>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Disabled</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkSwitch :model-value="false" label="Off" disabled />
      <AkSwitch :model-value="true" label="On" disabled />
    </div>
  </section>
</template>
