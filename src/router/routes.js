
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Home', component: () => import('pages/IndexPage.vue') },
      { path: 'spacing', name: 'Spacing', component: () => import('pages/SpacingPage.vue') },
      { path: 'shadows', name: 'Shadows', component: () => import('pages/ShadowsPage.vue') },
      { path: 'visibility', name: 'Visibility', component: () => import('pages/VisibilityPage.vue') },
      { path: 'position', name: 'Position', component: () => import('pages/PositionPage.vue') },
      { path: 'flex-box', name: 'Flex-box', component: () => import('pages/FlexBoxIntroPage.vue') },
      { path: 'components', name: 'Components', component: () => import('pages/ComponentPage.vue') },
      { path: 'language', name: 'Language', component: () => import('pages/LanguagePage.vue') },
    ]
  },
  {
    path: '/layout1/',
    component: () => import('layouts/TestLayout.vue')
  },
  {
    path: '/desktop/',
    component: () => import('layouts/DesktopLayout.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
