<script setup lang="ts">
import { darkTheme, dateZhCN, lightTheme, zhCN } from 'naive-ui';
import { computed, markRaw } from 'vue';

import { useThemeContext } from '~/hooks/theme';

import { convertThemeToNaiveOverrides } from './utils';

defineOptions({ name: 'NaiveConfigProvider' });

const context = useThemeContext();
const theme = computed(() => markRaw(context.schema === 'dark' ? darkTheme : lightTheme));
const overrides = computed(() => markRaw(convertThemeToNaiveOverrides(context.theme)));
</script>

<template>
  <n-config-provider
    abstract
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="overrides"
  >
    <slot />
  </n-config-provider>
</template>
