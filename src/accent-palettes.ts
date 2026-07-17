/**
 * Named accent palettes for Akoma.
 * Set on `<html data-accent="teal">` or override CSS variables in your app.
 */
export const accentPalettes = {
  violet: {
    label: 'Violet',
    description: 'Mineral violet — default for App mood.',
    sample: '#6658b8',
  },
  evergreen: {
    label: 'Evergreen',
    description: 'Confident green — default for Site mood.',
    sample: '#2e684f',
  },
  teal: {
    label: 'Teal',
    description: 'Calm mineral teal for productivity and wellness apps.',
    sample: '#3a7d85',
  },
  ocean: {
    label: 'Ocean',
    description: 'Trustworthy blue for data-heavy products.',
    sample: '#3d6a94',
  },
  amber: {
    label: 'Amber',
    description: 'Warm gold for optimistic, human interfaces.',
    sample: '#9a702d',
  },
  rose: {
    label: 'Rose',
    description: 'Dusty rose for lifestyle and creative tools.',
    sample: '#a8586a',
  },
  coral: {
    label: 'Coral',
    description: 'Terracotta warmth without feeling playful.',
    sample: '#b5644a',
  },
  slate: {
    label: 'Slate',
    description: 'Blue-gray for neutral B2B surfaces.',
    sample: '#4a5d73',
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
