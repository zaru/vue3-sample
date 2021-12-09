<script setup lang="ts">
import Root from '../../components/deep_nest/provide-inject-typed/Root.vue';
import { provide } from 'vue'
import { injectionKey, useTitleState } from '../../components/deep_nest/provide-inject-typed/useTitleState';
// Provide した自身のコンポーネントでは Inject できないのでここでする
provide(injectionKey, useTitleState());
</script>

<template>
  <h2>ネストが深いコンポーネントサンプル</h2>
  <ul>
    <li>Provide Inject を使って孫コンポーネントが直接ステートを扱えるようにしている</li>
    <li>Provide/Inject 関連を別ファイルに切り出している</li>
    <li>InjectionKey を使ってキーを型定義できる、これにより Provide/Inject の型検査が行える</li>
    <li>また、ProvideInjectPage.vue ではステートと更新関数をそれぞれ Provide していたが、今回は一つの関数にまとめている</li>
    <li>簡易なグローバルステート管理がこれで実現する</li>
    <li>書き方などに規約はないので、自分たちで設計する必要がある</li>
    <li>シンプルに保つ＆肥大化させないための区切りなどが必要そう</li>
    <li>ref のアンラップがされる・されないの挙動は把握しておかないと意味不明になるかも</li>
  </ul>
  <Root />
</template>
