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
        <router-link to="/simple_page">
          Simple Page
        </router-link>
      </li>
      <li>
        <router-link to="/simple_callback">
          Simple Callback Page
        </router-link>
      </li>
      <li>
        <router-link to="/simple_vmodel">
          Simple v-model Page
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
