<script setup lang="ts">
import { computed } from 'vue';
import Third from './Third.vue';

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
  <p>2階層目の値 : {{ props.title }}</p>
  <Third
    v-model:title="titleComputed"
  />
</template>

<style scoped>
</style>
