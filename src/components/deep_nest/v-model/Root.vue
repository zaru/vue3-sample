<script setup lang="ts">
import First from './First.vue';

import { ref } from 'vue'
const title = ref<string>('initial title');
</script>

<template>
  <p>Root の値 : {{ title }}</p>
  <First
    v-model:title="title"
  />
</template>

<style scoped>
</style>
