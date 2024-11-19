import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './styles/tailwind.css';
import './assets/main.css';

function bootstrap() {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);

  // https://www.naiveui.com/zh-CN/dark/docs/style-conflict
  const meta = document.createElement('meta');
  meta.name = 'naive-ui-style';
  document.head.appendChild(meta);

  app.mount('#app');
}

bootstrap();
