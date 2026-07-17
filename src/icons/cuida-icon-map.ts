import { completeIconSet, type cIcons } from '@sysvale/cuida-icons'

export type CuidaIconName = cIcons

export const cuidaIconMap = new Map<string, string>(
  completeIconSet.map((icon: { name: string; data: string }) => [icon.name, icon.data]),
)

export function getCuidaIconMarkup(name: CuidaIconName) {
  return cuidaIconMap.get(name) ?? ''
}
