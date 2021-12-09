<script setup lang="ts">
import { inject } from "vue";
import { injectionKey } from './useTitleState';
const titleState = inject(injectionKey);
if (titleState == undefined) {
  throw Error("Could not inject store object");
}

const updateTitle = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  titleState.updateTitle(target.value);
};
</script>

<template>
  <p>3階層目の値 : {{ titleState.title.value }}</p>
  <p>
    <input
      :value="titleState.title.value"
      @input="updateTitle"
    >
  </p>
</template>

<style scoped>
</style>
