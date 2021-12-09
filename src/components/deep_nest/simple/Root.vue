<script setup lang="ts">
import First from './First.vue';

import { ref } from 'vue'
const title = ref<string>('initial title');
const updateTitle = (value: string) => {
  title.value = value;
};
</script>

<template>
  <p>Root の値 : {{ title }}</p>
  <First
    :title="title"
    @update="updateTitle"
  />
</template>

<style scoped>
</style>
