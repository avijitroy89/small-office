import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const userAuthData = reactive({
    name: 'test',
    password: 'test123',
  })

  function loggedInUser() {
    isLoggedIn.value = true
  }

  return { userAuthData, loggedInUser, isLoggedIn }
})
