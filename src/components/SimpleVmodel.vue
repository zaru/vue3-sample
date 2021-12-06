<script setup lang="ts">
interface ISimpleVmodelProps {
  name: string,
  value: string
}
const props = defineProps<ISimpleVmodelProps>();

interface ISimpleComponentEmits {
  (e: 'update:value', value: string): void
}
const emits = defineEmits<ISimpleComponentEmits>();

const updateValue = (event: KeyboardEvent) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  emits('update:value', target.value);
};
</script>

<template>
  <label>v-model サンプル</label>
  <input
    type="text"
    :name="props.name"
    :value="props.value"
    @input="updateValue"
  >
  <p>子コンポーネント自身の値 : {{ props.value }}</p>
</template>

<style scoped>
</style>
