/**
 * Named accent palettes for Akoma.
 * Set on `<html data-accent="teal">` or override CSS variables in your app.
 *
 * Each palette has three chromatic shades: light · base · dark.
 */
export const accentPalettes = {
  violet: {
    label: 'Violet',
    description: 'Mineral violet — default for App mood.',
    sample: '#6658b8',
    light: '#8578c9',
    dark: '#4f4299',
  },
  evergreen: {
    label: 'Evergreen',
    description: 'Confident green — default for Site mood.',
    sample: '#2e684f',
    light: '#3f8566',
    dark: '#1f4a37',
  },
  teal: {
    label: 'Teal',
    description: 'Calm mineral teal for productivity and wellness apps.',
    sample: '#3a7d85',
    light: '#4f96a0',
    dark: '#2a5f66',
  },
  ocean: {
    label: 'Ocean',
    description: 'Trustworthy blue for data-heavy products.',
    sample: '#3d6a94',
    light: '#5584ad',
    dark: '#2d5174',
  },
  amber: {
    label: 'Amber',
    description: 'Warm gold for optimistic, human interfaces.',
    sample: '#9a702d',
    light: '#b8893f',
    dark: '#7a5720',
  },
  rose: {
    label: 'Rose',
    description: 'Dusty rose for lifestyle and creative tools.',
    sample: '#a8586a',
    light: '#c07082',
    dark: '#8a4556',
  },
  coral: {
    label: 'Coral',
    description: 'Terracotta warmth without feeling playful.',
    sample: '#b5644a',
    light: '#cd7d62',
    dark: '#944f39',
  },
  slate: {
    label: 'Slate',
    description: 'Blue-gray for neutral B2B surfaces.',
    sample: '#4a5d73',
    light: '#627890',
    dark: '#384858',
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
