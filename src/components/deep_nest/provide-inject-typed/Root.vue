<script setup lang="ts">
import First from './First.vue';
import {inject} from "vue";
import {injectionKey} from "./useTitleState";
const titleState = inject(injectionKey);
if (titleState == undefined) {
  throw Error("Could not inject store object");
}
</script>

<template>
  <!-- https://v3.ja.vuejs.org/guide/reactivity-fundamentals.html#ref-%E3%81%AE%E3%82%A2%E3%83%B3%E3%83%A9%E3%83%83%E3%83%95%E3%82%9A -->
  <!-- .value が必要な理由  -->
  <p>Root の値 : {{ titleState.title.value }}</p>
  <First />
</template>

<style scoped>
</style>
