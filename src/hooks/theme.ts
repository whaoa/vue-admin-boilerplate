import { useColorMode } from '@vueuse/core';
import { inject } from 'vue';

import { THEME_PROVIDER_CONTEXT } from '~/components/theme/constants';

import type { BasicColorMode } from '@vueuse/core';

export type ThemeSchema = BasicColorMode;

export function useThemeSchema() {
  return useColorMode();
}

export function useThemeContext() {
  const context = inject(THEME_PROVIDER_CONTEXT, null);
  if (!context) {
    throw new Error('useCurrentThemeContext must be used inside a ThemeProvider');
  }
  return context;
}
