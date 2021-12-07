<script setup lang="ts">
import SimpleEmit from '../components/SimpleEmit.vue';
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
        <li>v-model 糖衣構文でやっていることを自分で記述しているだけで、v-model と同じ処理</li>
      </ul>
    </li>
    <li>
      v-model を使うかどうか
      <ul>
        <li>v-model は記述量が少ないので慣れているなら良いかもしれない</li>
        <li>Vue2 時代の弱点だった v-model を複数設定できない、名前が決め打ちになっているなどの要素は Vue3 で改善された</li>
        <li>ただ、v-model は暗黙的なので Vue に慣れていないと更新がどのようにされているか不明で可読性は低いかもしれない</li>
      </ul>
    </li>
  </ul>
  <SimpleEmit
    name="field-name"
    :value="inputValue"
    @update="updateValue"
  />
  <p>親コンポーネントから見た値: {{ inputValue }}</p>
</template>
