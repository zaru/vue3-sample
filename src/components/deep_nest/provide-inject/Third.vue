<script setup lang="ts">
import { inject, Ref } from "vue";

const title = inject('title');
const updateProviderTitle = inject<{(v: string):void}>('updateTitle');
if (updateProviderTitle == undefined) {
  throw('');
}

const updateTitle = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  // readonly をつけているので注入された側が直接ステートを変更できないようになっている
  // title.value = target.value; // NG

  // props/emit と同じように更新用のメソッドを Provide してもらう
  updateProviderTitle(target.value);
};
</script>

<template>
  <p>3階層目の値 : {{ title }}</p>
  <p>
    <input
      :value="title"
      @input="updateTitle"
    >
  </p>
</template>

<style scoped>
</style>
