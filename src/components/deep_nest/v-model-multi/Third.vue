<script setup lang="ts">
interface IDeepNestSimpleProps {
  title: string,
  content: string,
}
const props = defineProps<IDeepNestSimpleProps>();

interface IDeepNestSimpleEmits {
  (e: 'update:title', value: string): void
  (e: 'update:content', value: string): void
}
const emits = defineEmits<IDeepNestSimpleEmits>();
const updateTitle = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  emits('update:title', target.value);
};
const updateContent = (event: Event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  emits('update:content', target.value);
};
</script>

<template>
  <p>3階層目の値 : title = {{ props.title }} / content = {{ props.content }}</p>
  <p>
    <label>title</label>
    <input
      :value="props.title"
      @input="updateTitle"
    >
  </p>
  <p>
    <label>content</label>
    <input
      :value="props.content"
      @input="updateContent"
    >
  </p>
</template>

<style scoped>
</style>
