import { createRouter, createWebHashHistory } from 'vue-router';

import type { App } from 'vue';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/welcome',
      component: () => import('~/views/Welcome.vue'),
    },
  ],
});

export function setupRouter(app: App) {
  app.use(router);
  return router;
};
