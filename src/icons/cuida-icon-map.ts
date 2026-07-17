import { completeIconSet, type cIcons } from '@sysvale/cuida-icons'

export type CuidaIconName = cIcons

export const cuidaIconMap = new Map<string, string>(
  completeIconSet.map((icon: { name: string; data: string }) => [
    icon.name,
    normalizeCuidaIconSvg(icon.data),
  ]),
)

/** Cuida SVG exports omit viewBox and use evenodd groups that break when recolored. */
function normalizeCuidaIconSvg(raw: string) {
  return raw
    .replace(/<svg([^>]*)>/, (_match, attrs: string) => {
      const cleaned = attrs
        .replace(/\s(width|height)="[^"]*"/g, '')
        .replace(/\sfill-rule="[^"]*"/g, '')
        .replace(/\sclip-rule="[^"]*"/g, '')
      const viewBox = /\bviewBox=/.test(cleaned) ? '' : ' viewBox="0 0 24 24"'
      return `<svg${cleaned}${viewBox} fill="currentColor">`
    })
    .replace(/\s(fill-rule|clip-rule)="[^"]*"/g, '')
}

export function getCuidaIconMarkup(name: CuidaIconName) {
  return cuidaIconMap.get(name) ?? ''
}
