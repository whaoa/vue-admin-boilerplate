import type { ThemeSchema } from '~/hooks/theme';
import type { Theme } from '~/libs/theme/schema';
import type { InjectionKey } from 'vue';

export const THEME_PROVIDER_CONTEXT = Symbol.for('ThemeProviderContext') as InjectionKey<{
  schema: ThemeSchema;
  theme: Theme;
}>;
