import './styles/index.css'

export { Akoma } from './plugin'
export type { AkomaOptions } from './plugin'
export * from './components'
export * from './types'
export {
  accentPalettes,
  accentPaletteIds,
  appDefaultAccent,
  siteDefaultAccent,
  applyAccentPalette,
  resolveAccentPalette,
} from './accent-palettes'
export type { AccentPalette } from './accent-palettes'
export type { CuidaIconName } from './icons/cuida-icon-map'
export { getCuidaIconMarkup, cuidaIconMap } from './icons/cuida-icon-map'
export {
  completionShade,
  completionShadeClass,
  completionShadeNeedsContrast,
  completionShadeColor,
} from './utils/completion-shade'
export type { CompletionShade } from './utils/completion-shade'
export {
  useAkomaTheme,
  applyAkomaTheme,
  syncThemeColorMeta,
} from './composables/use-akoma-theme'
export type {
  ThemeMode,
  AkomaMood,
  ApplyAkomaThemeOptions,
  UseAkomaThemeOptions,
} from './composables/use-akoma-theme'
