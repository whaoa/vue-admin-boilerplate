import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    components({
      dts: fileURLToPath(new URL('./src/types/components.d.ts', import.meta.url)),
      resolvers: [NaiveUiResolver()],
    }),
    checker({
      vueTsc: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{js,ts,jsx,tsx,mjs,mts,vue}"',
      },
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{css,scss,vue}',
      },
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  envPrefix: 'APP_',
});
