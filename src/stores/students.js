import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
export const useStudentStore = defineStore('student', () => {
  let allStudents = ref([])

  async function getAllStudents() {
    try {
      const response = await axios.get('http://localhost:3000/allStudents')
      if (response.status === 200) {
        console.log('in res', response.data)
        allStudents.value = response.data
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function addNewStudent(data) {
    const dataSet = data

    try {
      if (dataSet.name === '' || dataSet.age === '' || dataSet.gender === '') {
        return false
      }
      const response = await axios.post('http://localhost:3000/addStudent', dataSet)

      if (response.status === 200) {
        console.log('res post', response)
        getAllStudents()
        return true
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  return { getAllStudents, addNewStudent, allStudents }
})
