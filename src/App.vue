<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Login</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/students">All Students</RouterLink>
      </li>
    </ul>

  </header>

  <RouterView />
</template>

<style scoped></style>
