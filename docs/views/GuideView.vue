<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DocsMarkdown from '../components/DocsMarkdown.vue'
import philosophy from '../../content/philosophy.md?raw'
import moods from '../../content/moods.md?raw'
import decisions from '../../content/decisions.md?raw'
import implementation from '../../content/implementation.md?raw'
import colors from '../../content/colors.md?raw'
import icons from '../../content/icons.md?raw'
import patterns from '../../content/patterns.md?raw'

const guides: Record<string, { title: string; label: string; source: string }> = {
  philosophy: { title: 'Philosophy', label: 'Philosophy', source: philosophy },
  moods: { title: 'App vs Site', label: 'Moods', source: moods },
  colors: { title: 'Accent palettes', label: 'Colors', source: colors },
  icons: { title: 'Icons', label: 'Icons', source: icons },
  patterns: { title: 'App patterns', label: 'Patterns', source: patterns },
  decisions: { title: 'Design decisions', label: 'Decisions', source: decisions },
  implementation: { title: 'Implementation', label: 'Checklist', source: implementation },
}

const route = useRoute()

const slug = computed(() => {
  const value = route.params.slug
  return typeof value === 'string' ? value : 'philosophy'
})

const guide = computed(() => guides[slug.value] ?? guides.philosophy)
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Guides</span>
    <h1 class="page-title">{{ guide.title }}</h1>
    <p class="docs-lead">
      Markdown guides ship with the npm package at
      <code>@rafael_dias/akoma/content/{{ slug }}.md</code>
    </p>
    <nav class="docs-guide-nav" aria-label="Guides">
      <RouterLink
        v-for="(item, key) in guides"
        :key="key"
        :to="key === 'philosophy' ? '/philosophy' : `/guides/${key}`"
        class="docs-guide-nav__link"
        :class="{ 'router-link-active': slug === key }"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>

  <section class="docs-section reveal reveal-d1">
    <div class="docs-markdown-panel">
      <DocsMarkdown :source="guide.source" />
    </div>
  </section>
</template>

<style scoped>
.docs-guide-nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-5);
}

.docs-guide-nav__link {
  padding: 8px 14px;
  border-radius: var(--button-radius);
  border: 1px solid var(--border);
  background: var(--bg);
  font-size: 13px;
  font-weight: 650;
  color: var(--text-secondary);
  transition:
    background-color var(--transition),
    color var(--transition),
    border-color var(--transition);
}

.docs-guide-nav__link:hover {
  color: var(--text);
  border-color: var(--border-strong);
}

.docs-guide-nav__link.router-link-active {
  background: var(--accent-soft);
  border-color: transparent;
  color: var(--accent);
}

.docs-markdown-panel {
  padding: clamp(24px, 4vw, 36px);
  background: var(--bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
}
</style>
