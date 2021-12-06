<script setup lang="ts">
import SimpleCallback from '../components/SimpleCallback.vue';
import { ref } from 'vue'

const inputValue = ref('initial value');

const updateValue = (value: string) => {
  inputValue.value = value;
};

</script>

<template>
  <h2>シンプルな親子コンポーネント連携 (callback パターン)</h2>
  <ul>
    <li>親から子へは props で ref を渡す</li>
    <li>
      子から親へは props で渡された callback 関数を呼び出す
      <ul>
        <li>emit パターンと違い、props で関数を渡す</li>
        <li>emit と同じようなことができる</li>
      </ul>
    </li>
  </ul>
  <SimpleCallback
    name="field-name"
    :value="inputValue"
    :update="updateValue"
  />
  <p>親コンポーネントから見た値: {{ inputValue }}</p>
</template>
