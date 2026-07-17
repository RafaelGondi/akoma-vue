<script setup lang="ts">
withDefaults(
  defineProps<{
    interactive?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    interactive: false,
    padding: 'md',
  },
)

defineSlots<{
  default?: () => unknown
  media?: () => unknown
  header?: () => unknown
  footer?: () => unknown
}>()
</script>

<template>
  <article
    class="ak-card"
    :class="[
      `ak-card--pad-${padding}`,
      { 'ak-card--interactive tap-scale': interactive },
    ]"
  >
    <div v-if="$slots.media" class="ak-card__media">
      <slot name="media" />
    </div>
    <div v-if="$slots.header" class="ak-card__header">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="ak-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="ak-card__footer">
      <slot name="footer" />
    </div>
  </article>
</template>

<style scoped>
.ak-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--bg-elevated);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.ak-card--pad-none {
  padding: 0;
}

.ak-card--pad-sm {
  padding: 14px 16px;
}

.ak-card--pad-md {
  padding: 18px 20px;
}

.ak-card--pad-lg {
  padding: 26px 28px;
}

.ak-card--pad-none .ak-card__body,
.ak-card--pad-none .ak-card__header,
.ak-card--pad-none .ak-card__footer {
  padding-left: 18px;
  padding-right: 18px;
}

.ak-card--pad-none .ak-card__header {
  padding-top: 16px;
}

.ak-card--pad-none .ak-card__body {
  padding-bottom: 16px;
}

.ak-card--pad-none .ak-card__footer {
  padding-bottom: 16px;
}

.ak-card--interactive {
  cursor: pointer;
  transition: box-shadow var(--transition), transform 0.18s var(--ease-spring);
}

.ak-card--interactive:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.ak-card__media {
  flex-shrink: 0;
}

.ak-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.ak-card__body {
  flex: 1;
  min-width: 0;
}

.ak-card__footer {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
