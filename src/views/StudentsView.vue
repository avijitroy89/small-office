<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-md-4 login-container">
        <h3>Add new student</h3>
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
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Gender</label>
            <select class="form-select" v-model="formData.gender" aria-label="Default select example">
              <option selected value="">Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button type="submit" :disabled="isSubmitted" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col mt-4">
        <h2>List of students</h2>
        <studentsTable :students="allStudents" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useStudentStore } from '@/stores/students'
import studentsTable from '../components/studentsTable.vue';

const studentStore = useStudentStore();
const formData = reactive({
  name: '',
  age: '',
  gender: ''
})
const isSubmitted = ref(false)
const allStudents = computed(() => studentStore.allStudents)
onMounted(() => {
  studentStore.getAllStudents()
})

const submitForm = async () => {
  isSubmitted.value = true
  const res = await studentStore.addNewStudent(formData)
  if (res) {
    formData.name = ''
    formData.age = ''
    formData.gender = ''
    isSubmitted.value = false
    window.location.reload()
  } else {
    console.error('form data is not fine');
    isSubmitted.value = false
  }
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