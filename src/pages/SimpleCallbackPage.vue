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
        <li>実質的に React のリフトアップと同じ</li>
      </ul>
    </li>
    <li>
      emit と callback どう違うのか
      <ul>
        <li>子から親が指定する処理を実行するという構造自体は同じ</li>
        <li>
          物理的制約
          <ul>
            <li>emit はイベント名なので、一部記述ミスをしてもビルドエラーにならず、型検査も通る</li>
            <li>callback は関数なので、一部記述ミスをするとビルドエラーになり、型検査もエラー</li>
          </ul>
        </li>
        <li>
          使い分け
          <ul>
            <li>emit は親が子の振る舞いには関心を持たず、イベント通知でデータだけ欲しい。オプショナルな感じ</li>
            <li>callback は親がこの振る舞いを強制する</li>
            <li>とはいえ、チーム開発において厳密な使い分けは難しいかもしれない。言語やフレームワーク的制約も緩いので</li>
          </ul>
        </li>
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
