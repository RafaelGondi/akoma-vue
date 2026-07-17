<script setup lang="ts">
import {
  AkButton,
  AkIcon,
  AkIconButton,
  AkList,
  AkListRow,
  AkProgress,
  AkSectionHeader,
} from '@akoma'
</script>

<template>
  <header class="docs-page-header reveal">
    <span class="page-label">Components</span>
    <h1 class="page-title">List</h1>
    <p class="docs-lead">
      Flat grouped rows for subjects, tasks, and settings — Asana-style, no floating cards.
    </p>
  </header>

  <section class="docs-section reveal reveal-d1">
    <h2 class="docs-section__title">Grouped list</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkSectionHeader title="Matérias">
        <template #action>
          <AkButton variant="ghost" size="sm">Add</AkButton>
        </template>
      </AkSectionHeader>

      <AkList>
        <AkListRow interactive>
          <template #leading>
            <span class="docs-list-icon docs-list-icon--accent">
              <AkIcon name="open-book-outline" :size="18" />
            </span>
          </template>
          Português
          <template #subtitle>
            <AkProgress :value="72" size="sm" />
          </template>
          <template #trailing>
            <AkIconButton label="Remove subject" icon="minus-outline" variant="ghost" size="sm" />
          </template>
        </AkListRow>

        <AkListRow interactive>
          <template #leading>
            <span class="docs-list-icon docs-list-icon--success">
              <AkIcon name="test-tube-outline" :size="18" />
            </span>
          </template>
          Química
          <template #subtitle>
            <AkProgress :value="28" size="sm" color="var(--cat-4)" />
          </template>
          <template #trailing>
            <AkIconButton label="Remove subject" icon="minus-outline" variant="ghost" size="sm" />
          </template>
        </AkListRow>
      </AkList>
    </div>
  </section>

  <section class="docs-section reveal reveal-d2">
    <h2 class="docs-section__title">SectionHeader</h2>
    <div class="docs-preview docs-preview--stack" style="max-width: 420px">
      <AkSectionHeader title="Registros de hoje" />
      <p style="font-size: 14px; color: var(--text-secondary)">
        Uppercase labels with optional action slot — pairs with lists and forms.
      </p>
    </div>
  </section>
</template>

<style scoped>
.docs-list-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.docs-list-icon--accent {
  background: var(--accent-soft);
  color: var(--accent);
}

.docs-list-icon--success {
  background: var(--success-soft);
  color: var(--success);
}
</style>
