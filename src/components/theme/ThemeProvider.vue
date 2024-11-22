<script lang="ts">
import { computed, defineComponent, markRaw, provide, reactive, watchEffect } from 'vue';

import { useThemeSchema } from '~/hooks/theme';
import { dark } from '~/libs/theme/dark';
import { light } from '~/libs/theme/light';
import { injectThemeStylesToDocument } from '~/libs/theme/utils';

import { THEME_PROVIDER_CONTEXT } from './constants';

export default defineComponent({
  name: 'ThemeProvider',

  setup() {
    const { state: schema } = useThemeSchema();
    const theme = computed(() => markRaw(schema.value === 'dark' ? dark : light));

    watchEffect(
      () => {
        const el = injectThemeStylesToDocument(theme.value);
        el.dataset.themeSchema = schema.value;
      },
      { flush: 'sync' },
    );

    provide(THEME_PROVIDER_CONTEXT, reactive({ schema, theme }));
  },
});
</script>

<template>
  <slot />
</template>
