<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navGroups } from '../router'

const route = useRoute()
const sidebarOpen = ref(false)
const theme = ref<'light' | 'dark'>('light')
const mood = ref<'app' | 'site'>('app')

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
        <span class="docs-brand__tag">v0.2</span>
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
