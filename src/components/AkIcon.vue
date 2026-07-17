<script setup lang="ts">
import { computed } from 'vue'
import { getCuidaIconMarkup, type CuidaIconName } from '../icons/cuida-icon-map'

const props = withDefaults(
  defineProps<{
    name: CuidaIconName
    size?: number | string
    /** Accessible label — omit when decorative inside labelled controls */
    label?: string
  }>(),
  {
    size: 20,
  },
)

const sizeValue = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size,
)

const markup = computed(() => getCuidaIconMarkup(props.name))
</script>

<template>
  <span
    class="ak-icon"
    :class="{ 'ak-icon--missing': !markup }"
    :style="{ width: sizeValue, height: sizeValue }"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : true"
    v-html="markup"
  />
</template>

<style scoped>
.ak-icon {
  display: block;
  flex-shrink: 0;
  color: inherit;
  line-height: 0;
}

.ak-icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}

.ak-icon--missing::after {
  content: '?';
  font-size: 10px;
  font-weight: 700;
  color: var(--danger);
}
</style>
