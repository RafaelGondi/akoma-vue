/** Discrete completion levels mapped to Akoma's five chromatic accent shades. */
export type CompletionShade =
  | 'none'
  | 'lighter'
  | 'light'
  | 'base'
  | 'dark'
  | 'darker'

/** Maps 0–1 completion rate to a shade step (more done → deeper). */
export function completionShade(rate: number): CompletionShade {
  if (!Number.isFinite(rate) || rate <= 0) return 'none'
  if (rate < 0.25) return 'lighter'
  if (rate < 0.5) return 'light'
  if (rate < 0.75) return 'base'
  if (rate < 1) return 'dark'
  return 'darker'
}

/** CSS class for background/text fill utilities (see `completion-shade.css`). */
export function completionShadeClass(shade: CompletionShade): string {
  return `ak-completion-shade--${shade}`
}

/** Whether text/icons on the shade need light-on-dark contrast. */
export function completionShadeNeedsContrast(shade: CompletionShade): boolean {
  return shade === 'base' || shade === 'dark' || shade === 'darker'
}

/** CSS color value for rings, strokes, and custom paints. */
export function completionShadeColor(shade: CompletionShade): string {
  switch (shade) {
    case 'lighter':
      return 'var(--accent-lighter)'
    case 'light':
      return 'var(--accent-light)'
    case 'base':
      return 'var(--accent)'
    case 'dark':
      return 'var(--accent-dark)'
    case 'darker':
      return 'var(--accent-darker)'
    default:
      return 'var(--bg-muted)'
  }
}
