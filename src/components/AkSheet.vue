<script setup lang="ts">
/**
 * Mobile bottom sheet — rare elevation on `--bg-elevated`.
 * Prefer over centered modals in mood `app` PWAs.
 */
import AkIconButton from './AkIconButton.vue'

const props = withDefaults(
  defineProps<{
    open: boolean
    title?: string
    /** Accessible label for the close control */
    closeLabel?: string
    /** Show header close button when a title is present */
    showClose?: boolean
    /** Clicking the backdrop dismisses the sheet */
    dismissible?: boolean
  }>(),
  {
    closeLabel: 'Close',
    showClose: true,
    dismissible: true,
  },
)

const emit = defineEmits<{ 'update:open': [boolean] }>()

defineSlots<{
  default?: () => unknown
  header?: () => unknown
}>()

function close() {
  emit('update:open', false)
}

function onBackdropClick() {
  if (props.dismissible) close()
}

let startY = 0
let isDragging = false

function onHandleTouchStart(e: TouchEvent) {
  const touch = e.touches[0]
  if (!touch) return
  startY = touch.clientY
  isDragging = true
}

function onHandleTouchEnd(e: TouchEvent) {
  if (!isDragging) return
  isDragging = false
  const touch = e.changedTouches[0]
  if (!touch) return
  if (touch.clientY - startY > 60) close()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="ak-sheet-backdrop">
      <div
        v-if="open"
        class="ak-sheet-backdrop"
        @click="onBackdropClick"
      />
    </Transition>

    <Transition name="ak-sheet-slide">
      <div
        v-if="open"
        class="ak-sheet"
        role="dialog"
        aria-modal="true"
        :aria-label="title || undefined"
      >
        <div
          class="ak-sheet__handle-wrap"
          @touchstart.passive="onHandleTouchStart"
          @touchend.passive="onHandleTouchEnd"
        >
          <div class="ak-sheet__handle" />
        </div>

        <div
          v-if="title || $slots.header"
          class="ak-sheet__header"
        >
          <slot name="header">
            <h2
              v-if="title"
              class="ak-sheet__title"
            >
              {{ title }}
            </h2>
            <AkIconButton
              v-if="showClose && title"
              variant="secondary"
              size="sm"
              :label="closeLabel"
              icon="x-outline"
              @click="close"
            />
          </slot>
        </div>

        <div class="ak-sheet__body">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.ak-sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgb(0 0 0 / 45%);
}

.ak-sheet {
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--shell-max);
  max-height: 92dvh;
  padding-bottom: var(--safe-bottom);
  transform: translateX(-50%);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-md);
}

.ak-sheet__handle-wrap {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding: var(--space-3) 0 var(--space-2);
  cursor: grab;
}

.ak-sheet__handle {
  width: 2.5rem;
  height: 4px;
  border-radius: var(--radius-full);
  background: var(--text-tertiary);
  opacity: 0.45;
}

.ak-sheet__header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: 0 var(--space-5) var(--space-3);
}

.ak-sheet__title {
  flex: 1;
  overflow: hidden;
  font-size: 1.125rem;
  font-weight: 650;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ak-sheet__body {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.ak-sheet-backdrop-enter-active,
.ak-sheet-backdrop-leave-active {
  transition: opacity 0.25s ease;
}

.ak-sheet-backdrop-enter-from,
.ak-sheet-backdrop-leave-to {
  opacity: 0;
}

.ak-sheet-slide-enter-active,
.ak-sheet-slide-leave-active {
  transition: transform 0.32s var(--ease-out-expo);
}

.ak-sheet-slide-enter-from,
.ak-sheet-slide-leave-to {
  transform: translateX(-50%) translateY(100%);
}

@media (prefers-reduced-motion: reduce) {
  .ak-sheet-backdrop-enter-active,
  .ak-sheet-backdrop-leave-active,
  .ak-sheet-slide-enter-active,
  .ak-sheet-slide-leave-active {
    transition: none;
  }
}
</style>
