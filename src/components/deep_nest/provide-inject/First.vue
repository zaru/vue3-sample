<script setup lang="ts">
import Second from './Second.vue';
import {inject} from "vue";
const title = inject('title');
</script>

<template>
  <p>1階層目の値 : {{ title }}</p>
  <Second />
</template>

<style scoped>
</style>
