<script setup lang="ts">
import Root from '../../components/deep_nest/provide-inject/Root.vue';
</script>

<template>
  <h2>ネストが深いコンポーネントサンプル</h2>
  <ul>
    <li>Provide Inject を使って孫コンポーネントが直接ステートを扱えるようにしている</li>
    <li>バケツリレーせずにシンプルにできるので良さそう</li>
    <li>ただいまの実装だと Provide/Inject で利用しているステート定義と関数の型情報が分散しているので抽出した方が良さそう</li>
    <li>また、Provide/Inject のキーが文字列で渡しているので事故る＆体験が悪い、これも一緒に抽出して import するようにする</li>
  </ul>
  <Root />
</template>
