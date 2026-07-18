/**
 * Named accent palettes for Akoma.
 * Set on `<html data-accent="teal">` or override CSS variables in your app.
 *
 * Each palette has five chromatic shades:
 * lighter · light · base · dark · darker
 */
export const accentPalettes = {
  violet: {
    label: 'Violet',
    description: 'Mineral violet — default for App mood.',
    sample: '#8375cc',
    lighter: '#c5bee5',
    light: '#a59ad8',
    dark: '#6354bc',
    darker: '#4d3f9c',
  },
  evergreen: {
    label: 'Evergreen',
    description: 'Confident green — default for Site mood.',
    sample: '#3c8866',
    lighter: '#68b894',
    light: '#4ca67e',
    dark: '#2c6a4f',
    darker: '#1d4c37',
  },
  teal: {
    label: 'Teal',
    description: 'Calm mineral teal for productivity and wellness apps.',
    sample: '#4b99a4',
    lighter: '#8abdc5',
    light: '#69acb6',
    dark: '#377f88',
    darker: '#286168',
  },
  ocean: {
    label: 'Ocean',
    description: 'Trustworthy blue for data-heavy products.',
    sample: '#5184b1',
    lighter: '#97b4cd',
    light: '#759cbe',
    dark: '#3a6a97',
    darker: '#2b5176',
  },
  amber: {
    label: 'Amber',
    description: 'Warm gold for optimistic, human interfaces.',
    sample: '#bc8a3b',
    lighter: '#d4b583',
    light: '#c9a05e',
    dark: '#9d712a',
    darker: '#7c581e',
  },
  rose: {
    label: 'Rose',
    description: 'Dusty rose for lifestyle and creative tools.',
    sample: '#c36d80',
    lighter: '#ddb3bc',
    light: '#cf919f',
    dark: '#ac5468',
    darker: '#8d4254',
  },
  coral: {
    label: 'Coral',
    description: 'Terracotta warmth without feeling playful.',
    sample: '#d07b5f',
    lighter: '#e4b9ab',
    light: '#d99b86',
    dark: '#b96246',
    darker: '#974d36',
  },
  slate: {
    label: 'Slate',
    description: 'Blue-gray for neutral B2B surfaces.',
    sample: '#5e7894',
    lighter: '#9faebd',
    light: '#7e93a9',
    dark: '#475d76',
    darker: '#36485a',
  },
} as const

export type AccentPalette = keyof typeof accentPalettes

export const accentPaletteIds = Object.keys(accentPalettes) as AccentPalette[]

/** App mood default when no data-accent is set */
export const appDefaultAccent: AccentPalette = 'violet'

/** Site mood default when no data-accent is set */
export const siteDefaultAccent: AccentPalette = 'evergreen'

export function applyAccentPalette(root: HTMLElement, palette: AccentPalette | 'auto') {
  if (palette === 'auto') {
    delete root.dataset.accent
    return
  }
  root.dataset.accent = palette
}

export function resolveAccentPalette(
  mood: 'app' | 'site',
  explicit?: AccentPalette | null,
): AccentPalette {
  if (explicit) return explicit
  return mood === 'site' ? siteDefaultAccent : appDefaultAccent
}
