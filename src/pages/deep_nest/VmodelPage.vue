<script setup lang="ts">
import Root from '../../components/deep_nest/v-model/Root.vue';
</script>

<template>
  <h2>ネストが深いコンポーネントサンプル</h2>
  <ul>
    <li>v-model でバケツリレーをしている</li>
    <li>
      明示的な props/emit と比較
      <ul>
        <li>基本 props/emit バケツリレーと同じ</li>
        <li>v-model で渡ってきた props を直接更新することはできないので、computed で emit を内包して、それを v-model でバケツリレーする</li>
        <li>記述量もたいして変わらない</li>
      </ul>
    </li>
  </ul>
  <Root />
</template>
