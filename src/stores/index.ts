import { createPinia } from 'pinia';

import type { App } from 'vue';

export const rootStore = createPinia();

export function setupStore(app: App) {
  app.use(rootStore);
}
