<script setup lang="ts">
import { provide } from 'vue'

provide('ak-list', true)
</script>

<template>
  <ul class="ak-list">
    <slot />
  </ul>
</template>

<style scoped>
.ak-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  background: var(--bg);
  overflow: hidden;
}
</style>
