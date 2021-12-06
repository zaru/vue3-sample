<script setup lang="ts">
interface ISimpleComponentProps {
  name: string,
  value: string
}
const props = defineProps<ISimpleComponentProps>();

interface ISimpleComponentEmits {
  (e: 'update', value: string): void
}
const emits = defineEmits<ISimpleComponentEmits>();

const updateValue = (event: KeyboardEvent) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  emits('update', target.value);
};
</script>

<template>
  <label>シンプルなテキスト入力</label>
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
