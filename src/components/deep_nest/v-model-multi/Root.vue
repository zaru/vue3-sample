<script setup lang="ts">
import First from './First.vue';

import { ref } from 'vue'
const title = ref<string>('initial title');
const content = ref<string>('initial content');
</script>

<template>
  <p>Root の値 : title = {{ title }} / content = {{ content }}</p>
  <First
    v-model:title="title"
    v-model:content="content"
  />
</template>

<style scoped>
</style>
