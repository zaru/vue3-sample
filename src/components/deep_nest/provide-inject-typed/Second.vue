<script setup lang="ts">
import Third from './Third.vue';
import {inject} from "vue";
import {injectionKey} from "./useTitleState";
const titleState = inject(injectionKey);
</script>

<template>
  <p>2階層目の値 : {{ titleState.title.value }}</p>
  <Third />
</template>

<style scoped>
</style>
