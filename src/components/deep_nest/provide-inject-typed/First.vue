<script setup lang="ts">
import Second from './Second.vue';
import {inject} from "vue";
import {injectionKey} from "./useTitleState";
const titleState = inject(injectionKey);
</script>

<template>
  <p>1階層目の値 : {{ titleState.title.value }}</p>
  <Second />
</template>

<style scoped>
</style>
