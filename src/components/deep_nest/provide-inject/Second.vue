<script setup lang="ts">
import Third from './Third.vue';
import {inject} from "vue";
const title = inject('title');
</script>

<template>
  <p>2階層目の値 : {{ title }}</p>
  <Third />
</template>

<style scoped>
</style>
