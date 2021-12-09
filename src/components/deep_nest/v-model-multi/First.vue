<script setup lang="ts">
import { computed } from 'vue';
import Second from './Second.vue';

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
  <p>1階層目の値 : title = {{ props.title }} / content = {{ props.content }}</p>
  <Second
    v-model:title="titleComputed"
    v-model:content="contentComputed"
  />
</template>

<style scoped>
</style>
