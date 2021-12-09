<script setup lang="ts">
import Second from './Second.vue';

interface IDeepNestSimpleProps {
  title: string,
}
const props = defineProps<IDeepNestSimpleProps>();

interface IDeepNestSimpleEmits {
  (e: 'update', value: string): void
}
const emits = defineEmits<IDeepNestSimpleEmits>();
const updateTitle = (value: string) => {
  emits('update', value);
};
</script>

<template>
  <p>1階層目の値 : {{ props.title }}</p>
  <Second
    :title="props.title"
    @update="updateTitle"
  />
</template>

<style scoped>
</style>
