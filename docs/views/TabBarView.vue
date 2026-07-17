<script setup lang="ts">
import { ref } from 'vue'
import { AkTabBar, AkTabBarItem } from '@akoma'

const active = ref('home')
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">TabBar</h1>
    <p class="docs-lead">
      Bottom navigation for mobile shells — pill glass in App mood, flat bar in Site mood.
      Pair with <code>.akoma-shell</code> padding so content clears the nav.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Live preview</h2>
    <p class="docs-section__desc">
      Active tab: <strong>{{ active }}</strong>. Switch mood in the toolbar to compare App vs Site.
    </p>

    <div class="docs-tabbar-frame">
      <div class="docs-tabbar-frame__content">
        <p v-if="active === 'home'" class="docs-tabbar-screen">Home content</p>
        <p v-else-if="active === 'tasks'" class="docs-tabbar-screen">Tasks content</p>
        <p v-else-if="active === 'stats'" class="docs-tabbar-screen">Stats content</p>
        <p v-else class="docs-tabbar-screen">Profile content</p>
      </div>

      <AkTabBar v-model="active">
        <AkTabBarItem value="home" label="Início" icon="home-outline" />
        <AkTabBarItem value="tasks" label="Tarefas" icon="check-circle-outline" />
        <AkTabBarItem value="stats" label="Stats" icon="chart-column-outline" />
        <AkTabBarItem value="profile" label="Perfil" icon="user-outline" />
      </AkTabBar>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">Usage</h2>
    <pre class="docs-code"><code>&lt;AkTabBar v-model="active"&gt;
  &lt;AkTabBarItem value="home" label="Início" icon="home-outline" /&gt;
  &lt;AkTabBarItem value="tasks" label="Tarefas" icon="check-circle-outline" /&gt;
&lt;/AkTabBar&gt;</code></pre>
  </section>
</template>

<style scoped>
.docs-tabbar-frame {
  position: relative;
  max-width: 420px;
  min-height: 360px;
  margin-top: var(--space-4);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  background: var(--bg);
  overflow: hidden;
}

.docs-tabbar-frame__content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  padding: var(--space-6) var(--space-5)
    calc(var(--nav-height) + var(--safe-bottom) + var(--space-6));
}

.docs-tabbar-screen {
  font-size: 15px;
  color: var(--text-secondary);
}

.docs-tabbar-frame :deep(.ak-tab-bar) {
  position: absolute;
}
</style>
