import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import devtools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
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
    devtools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
