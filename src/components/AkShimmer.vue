<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string
    height?: string
    radius?: 'sm' | 'md' | 'lg' | 'full' | string
  }>(),
  {
    width: '100%',
    height: '16px',
    radius: 'md',
  },
)

function resolveRadius(radius: string) {
  if (radius === 'sm' || radius === 'md' || radius === 'lg' || radius === 'full') {
    return `var(--radius-${radius})`
  }
  return radius
}
</script>

<template>
  <div
    class="ak-shimmer"
    :style="{
      width,
      height,
      borderRadius: resolveRadius(radius),
    }"
    aria-hidden="true"
  />
</template>

<style scoped>
.ak-shimmer {
  display: block;
  background: linear-gradient(
    90deg,
    var(--bg-muted) 0%,
    var(--bg-soft) 45%,
    var(--bg-muted) 90%
  );
  background-size: 200% 100%;
  animation: ak-shimmer 1.4s ease-in-out infinite;
}

@keyframes ak-shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ak-shimmer {
    animation: none;
  }
}
</style>
