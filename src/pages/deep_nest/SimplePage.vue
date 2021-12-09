<script setup lang="ts">
import Root from '../../components/deep_nest/simple/Root.vue';
</script>

<template>
  <h2>ネストが深いコンポーネントサンプル</h2>
  <ul>
    <li>props/emit でバケツリレーをしている</li>
    <li>単純なものならこれでも良いが…</li>
    <li>
      複数の値を更新する孫コンポーネントがあった場合に厳しい
      <ul>
        <li>@updateTitle="updateTitle" @updateDescription="updateDescription"</li>
        <li>こんな感じで emit を複数渡す必要があり、中間コンポーネントもイベントの伝搬が必要になる</li>
        <li>v-model を使うとある程度は解決する？</li>
      </ul>
    </li>
  </ul>
  <Root />
</template>
