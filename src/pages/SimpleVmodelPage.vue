<script setup lang="ts">
import SimpleVmodel from '../components/SimpleVmodel.vue';
import { ref } from 'vue'

// VS Code だと props で渡す型のチェックをしてくれるが IntelliJ だとしてくれない…
const inputValue = ref('initial value');
</script>

<template>
  <h2>シンプルな `v-model` を使った親子コンポーネント連携</h2>
  <ul>
    <li>親から子へは v-model で ref を渡す</li>
    <li>
      子から親へは emits で更新する
      <ul>
        <li>v-model を使った場合は、親側で emits の更新関数を定義する必要がない</li>
        <li>@update="updateValue" を省略できる糖衣構文</li>
        <li>emits 関数がシンプルなら v-model は楽ではある</li>
        <li>慣れていないと更新処理がブラックボックスに感じるかも</li>
      </ul>
    </li>
  </ul>
  <SimpleVmodel
    v-model:value="inputValue"
    name="field-name"
  />
  <p>親コンポーネントから見た値: {{ inputValue }}</p>
</template>
