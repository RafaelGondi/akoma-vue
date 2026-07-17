import type { App, Plugin } from 'vue'
import * as components from './components'

export type AkomaOptions = {
  /** Prefix for global component registration. Default: none (uses Ak* names). */
  prefix?: string
}

export const Akoma: Plugin = {
  install(app: App, options: AkomaOptions = {}) {
    const prefix = options.prefix ?? ''
    for (const [name, component] of Object.entries(components)) {
      app.component(`${prefix}${name}`, component)
    }
  },
}
