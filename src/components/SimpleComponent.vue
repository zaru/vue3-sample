<script setup lang="ts">
interface ISimpleComponentProps {
  name: string,
  value: string
}
const props = defineProps<ISimpleComponentProps>();

interface ISimpleComponentEmits {
  // MEMO: このイベント名を変更し親側の変更が漏れたとしてもエラーにはならない、静かに死ぬだけ
  // 実行時にもエラーにならないので callback と比較すると気が付きにくいかもしれない
  // 一応、実行時に Vue warn の警告がコンソールには出力される
  (e: 'update', value: string): void
}
const emits = defineEmits<ISimpleComponentEmits>();

const updateValue = (event: Event) => {
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
