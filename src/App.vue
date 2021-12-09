<script setup lang="ts">
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <p>親子連携 emit vs callback</p>
        <ul>
          <li>
            <router-link to="/simple_vmodel">
              v-model 使って emit で子から親を更新
            </router-link>
          </li>
          <li>
            <router-link to="/simple_emit">
              v-model を使わず emit で子から親を更新
            </router-link>
          </li>
          <li>
            <router-link to="/simple_callback">
              callback を使って子から親を更新
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <p>ネストが深いコンポーネント連携</p>
        <ul>
          <li>
            <router-link to="/deep_nest/simple">
              シンプルバージョン
            </router-link>
          </li>
        </ul>
      </li>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          About
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style>
</style>
