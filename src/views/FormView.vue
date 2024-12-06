<script setup lang="ts">
import { provide, ref } from 'vue'
import CustomInput from '../components/CustomInput.vue'
import UserForm from '../components/UserForm.vue'
import ChildComponent from '../components/ChildComponent.vue'

const inputValue = ref('')
const userData = ref({
  firstName: '',
  lastName: '',
  age: 0,
  email: '',
  username: '',
})

const messageFormParent = ref('')

provide('messageFormParent', messageFormParent)

const handleUpdate = () => {
  console.log('Form Data:', userData.value)
}
</script>

<template>
  <div class="form-container">
    <h2>Basic Custom Input</h2>
    <CustomInput v-model.capitalize="inputValue" />

    <h2>Complex User Form</h2>
    <UserForm
      v-model:firstName="userData.firstName"
      v-model:lastName="userData.lastName"
      v-model:age="userData.age"
      v-model:email="userData.email"
      v-model:username="userData.username"
      @update="handleUpdate"
    />

    <div class="preview">
      <h3>Preview Data:</h3>
      <pre>{{ userData }}</pre>
    </div>
    <div class="preview">
      <input v-model="messageFormParent" />
      <ChildComponent />
    </div>
  </div>
</template>

<style scoped>
.form-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.preview {
  margin-top: 20px;
  padding: 15px;
  background: #f8f8f8;
  border-radius: 4px;
}

pre {
  background: #35495e;
  color: #fff;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
