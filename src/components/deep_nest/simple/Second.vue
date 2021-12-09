<script setup lang="ts">
import Third from './Third.vue';

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
  <p>2階層目の値 : {{ props.title }}</p>
  <Third
    :title="props.title"
    @update="updateTitle"
  />
</template>

<style scoped>
</style>
