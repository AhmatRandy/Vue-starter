<script setup lang="ts">
// Multiple models
const firstName = defineModel<string>('firstName')
const lastName = defineModel<string>('lastName')
const age = defineModel<number>('age')

// Dengan validasi
const email = defineModel<string>('email', {
  validator(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  },
})

// Dengan transformer
const username = defineModel<string>('username', {
  set(value: string) {
    return value.toLowerCase().replace(/\s+/g, '_')
  },
})
</script>

<template>
  <form class="user-form">
    <div class="form-group">
      <label>First Name:</label>
      <input v-model="firstName" type="text" />
    </div>

    <div class="form-group">
      <label>Last Name:</label>
      <input v-model="lastName" type="text" />
    </div>

    <div class="form-group">
      <label>Age:</label>
      <input v-model="age" type="number" />
    </div>

    <div class="form-group">
      <label>Email:</label>
      <input v-model="email" type="email" />
    </div>

    <div class="form-group">
      <label>Username:</label>
      <input v-model="username" type="text" />
      <small>Username akan dikonversi ke lowercase dan spasi menjadi underscore</small>
    </div>
  </form>
</template>

<style scoped>
.user-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #35495e;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 2px solid #42b883;
  border-radius: 4px;
  font-size: 16px;
}

.form-group small {
  display: block;
  margin-top: 5px;
  color: #666;
  font-size: 0.8em;
}
</style>
