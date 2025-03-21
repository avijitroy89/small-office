<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in props.students" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.gender }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

const props = defineProps({
    students: {
        type: Array
    }
})
</script>