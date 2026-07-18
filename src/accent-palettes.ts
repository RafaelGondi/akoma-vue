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
    sample: '#6354bc',
    lighter: '#a59ad8',
    light: '#8375cc',
    dark: '#4d3f9c',
    darker: '#392e78',
  },
  evergreen: {
    label: 'Evergreen',
    description: 'Confident green — default for Site mood.',
    sample: '#2c6a4f',
    lighter: '#4ca67e',
    light: '#3c8866',
    dark: '#1d4c37',
    darker: '#102d20',
  },
  teal: {
    label: 'Teal',
    description: 'Calm mineral teal for productivity and wellness apps.',
    sample: '#377f88',
    lighter: '#69acb6',
    light: '#4b99a4',
    dark: '#286168',
    darker: '#1a4247',
  },
  ocean: {
    label: 'Ocean',
    description: 'Trustworthy blue for data-heavy products.',
    sample: '#3a6a97',
    lighter: '#759cbe',
    light: '#5184b1',
    dark: '#2b5176',
    darker: '#1c3955',
  },
  amber: {
    label: 'Amber',
    description: 'Warm gold for optimistic, human interfaces.',
    sample: '#9d712a',
    lighter: '#c9a05e',
    light: '#bc8a3b',
    dark: '#7c581e',
    darker: '#593e14',
  },
  rose: {
    label: 'Rose',
    description: 'Dusty rose for lifestyle and creative tools.',
    sample: '#ac5468',
    lighter: '#cf919f',
    light: '#c36d80',
    dark: '#8d4254',
    darker: '#6d3140',
  },
  coral: {
    label: 'Coral',
    description: 'Terracotta warmth without feeling playful.',
    sample: '#b96246',
    lighter: '#d99b86',
    light: '#d07b5f',
    dark: '#974d36',
    darker: '#733a28',
  },
  slate: {
    label: 'Slate',
    description: 'Blue-gray for neutral B2B surfaces.',
    sample: '#475d76',
    lighter: '#7e93a9',
    light: '#5e7894',
    dark: '#36485a',
    darker: '#25313e',
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
