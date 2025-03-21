<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { computed } from 'vue';

const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.isLoggedIn)

</script>

<template>
  <header>
    <ul class="nav">
      <li class="nav-item" v-if="!isLoggedIn">
        <RouterLink class="nav-link" to="/">Login</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" v-if="isLoggedIn" to="/students">All Students</RouterLink>
      </li>
    </ul>

  </header>

  <RouterView />
</template>

<style scoped></style>
