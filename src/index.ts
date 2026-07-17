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
