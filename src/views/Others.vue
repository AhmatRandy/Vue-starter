<script setup lang="ts">
import { ref, watch, watchPostEffect } from 'vue'
import Define from '../components/Define.vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

const dataProps = ref({
  name: 'randy',
  age: 26,
})

watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})

const state = ref({
  someObject: {
    name: 'John',
    age: 30,
  },
})

watch(
  () => state.value.someObject,
  (newValue, oldValue) => {
    console.log('someObject changed:', newValue, oldValue)
  },
  { deep: true },
)

const updateName = () => {
  state.value.someObject.name = 'Jane'
}

const updateAge = () => {
  state.value.someObject.age = 31
}

const todoId = ref(1)
const data = ref(null)

watch(
  todoId,
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json()
  },
  { immediate: true },
)

// Fungsi untuk mengubah todoId
const changeTodoId = (id) => {
  todoId.value = id
}

const count = ref(0)

// Memantau perubahan pada `count` hanya sekali
watch(
  count,
  (newValue, oldValue) => {
    console.log('Count changed from', oldValue, 'to', newValue)
  },
  { once: true },
)

const increment = () => {
  count.value++
}

const countPost = ref(0)

watchPostEffect(() => {
  console.log('Count has been updated to:', count.value)
  document.title = 'oke'
})

const incrementPost = () => {
  countPost.value++
}
</script>

<template>
  <div class="container">
    <div class="section-watch">
      <h1 class="title">Using watch for get data</h1>
      <p>
        Ask a yes/no question:
        <input v-model="question" :disabled="loading" class="input-field" />
      </p>
      <p class="answer">{{ answer }}</p>
    </div>
    <div class="section-watch">
      <h1>watch using deep true</h1>
      <div class="button-group">
        <button @click="updateName" class="button green">Change Name</button>
        <button @click="updateAge" class="button blue">Change Age</button>
      </div>
    </div>

    <div class="section-watch">
      <h1 class="todo-title">watch using immediate</h1>
      <button @click="changeTodoId(1)" class="button yellow">Todo 1</button>
      <button @click="changeTodoId(2)" class="button yellow">Todo 2</button>
      <button @click="changeTodoId(3)" class="button yellow">Todo 3</button>
      <p v-if="data" class="todo-title">{{ data.title }}</p>
    </div>

    <div class="section-watch">
      <h1 class="todo-title">watch using immediate</h1>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>

    <div class="section-watch">
      <h1 class="todo-title">watch post effect</h1>
      <p>Count: {{ countPost }}</p>
      <button @click="incrementPost">Increment</button>
    </div>

    <div class="section-watch">
      <Define v-bind="dataProps" class="okee" />
    </div>
  </div>
</template>
<style scoped>
.container {
  text-align: center;
  margin: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  color: #4caf50;
  margin-bottom: 20px;
}

.section-watch {
  border: 2px solid #4caf50; /* Border untuk setiap bagian watch */
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  background-color: #fff; /* Latar belakang putih untuk bagian */
}

.input-field {
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #4caf50;
  outline: none;
}

.answer {
  font-weight: bold;
  font-size: 1.5em;
  color: #333;
  margin: 20px 0;
}

.button-group {
  margin: 20px;
}

.button {
  margin: 5px;
  padding: 10px 15px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  opacity: 0.9;
}

.green {
  background-color: #4caf50;
}

.blue {
  background-color: #2196f3;
}

.yellow {
  background-color: #ffc107;
}

.todo-title {
  margin-top: 20px;
  font-weight: bold;
  color: #333;
}
</style>
