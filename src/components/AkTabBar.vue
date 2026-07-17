<script setup lang="ts">
import {
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  toRef,
  watch,
} from 'vue'
import { TAB_BAR_KEY } from './tab-bar-context'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const trackRef = ref<HTMLElement | null>(null)
const items = reactive(new Map<string, HTMLElement>())
const indicator = ref({ x: 0, y: 0, w: 0, h: 0, ready: false })

function updateIndicator() {
  const track = trackRef.value
  const el = items.get(props.modelValue)
  if (!track || !el) {
    indicator.value.ready = false
    return
  }

  const trackRect = track.getBoundingClientRect()
  const icon = el.querySelector('.ak-tab-bar__icon') as HTMLElement | null
  const targetRect = (icon ?? el).getBoundingClientRect()
  const padX = 10
  const padY = 7
  indicator.value = {
    x: targetRect.left - trackRect.left - padX,
    y: targetRect.top - trackRect.top - padY,
    w: targetRect.width + padX * 2,
    h: targetRect.height + padY * 2,
    ready: true,
  }
}

function register(value: string, el: HTMLElement) {
  items.set(value, el)
  void nextTick(updateIndicator)
}

function unregister(value: string) {
  items.delete(value)
  void nextTick(updateIndicator)
}

let resizeObserver: ResizeObserver | undefined

onMounted(() => {
  void nextTick(updateIndicator)
  resizeObserver = new ResizeObserver(() => updateIndicator())
  if (trackRef.value) resizeObserver.observe(trackRef.value)
})

onUnmounted(() => resizeObserver?.disconnect())

watch(
  () => props.modelValue,
  () => void nextTick(updateIndicator),
)

provide(TAB_BAR_KEY, {
  active: toRef(props, 'modelValue'),
  select: (value: string) => emit('update:modelValue', value),
  register,
  unregister,
})
</script>

<template>
  <nav class="ak-tab-bar" aria-label="Primary">
    <div ref="trackRef" class="ak-tab-bar__track" role="tablist">
      <span
        class="ak-tab-bar__indicator"
        :class="{ 'ak-tab-bar__indicator--ready': indicator.ready }"
        :style="{
          transform: `translate(${indicator.x}px, ${indicator.y}px)`,
          width: `${indicator.w}px`,
          height: `${indicator.h}px`,
        }"
        aria-hidden="true"
      />
      <slot />
    </div>
  </nav>
</template>

<style scoped>
.ak-tab-bar {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  z-index: 50;
  padding-bottom: var(--safe-bottom);
  pointer-events: none;
  background: var(--nav-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  box-shadow: var(--shadow-nav);
}

.ak-tab-bar__track {
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  max-width: var(--shell-max);
  min-height: var(--nav-height);
  margin: 0 auto;
  pointer-events: auto;
}

.ak-tab-bar__indicator {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 12px;
  background: var(--accent-soft);
  border: 1px solid color-mix(in srgb, var(--accent) 10%, transparent);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 340ms var(--ease-out-expo),
    width 340ms var(--ease-out-expo),
    height 340ms var(--ease-out-expo),
    opacity 220ms var(--ease-smooth);
}

.ak-tab-bar__indicator--ready {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .ak-tab-bar__indicator {
    transition: none;
  }
}
</style>
