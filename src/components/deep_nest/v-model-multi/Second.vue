<script setup lang="ts">
import { computed } from 'vue';
import Third from './Third.vue';

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

const titleComputed = computed({
  get: () => props.title,
  set: (value) => emits('update:title', value),
});
const contentComputed = computed({
  get: () => props.content,
  set: (value) => emits('update:content', value),
});
</script>

<template>
  <p>2階層目の値 : title = {{ props.title }} / content = {{ props.content }}</p>
  <Third
    v-model:title="titleComputed"
    v-model:content="contentComputed"
  />
</template>

<style scoped>
</style>
