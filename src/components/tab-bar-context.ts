import type { InjectionKey, Ref } from 'vue'

export type TabBarContext = {
  active: Ref<string>
  select: (value: string) => void
}

export const TAB_BAR_KEY: InjectionKey<TabBarContext> = Symbol('ak-tab-bar')
