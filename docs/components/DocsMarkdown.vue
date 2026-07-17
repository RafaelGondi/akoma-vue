<script setup lang="ts">
import { computed } from 'vue'
import { renderMarkdown } from '../utils/markdown'

const props = defineProps<{
  source: string
}>()

const html = computed(() => renderMarkdown(props.source))
</script>

<template>
  <article class="docs-markdown" v-html="html" />
</template>

<style scoped>
.docs-markdown :deep(h1) {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 34px);
  font-weight: 650;
  letter-spacing: -0.03em;
  margin-bottom: var(--space-4);
}

.docs-markdown :deep(h2) {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 650;
  letter-spacing: -0.02em;
  margin: var(--space-8) 0 var(--space-3);
}

.docs-markdown :deep(h3) {
  font-size: 16px;
  font-weight: 650;
  margin: var(--space-5) 0 var(--space-2);
}

.docs-markdown :deep(p),
.docs-markdown :deep(li) {
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-secondary);
}

.docs-markdown :deep(p) {
  margin-bottom: var(--space-3);
}

.docs-markdown :deep(ul),
.docs-markdown :deep(ol) {
  margin: var(--space-3) 0 var(--space-4);
  padding-left: 1.25rem;
}

.docs-markdown :deep(li + li) {
  margin-top: var(--space-2);
}

.docs-markdown :deep(strong) {
  color: var(--text);
  font-weight: 650;
}

.docs-markdown :deep(code) {
  font-family: var(--font-mono);
  font-size: 0.9em;
  padding: 2px 6px;
  border-radius: 6px;
  background: var(--bg-soft);
  color: var(--accent);
}

.docs-markdown :deep(pre) {
  margin: var(--space-4) 0;
  padding: var(--space-4);
  border-radius: var(--card-radius);
  background: var(--fill-strong);
  color: var(--on-fill-strong);
  overflow-x: auto;
}

.docs-markdown :deep(pre code) {
  padding: 0;
  background: transparent;
  color: inherit;
  font-size: 13px;
  line-height: 1.55;
}

.docs-markdown :deep(table) {
  width: 100%;
  margin: var(--space-4) 0;
  border-collapse: collapse;
  font-size: 14px;
}

.docs-markdown :deep(th),
.docs-markdown :deep(td) {
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  text-align: left;
}

.docs-markdown :deep(th) {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);
}

.docs-markdown :deep(a) {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
