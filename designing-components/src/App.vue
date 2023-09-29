<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'alerts'}">Alerts</RouterLink>
        <RouterLink :to="{name: '1'}">Table</RouterLink>
        <RouterLink :to="{name: '2a'}">Filtered table</RouterLink>
        <RouterLink :to="{name: '2b'}">Filtered table (composable)</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  display: inline;
  margin: 0 1em 0 0;
}
</style>
