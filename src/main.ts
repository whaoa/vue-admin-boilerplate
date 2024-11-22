import { createApp } from 'vue';

import App from './App.vue';
import { setupNaive } from './libs/naive';
import { setupRouter } from './router';
import { setupStore } from './stores';

import './styles/theme.css';
import './styles/tailwind.css';

function bootstrap() {
  const app = createApp(App);

  setupStore(app);
  setupRouter(app);
  setupNaive();

  app.mount('#app');
}

bootstrap();
