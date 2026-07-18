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
    sample: '#6658b8',
    lighter: '#a69cd6',
    light: '#8578c9',
    dark: '#4f4299',
    darker: '#3b3076',
  },
  evergreen: {
    label: 'Evergreen',
    description: 'Confident green — default for Site mood.',
    sample: '#2e684f',
    lighter: '#50a27e',
    light: '#3f8566',
    dark: '#1f4a37',
    darker: '#112c20',
  },
  teal: {
    label: 'Teal',
    description: 'Calm mineral teal for productivity and wellness apps.',
    sample: '#3a7d85',
    lighter: '#6caab3',
    light: '#4f96a0',
    dark: '#2a5f66',
    darker: '#1b4146',
  },
  ocean: {
    label: 'Ocean',
    description: 'Trustworthy blue for data-heavy products.',
    sample: '#3d6a94',
    lighter: '#789cbb',
    light: '#5584ad',
    dark: '#2d5174',
    darker: '#1e3953',
  },
  amber: {
    label: 'Amber',
    description: 'Warm gold for optimistic, human interfaces.',
    sample: '#9a702d',
    lighter: '#c69f61',
    light: '#b8893f',
    dark: '#7a5720',
    darker: '#573e16',
  },
  rose: {
    label: 'Rose',
    description: 'Dusty rose for lifestyle and creative tools.',
    sample: '#a8586a',
    lighter: '#cd93a0',
    light: '#c07082',
    dark: '#8a4556',
    darker: '#6b3341',
  },
  coral: {
    label: 'Coral',
    description: 'Terracotta warmth without feeling playful.',
    sample: '#b5644a',
    lighter: '#d79c88',
    light: '#cd7d62',
    dark: '#944f39',
    darker: '#713b2a',
  },
  slate: {
    label: 'Slate',
    description: 'Blue-gray for neutral B2B surfaces.',
    sample: '#4a5d73',
    lighter: '#8193a6',
    light: '#627890',
    dark: '#384858',
    darker: '#26313d',
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
