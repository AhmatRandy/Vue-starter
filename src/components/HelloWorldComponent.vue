<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, reactive, ref } from 'vue'
import { useCounter } from '../composables/useCounter'

// Get route instance
const route = useRoute()

// Get route params and query
const routeInfo = computed(() => ({
  id: route.params.id,
  query: route.query,
  fullPath: route.fullPath,
}))

// State management
const state = reactive({
  offers: {
    id: 'container',
  },
  author: {
    name: 'John Doe',
    books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
  },
  todos: [
    { title: 'running', isComplete: false },
    { title: 'walk', isComplete: true },
  ],
  messages: [
    { id: 1, message: 'foo' },
    { id: 2, message: 'bar' },
  ],
})

// Primitive values menggunakan ref
const uiState = reactive({
  isActive: ref(true),
  hasError: ref(false),
  isActive2: ref(false),
  hasError2: ref(true),
  awesome: ref(true),
  count: ref(0),
  name: ref('Vue js'),
  keyUpEnter: ref(''),
  keyUpEnterSubmited: ref(''),
  messageOnce: ref(''),
  submittedMessage: ref(''),
  age: ref(0),
  submittedAge: ref(null),
  msgTrim: ref(''),
})

const objectOffers = {
  id: 'container',
}

const isActive = ref(true)
const hasError = ref(false)
const isActive2 = ref(false)
const hasError2 = ref(true)
const numbers = ref([1, 2, 3, 4, 5])
const parentMessage = ref('this is')
const keyUpEnter = ref('')
const keyUpEnterSubmited = ref('')

const messageOnce = ref('')
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

const { count, increment } = useCounter()
const addCount = increment
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

const eventListener = (event: Event) => {
  console.log('event', event)
  alert(`Hello ${name.value}!`)
  if (event?.target instanceof HTMLElement) {
    alert(event.target.tagName)
  }
}

