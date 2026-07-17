<script setup lang="ts">
import {
  AkButton,
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
            <span
              style="
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: var(--accent-soft);
                color: var(--accent);
                font-size: 18px;
              "
            >📚</span>
          </template>
          Português
          <template #subtitle>
            <AkProgress :value="72" size="sm" />
          </template>
          <template #trailing>
            <AkIconButton label="Remove subject" variant="ghost" size="sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14" stroke-linecap="round" />
              </svg>
            </AkIconButton>
          </template>
        </AkListRow>

        <AkListRow interactive>
          <template #leading>
            <span
              style="
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: var(--success-soft);
                color: var(--success);
                font-size: 18px;
              "
            >🧪</span>
          </template>
          Química
          <template #subtitle>
            <AkProgress :value="28" size="sm" color="var(--cat-4)" />
          </template>
          <template #trailing>
            <AkIconButton label="Remove subject" variant="ghost" size="sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14" stroke-linecap="round" />
              </svg>
            </AkIconButton>
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
