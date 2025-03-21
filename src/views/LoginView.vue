<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-md-4 login-container">
        <h3>Log In</h3>
        <form @submit.prevent="submitForm()">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" v-model="formData.name" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Age</label>
            <input type="number" v-model="formData.age" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>

  </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
const formData = reactive({
  name: '',
  password: '',
})

onMounted(() => {
  console.log('login')
})


const submitForm = () => {
  console.log('form submitted')
}
</script>
<style lang="scss" scoped>
.login {
  &-container {
    padding: 25px;
    border: 1px solid #d1d1d1;
    border-radius: 8px;
    margin-top: 25px;

  }
}
</style>