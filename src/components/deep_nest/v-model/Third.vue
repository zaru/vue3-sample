<script setup lang="ts">
interface IDeepNestSimpleProps {
  title: string,
}
const props = defineProps<IDeepNestSimpleProps>();

interface IDeepNestSimpleEmits {
  (e: 'update:title', value: string): void
}
const emits = defineEmits<IDeepNestSimpleEmits>();
const updateTitle = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  emits('update:title', target.value);
};
</script>

<template>
  <p>3階層目の値 : {{ props.title }}</p>
  <p>
    <input
      :value="props.title"
      @input="updateTitle"
    >
  </p>
</template>

<style scoped>
</style>