function warn(message: string, event?: Event) {
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

const handleItemClick = () => {
  alert('clicked to')
}

const handleButtonClick1 = () => {
  alert('Button 1 clicked')
}
const handleButtonClick2 = () => {
  alert('Button 2 clicked')
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

const handleDivClick = () => {
  alert('Div clicked (captured)!')
}

const handleClickOnce = () => {
  messageOnce.value = 'click one'
}

const onScroll = (event: Event) => {
  if (event.target instanceof HTMLElement) {
    const scrollTop = event.target.scrollTop
    console.log(`Scrolled to: ${scrollTop}px`)
  }
}

const submitKeyUpEnter = () => {
  keyUpEnterSubmited.value = keyUpEnter.value
  name.value = ''
  console.log(`Submitted: ${keyUpEnterSubmited.value}`)
}

const submittedMessage = ref('')

const submitMessage = () => {
  submittedMessage.value = msgTrim.value
  msgTrim.value = ''
}

const age = ref(0)
const submittedAge = ref(null)

const submitAge = () => {
  submittedAge.value = age.value
  age.value = 0
}

const msgTrim = ref('')
const submittedMessageTrim = ref('')

const submitMessageTrim = () => {
  submittedMessageTrim.value = msgTrim.value
  msgTrim.value = ''
}
</script>

<template>
  <div class="vue-demo">
    <section class="demo-section">
      <div class="feature-card">
        <h2>Basic Vue Features</h2>
        <h3>Text Interpolation</h3>
        <p>{{ interpolation }}</p>
        <p>Reversed Message: {{ msg[0].message.split('').reverse().join('') }}</p>
      </div>

      <div class="feature-card">
        <h3>Directives</h3>
        <p v-html="directive"></p>
        <p>Using v-html directive: <span v-html="directive"></span></p>
        <p v-if="ok">Now you see me</p>
        <a v-on:click="doSomething"> Click Me </a>
        <!-- shorthand -->
        <a @click="doSomething"> Click Me </a>
      </div>

      <div class="feature-card">
        <h3>Attribute binding</h3>
        <p v-bind="objectOffers">wd</p>
        <p id="objectOffers">wd</p>
        <button v-bind:disabled="true">disable button</button>
      </div>

      <div class="feature-card">
        <h3>javascript expresion</h3>
        <div>
          <span> {{ number + 1 }}</span>
          <button>{{ ok ? 'YES' : 'NO' }}</button>
          <p>{{ message.split('').reverse().join('') }}</p>
        </div>
      </div>

      <div class="feature-card">
        <h3>arguments dynamic</h3>
        <a v-bind:[attributeName]="url"> Dynamic Link </a>
        <a :[attributeName]="url"> Dynamic Link </a>
        <a v-on:[eventName]="doSomethingNew"> arguments dynamic </a>
        <a @[eventName]="doSomethingNew"> arguments dynamic </a>
      </div>

      <div class="feature-card">
        <h3>Ref</h3>
        <button @click="addCount">{{ count }}</button>
        <span>{{ object.id }}</span>
      </div>

      <div class="feature-card">
        <h3>Style</h3>
        <button
          class="static"
          @click="changeColor"
          :class="{ active: isActive, 'text-danger': hasError }"
        >
          oke
        </button>
      </div>

      <div class="feature-card">
        <h3>Computed</h3>
        <h1>{{ publishedBooksMessage }}</h1>
        <div :class="classObject">testing</div>
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
      </div>

      <div class="feature-card">
        <h3>Conditional Rendering</h3>
        <button @click="awesome = !awesome">Toggle</button>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
      </div>

      <div class="feature-card">
        <h3>v-for</h3>
        <ul v-for="message in msg" :key="message.id">
          <li>{{ message.message }}</li>
        </ul>
        <ul v-for="(message, id) in msg" :key="id">
          <li>{{ parentMessage }} {{ message.message }}</li>
        </ul>
        <!-- v-for with looping value in object -->
        <ul>
          <li v-for="value in myObject" :key="value">
            {{ value }}
          </li>
        </ul>

        <!-- v-for with looping value in object -->
        <span v-for="n in 10" :key="n">{{ n }} </span>
        <!-- v-for with v-if -->
        <ul v-for="todo in todos" :key="todo.title">
          <li v-if="!todo.isComplete" :key="todo.title">
            {{ todo.title }}
          </li>
        </ul>
      </div>

      <div class="feature-card">
        <h3>Event listener</h3>
        <button @click="eventListener">Click me</button>
        <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>

        <div @click="handleItemClick">
          <div class="item">
            <p>Item 1</p>
            <button @click="handleButtonClick1">Button</button>
          </div>
          <div class="item">
            <p>Item 2</p>
            <button @click.stop="handleButtonClick2">Button</button>
          </div>
        </div>

        <div>
          <a href="https://example.com" @click.stop.prevent="handleLinkClick"
            >stop prevent default</a
          >
          <p v-if="string">{{ string }}</p>
        </div>

        <div class="clickable-area" @click.self="handleClick">
          <p>This is a clickable area. Click self!</p>
          <button @click="handleButtonClick">Click Me Too</button>
        </div>

        <a @click.stop="eventListener">cek</a>

        <div class="clickable-area" @click.capture="handleDivClick">
          <p>This is a clickable area. Click capture!</p>
          <button @click="handleButtonClick1">Click Me Too</button>
        </div>

        <div>
          <a href="#" @click.once="handleClickOnce">Click Me Once</a>
          <p v-if="messageOnce">{{ messageOnce }}</p>
        </div>

        <div class="scrollable" @scroll.passive="onScroll">
          <p v-for="i in 100" :key="i">Item {{ i }}</p>
        </div>

        <div>
          <input
            v-model="keyUpEnter"
            @keyup.enter="submitKeyUpEnter"
            placeholder="Type your name and press Enter"
          />
          <p v-if="keyUpEnterSubmited">Submitted Name: {{ keyUpEnterSubmited }}</p>
        </div>
      </div>

      <div class="feature-card">
        <h3>V-model</h3>
        <div>
          <h1>Lazy Model Example</h1>
          <input v-model.lazy="msgTrim" placeholder="Type something and press Enter" />
          <p>Current Message: {{ msgTrim }}</p>
          <button @click="submitMessage">Submit</button>
          <p v-if="submittedMessage">Submitted Message: {{ submittedMessage }}</p>
        </div>

        <div>
          <h1>Number Model Example</h1>
          <input v-model.number="age" placeholder="Enter your age" />
          <p>Your age is: {{ age }}</p>
          <button @click="submitAge">Submit</button>
          <p v-if="submittedAge">Submitted Age: {{ submittedAge }}</p>
        </div>

        <div>
          <h1>Trim Model Example</h1>
          <input v-model.trim="msgTrim" placeholder="Type something and press Enter" />
          <p>Current Message: "{{ msgTrim }}"</p>
          <button @click="submitMessageTrim">Submit</button>
          <p v-if="submittedMessageTrim">Submitted Message: "{{ submittedMessageTrim }}"</p>
        </div>
      </div>

      <div class="feature-card">
        <h3>Route Parameters Demo</h3>
        <div>
          <p>Current Route ID: {{ routeInfo.id || 'No ID' }}</p>
          <p>Query Parameters: {{ JSON.stringify(routeInfo.query) || 'No Query' }}</p>
          <p>Full Path: {{ routeInfo.fullPath }}</p>
        </div>
      </div>
    </section>
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
</template>

<style scoped>
.vue-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f0f4f8; /* Light background color */
}

.demo-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.feature-card h3 {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #42b883;
  padding-bottom: 0.5rem;
}

button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #3aa876;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.scrollable {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 8px;
}
</style>
