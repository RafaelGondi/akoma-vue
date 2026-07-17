<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Use absolute positioning inside a relative parent (docs/previews). */
    contained?: boolean
  }>(),
  {
    contained: false,
  },
)
</script>

<template>
  <div class="ambient" :class="{ 'ambient--contained': contained }" aria-hidden="true">
    <span class="ambient__orb ambient__orb--1" />
    <span class="ambient__orb ambient__orb--2" />
    <span class="ambient__orb ambient__orb--3" />
  </div>
</template>

<style scoped>
.ambient--contained {
  position: absolute;
}
</style>
