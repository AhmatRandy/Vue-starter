<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
}
</script>

<template>
  <div>
    <h1 id="form-title">Form Pendaftaran</h1>

    <form @submit.prevent="handleSubmit">
      <div>
        <label id="name-label" for="name">Nama:</label>
        <input type="text" id="name" v-model="name" aria-labelledby="name-label" />
      </div>

      <div>
        <label id="email-label" for="email">Email:</label>
        <input type="email" id="email" v-model="email" aria-labelledby="email-label" />
      </div>

      <div>
        <label id="password-label" for="password">Kata Sandi:</label>
        <input type="password" id="password" v-model="password" aria-labelledby="password-label" />
      </div>

      <button type="submit">Daftar</button>
    </form>

    <div v-if="submitted">
      <h2>Data yang Dikirim:</h2>
      <p>Nama: {{ name }}</p>
      <p>Email: {{ email }}</p>
    </div>
  </div>
</template>
