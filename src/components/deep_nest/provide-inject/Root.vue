<script setup lang="ts">
import First from './First.vue';

import { ref, provide, readonly } from 'vue'
const title = ref<string>('initial title');
provide('title', readonly(title));

const updateTitle = (value: string) => {
  title.value = value;
};
provide('updateTitle', updateTitle);
</script>

<template>
  <p>Root の値 : {{ title }}</p>
  <First />
</template>

<style scoped>
</style>
