<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
// import MyComponent from './MyComponent.vue'

const objectOffers = {
  id: 'container',
}

const isActive = ref(true)
const hasError = ref(false)
const isActive2 = ref(false)
const hasError2 = ref(true)
const numbers = ref([1, 2, 3, 4, 5])
const parentMessage = ref('this is')
const msg = ref([
  {
    id: 1,
    message: 'foo',
  },
  {
    id: 2,
    message: 'bar',
  },
])

const todos = ref([
  {
    title: 'running',
    isComplete: false,
  },
  {
    title: 'walk',
    isComplete: true,
  },
])

const name = ref('Vue js')

const count = ref(0)
const object = { id: ref(1) }
const interpolation = 'this is interpolation'
const directive = 'this is directive'
const number = 0
const ok = true
const message = 'Hello World'

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
})

const doSomething = () => {
  alert('hello')
}

const eventName = 'click'
const doSomethingNew = () => {
  alert('using argu dynamic')
}

const changeColor = () => {
  isActive.value = !isActive.value
  hasError.value = !hasError.value
}

const addCount = () => {
  count.value++
}
const awesome = ref(true)

const attributeName = ref('href')
const url = ref('https://example.com')

// computed
const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

const evenNumbers = computed(() => {
  console.log('ex me bro')
  return numbers.value.filter((n) => n % 2 === 0)
})

// a computed ref
const publishedBooksMessage = computed(() => {
  console.log('computed executed')
  return author.books.length > 0 ? 'Yes' : 'No'
})

const classObject = computed(() => {
  console.log('ex')
  const oke = {
    active: isActive2.value && !hasError2.value,
    'text-danger': hasError2.value,
  }
  return oke
})

const eventListener = (event: any) => {
  console.log('event', event)
  alert(`Hello ${name.value}!`)
  if (event) {
    alert(event.target.tagName)
  }
}

function warn(message, event) {
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

const handleItemClick = () => {
  alert('clicked to')
}

const handleButtonClick = () => {
  console.log('Button clicked')
}

const string = ref('')

const handleLinkClick = () => {
  const conditionMet = false
  if (!conditionMet) {
    string.value = 'Navigasi dibatalkan!'
    return
  }

  window.location.href = 'https://example.com'
}

const handleClick = () => {
  alert('Div clicked!')
}
</script>

<template>
  <div class="text">
    <!-- using interpolation -->
    <p>Using text interpolation: {{ interpolation }}</p>
    <!-- using interpolation -->

    <!-- using directieve -->
    <p>Using v-html directive: <span v-html="directive"></span></p>
    <p v-if="ok">Now you see me</p>
    <a v-on:click="doSomething"> Click Me </a>
    <!-- shorthand -->
    <a @click="doSomething"> Click Me </a>
    <!-- using directieve -->

    <!-- attribut bindings -->
    <p v-bind="objectOffers">wd</p>
    <p id="objectOffers">wd</p>
    <button v-bind:disabled="true">disable button</button>
    <!-- attribut bindings -->

    <!-- javascript expresion -->
    <span> {{ number + 1 }}</span>
    <button>{{ ok ? 'YES' : 'NO' }}</button>
    <p>{{ message.split('').reverse().join('') }}</p>
    <!-- javascript expresion -->

    <!--  arguments dynamic  -->
    <a v-bind:[attributeName]="url"> Dynamic Link </a>
    <a :[attributeName]="url"> Dynamic Link </a>
    <a v-on:[eventName]="doSomethingNew"> arguments dynamic </a>
    <a @[eventName]="doSomethingNew"> arguments dynamic </a>
    <!--  arguments dynamic  -->

    <!-- ref -->
    <button @click="addCount">{{ count }}</button>
    <span>{{ object.id }}</span>
    <!-- ref -->

    <button
      class="static"
      @click="changeColor"
      :class="{ active: isActive, 'text-danger': hasError }"
    >
      oke
    </button>

    <!-- computed -->
    <h1>{{ publishedBooksMessage }}</h1>
    <div :class="classObject">testing</div>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>

    <!-- computed -->

    <!-- conditional rendering -->
    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <!-- conditional rendering -->

    <!-- v-for -->
    <ul v-for="message in msg" :key="message.id">
      <li>{{ message.message }}</li>
    </ul>
    <ul v-for="(message, id) in msg" :key="id">
      <li>{{ parentMessage }} {{ message.message }}</li>
    </ul>
    <!-- v-for -->

    <!-- v-for with looping value in object -->
    <ul>
      <li v-for="value in myObject" :key="value">
        {{ value }}
      </li>
    </ul>
    <!-- v-for with looping value in object -->
    <span v-for="n in 10" :key="n">{{ n }} </span>

    <!-- v-for with v-if -->
    <div>
      <ul v-for="todo in todos" :key="todo.title">
        <li v-if="!todo.isComplete" :key="todo.title">
          {{ todo.title }}
        </li>
      </ul>
    </div>
  </div>
  <!-- v-for with v-if -->

  <!-- looping in component -->
  <!-- <MyComponent
    v-for="(item, index) in todos"
    :title="item.title"
    :index="index"
    :key="item.title"
  /> -->
  <!-- looping in component -->

  <!-- event listening -->
  <button @click="eventListener">Click me</button>
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>

  <div @click="handleItemClick">
    <div class="item">
      <p>Item 1</p>
      <button @click="handleButtonClick">Button</button>
    </div>
    <div class="item">
      <p>Item 2</p>
      <button @click.stop="handleButtonClick">Button</button>
    </div>
  </div>

  <div>
    <a href="https://example.com" @click.stop.prevent="handleLinkClick">stop prevent default</a>
    <p v-if="string">{{ string }}</p>
  </div>

  <div class="clickable-area" @click.self="handleClick">
    <p>This is a clickable area. Click here!</p>
    <button @click="handleButtonClick">Click Me Too</button>
  </div>

  <!-- event listening -->

  <a @click.stop="eventListener">cek</a>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.blue-container {
  background: blue;
}

.static.text-danger {
  color: red;
}

.static {
  cursor: pointer;
}

.static.active {
  color: aqua;
}
text {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.clickable-area {
  padding: 20px;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
}

h3 {
  font-size: 1.2rem;
}

a {
  cursor: pointer;
}

button {
  cursor: pointer;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
