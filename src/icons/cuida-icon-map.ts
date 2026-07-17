import { completeIconSet, type cIcons } from '@sysvale/cuida-icons'

export type CuidaIconName = cIcons

export const cuidaIconMap = new Map<string, string>(
  completeIconSet.map((icon: { name: string; data: string }) => [
    icon.name,
    normalizeCuidaIconSvg(icon.data),
  ]),
)

/**
 * Cuida SVG exports omit viewBox and wrap paths in evenodd groups that break
 * when recolored via CSS. Rebuild a flat svg so paths inherit currentColor.
 */
function normalizeCuidaIconSvg(raw: string) {
  const paths = raw.match(/<path\b[^>]*\/>/g)
  if (!paths?.length) return raw

  const cleanedPaths = paths.map((path) =>
    path
      .replace(/\sfill="[^"]*"/g, '')
      .replace(/\s(fill-rule|clip-rule)="[^"]*"/g, ''),
  )

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">${cleanedPaths.join('')}</svg>`
}

export function getCuidaIconMarkup(name: CuidaIconName) {
  return cuidaIconMap.get(name) ?? ''
}
