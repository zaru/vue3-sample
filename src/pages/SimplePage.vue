<script setup lang="ts">
import SimpleComponent from '../components/SimpleComponent.vue';
import { ref } from 'vue'

const inputValue = ref('initial value');

const updateValue = (value: string) => {
  inputValue.value = value;
};

</script>

<template>
  <h2>シンプルな親子コンポーネント連携</h2>
  <ul>
    <li>親から子へは props で ref を渡す</li>
    <li>
      子から親へは emits で更新する関数を渡す
      <ul>
        <li>子は渡された emits 関数に更新内容を渡す</li>
      </ul>
    </li>
  </ul>
  <SimpleComponent
    name="field-name"
    :value="inputValue"
    @update="updateValue"
  />
  <p>親コンポーネントから見た値: {{ inputValue }}</p>
</template>
