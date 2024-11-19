<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui';

defineOptions({ name: 'NaiveConfigProvider' });
</script>

<template>
  <n-config-provider
    abstract
    inline-theme-disabled
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <slot />
  </n-config-provider>
</template>
