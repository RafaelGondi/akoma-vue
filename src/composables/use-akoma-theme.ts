import { ref, watch, type Ref } from 'vue'
import { applyAccentPalette, type AccentPalette } from '../accent-palettes'

export type ThemeMode = 'light' | 'dark'
export type AkomaMood = 'app' | 'site'

export type ApplyAkomaThemeOptions = {
  mode: ThemeMode
  mood?: AkomaMood
  accent?: AccentPalette
  root?: HTMLElement
  /** Sync `<meta name="theme-color">` from `--bg` (default true) */
  syncThemeColor?: boolean
}

export type UseAkomaThemeOptions = {
  mood?: AkomaMood
  accent?: AccentPalette
  /** localStorage key — pass `null` to disable persistence */
  storageKey?: string | null
  defaultMode?: ThemeMode
}

const modeByKey = new Map<string, Ref<ThemeMode>>()

function readStoredMode(key: string): ThemeMode | null {
  try {
    const saved = localStorage.getItem(key)
    if (saved === 'dark' || saved === 'light') return saved
  }
  catch {
    /* ignore */
  }
  return null
}

/** Updates `theme-color` meta from the computed `--bg` token. */
export function syncThemeColorMeta(root: HTMLElement = document.documentElement) {
  const bg = getComputedStyle(root).getPropertyValue('--bg').trim()
  if (!bg) return
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
}

/** Apply mood / theme / accent attributes on a root element (usually `<html>`). */
export function applyAkomaTheme(options: ApplyAkomaThemeOptions) {
  const root = options.root ?? document.documentElement
  root.dataset.theme = options.mode
  if (options.mood) root.dataset.mood = options.mood
  if (options.accent) applyAccentPalette(root, options.accent)

  if (options.syncThemeColor !== false) {
    requestAnimationFrame(() => syncThemeColorMeta(root))
  }
}

/**
 * Reactive theme controller for PWAs.
 * Multiple calls with the same `storageKey` share one mode ref.
 */
export function useAkomaTheme(options: UseAkomaThemeOptions = {}) {
  const mood = options.mood ?? 'app'
  const accent = options.accent
  const storageKey = options.storageKey === undefined ? 'akoma-theme' : options.storageKey
  const mapKey = storageKey ?? '__ephemeral__'

  let mode = modeByKey.get(mapKey)
  if (!mode) {
    const initial =
      (typeof document !== 'undefined' && storageKey ? readStoredMode(storageKey) : null)
      ?? options.defaultMode
      ?? 'light'
    mode = ref<ThemeMode>(initial)
    modeByKey.set(mapKey, mode)
  }

  watch(
    mode,
    (val) => {
      if (typeof document === 'undefined') return
      if (storageKey) {
        try {
          localStorage.setItem(storageKey, val)
        }
        catch {
          /* ignore */
        }
      }
      applyAkomaTheme({ mode: val, mood, accent })
    },
    { immediate: typeof document !== 'undefined' },
  )

  function setMode(next: ThemeMode) {
    mode!.value = next
  }

  function toggleMode() {
    mode!.value = mode!.value === 'light' ? 'dark' : 'light'
  }

  return {
    mode: mode!,
    setMode,
    toggleMode,
  }
}
