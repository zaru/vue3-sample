<script setup lang="ts">
interface ISimpleComponentProps {
  name: string,
  value: string,
  // MEMO: emit と違い関数名が変わると親で修正漏れがあっても型チェックでエラーになる
  // VS Code の場合はエディタ上で警告されるが IntelliJ は警告が出ない、悲しい
  // 実行時には該当コールバック関数がないとエラーにはなるので emit よりも堅いのは事実
  update(value: string): void
}
const props = defineProps<ISimpleComponentProps>();

const updateValue = (event: KeyboardEvent) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  props.update(target.value);
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
