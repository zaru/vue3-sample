<script setup lang="ts">
import { computed } from 'vue';
import Second from './Second.vue';

interface IDeepNestSimpleProps {
  title: string,
}
const props = defineProps<IDeepNestSimpleProps>();

interface IDeepNestSimpleEmits {
  (e: 'update:title', value: string): void
}
const emits = defineEmits<IDeepNestSimpleEmits>();

const titleComputed = computed({
  get: () => props.title,
  set: (value) => emits('update:title', value),
});
</script>

<template>
  <p>1階層目の値 : {{ props.title }}</p>
  <Second
    v-model:title="titleComputed"
  />
</template>

<style scoped>
</style>
