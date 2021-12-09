<script setup lang="ts">
import Root from '../../components/deep_nest/v-model-multi/Root.vue';
</script>

<template>
  <h2>ネストが深いコンポーネントサンプル</h2>
  <ul>
    <li>v-model で複数バケツリレーをしている</li>
    <li>バケツリレーの苦しさを味わうために複数ステートを渡してみる</li>
    <li>できなくはないが、これが拡大していくと苦しいだろう…</li>
    <li>v-model 処理を Composition API で抽出することで全体の記述量は減らせるが、ステートが増えると抽出した先が肥大化する</li>
    <li>結局、ファットな Vuex ストアと同じ構造を生み出しそう、ここは設計者の技量次第ではあるが</li>
  </ul>
  <Root />
</template>
