<script setup lang="ts">
import { computed, ref } from 'vue'
// defineProps<{
//   msg: string
// }>()

const objectOffers = {
  id: 'container',
}

const isActive = ref(true)
const hasError = ref(false)

const count = ref(0)
const object = { id: ref(1) }
// const { id } = object

const interpolation = 'this is interpolation'
const directive = 'this is directive'
const number = 0
const ok = true
const message = 'Hello World'

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

const attributeName = ref('href')
const url = ref('https://example.com')
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
  </div>

  <!-- ref -->
  <button @click="addCount">{{ count }}</button>
  <span>{{ object.id }}</span>
  <!-- ref -->

  <div class="static" @click="changeColor" :class="{ active: isActive, 'text-danger': hasError }">
    oke
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
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
  flex-direction: column;
  gap: 5px;
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
