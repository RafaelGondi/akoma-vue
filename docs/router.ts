import { createRouter, createWebHistory } from 'vue-router'

export const navGroups = [
  {
    title: 'Foundation',
    items: [
      { path: '/', name: 'home', label: 'Overview' },
      { path: '/philosophy', name: 'philosophy', label: 'Guides' },
      { path: '/tokens', name: 'tokens', label: 'Tokens' },
    ],
  },
  {
    title: 'Components',
    items: [
      { path: '/components/button', name: 'button', label: 'Button' },
      { path: '/components/badge', name: 'badge', label: 'Badge' },
      { path: '/components/chip', name: 'chip', label: 'Chip' },
      { path: '/components/card', name: 'card', label: 'Card' },
      { path: '/components/list', name: 'list', label: 'List' },
      { path: '/components/progress', name: 'progress', label: 'Progress' },
      { path: '/components/divider', name: 'divider', label: 'Divider' },
      { path: '/components/icon-button', name: 'icon-button', label: 'IconButton' },
      { path: '/components/switch', name: 'switch', label: 'Switch' },
      { path: '/components/input', name: 'input', label: 'Input' },
      { path: '/components/textarea', name: 'textarea', label: 'Textarea' },
      { path: '/components/empty-state', name: 'empty-state', label: 'EmptyState' },
      { path: '/components/shimmer', name: 'shimmer', label: 'Shimmer' },
      { path: '/components/ambient-bg', name: 'ambient-bg', label: 'AmbientBg' },
    ],
  },
] as const

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('./views/HomeView.vue') },
    { path: '/philosophy', component: () => import('./views/GuideView.vue') },
    { path: '/guides/:slug', component: () => import('./views/GuideView.vue') },
    { path: '/tokens', component: () => import('./views/TokensView.vue') },
    { path: '/components/button', component: () => import('./views/ButtonView.vue') },
    { path: '/components/badge', component: () => import('./views/BadgeView.vue') },
    { path: '/components/chip', component: () => import('./views/ChipView.vue') },
    { path: '/components/card', component: () => import('./views/CardView.vue') },
    { path: '/components/list', component: () => import('./views/ListView.vue') },
    { path: '/components/progress', component: () => import('./views/ProgressView.vue') },
    { path: '/components/divider', component: () => import('./views/DividerView.vue') },
    { path: '/components/icon-button', component: () => import('./views/IconButtonView.vue') },
    { path: '/components/switch', component: () => import('./views/SwitchView.vue') },
    { path: '/components/input', component: () => import('./views/InputView.vue') },
    { path: '/components/textarea', component: () => import('./views/TextareaView.vue') },
    { path: '/components/empty-state', component: () => import('./views/EmptyStateView.vue') },
    { path: '/components/shimmer', component: () => import('./views/ShimmerView.vue') },
    { path: '/components/ambient-bg', component: () => import('./views/AmbientBgView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
