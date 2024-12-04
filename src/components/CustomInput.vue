<script setup lang="ts">
// Basic usage
// const model = defineModel<string>()

// With options
// const model = defineModel<string>({
//   required: true,
//   default: '',
//   // Validator function
//   validator(value: string) {
//     return value.length > 0
//   },
// })

// Dengan modifiers
const [model, modifiers] = defineModel<string>({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  },
})
</script>

<template>
  <input :value="model" @input="model = $event.target.value" class="custom-input" />
  <p>Current value: {{ model }}</p>
</template>

<style scoped>
.custom-input {
  padding: 8px;
  border: 2px solid #42b883;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
}

.custom-input:focus {
  border-color: #35495e;
}
</style>
