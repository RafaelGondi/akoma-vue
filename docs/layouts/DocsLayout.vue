<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { accentPaletteIds, accentPalettes, type AccentPalette } from '@akoma'
import { navGroups } from '../router'

const route = useRoute()
const sidebarOpen = ref(false)
const theme = ref<'light' | 'dark'>('light')
const mood = ref<'app' | 'site'>('app')
const accent = ref<AccentPalette | 'auto'>('auto')

function applyTheme(next: 'light' | 'dark') {
  theme.value = next
  if (next === 'dark') {
    document.documentElement.dataset.theme = 'dark'
  } else {
    delete document.documentElement.dataset.theme
  }
  localStorage.setItem('akoma-docs-theme', next)
}

function applyMood(next: 'app' | 'site') {
  mood.value = next
  if (next === 'site') {
    document.documentElement.dataset.mood = 'site'
  } else {
    delete document.documentElement.dataset.mood
  }
  localStorage.setItem('akoma-docs-mood', next)
}

function applyAccent(next: AccentPalette | 'auto') {
  accent.value = next
  if (next === 'auto') {
    delete document.documentElement.dataset.accent
  } else {
    document.documentElement.dataset.accent = next
  }
  localStorage.setItem('akoma-docs-accent', next)
}

function toggleTheme() {
  applyTheme(theme.value === 'light' ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('akoma-docs-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme)
  }
  const savedMood = localStorage.getItem('akoma-docs-mood')
  if (savedMood === 'app' || savedMood === 'site') {
    applyMood(savedMood)
  }
  const savedAccent = localStorage.getItem('akoma-docs-accent')
  if (savedAccent === 'auto') {
    applyAccent('auto')
  } else if (accentPaletteIds.includes(savedAccent as AccentPalette)) {
    applyAccent(savedAccent as AccentPalette)
  }
})

watch(
  () => route.path,
  () => {
    sidebarOpen.value = false
  },
)
</script>

<template>
  <div class="docs-shell">
    <div
      v-if="sidebarOpen"
      class="docs-backdrop"
      @click="sidebarOpen = false"
    />

    <aside class="docs-sidebar" :class="{ 'is-open': sidebarOpen }">
      <div class="docs-brand">
        <span class="docs-brand__name">Akoma</span>
        <span class="docs-brand__tag">v0.5</span>
      </div>

      <nav>
        <div v-for="group in navGroups" :key="group.title" class="docs-nav-group">
          <div class="docs-nav-group__title">{{ group.title }}</div>
          <RouterLink
            v-for="item in group.items"
            :key="item.path"
            :to="item.path"
            class="docs-nav-link"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </nav>
    </aside>

    <div class="docs-main">
      <div class="docs-toolbar">
        <button
          type="button"
          class="docs-theme-toggle docs-mobile-toggle tap-scale"
          @click="sidebarOpen = !sidebarOpen"
        >
          Menu
        </button>
        <div class="docs-mood-switch" role="group" aria-label="Mood">
          <button
            type="button"
            :class="{ 'is-active': mood === 'app' }"
            @click="applyMood('app')"
          >
            App
          </button>
          <button
            type="button"
            :class="{ 'is-active': mood === 'site' }"
            @click="applyMood('site')"
          >
            Site
          </button>
        </div>
        <label class="docs-accent-picker">
          <span class="sr-only">Accent palette</span>
          <select
            :value="accent"
            class="docs-accent-picker__select"
            @change="applyAccent(($event.target as HTMLSelectElement).value as AccentPalette | 'auto')"
          >
            <option value="auto">Accent: Auto</option>
            <option v-for="id in accentPaletteIds" :key="id" :value="id">
              Accent: {{ accentPalettes[id].label }}
            </option>
          </select>
        </label>
        <button type="button" class="docs-theme-toggle tap-scale" @click="toggleTheme">
          {{ theme === 'light' ? 'Dark' : 'Light' }}
        </button>
      </div>
      <main class="docs-content">
        <slot />
      </main>
    </div>
  </div>
</template>
