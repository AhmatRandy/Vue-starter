<script setup lang="ts">
const emit = defineEmits<{
  (e: 'increase', value: number): void
  (e: 'submit', id: number, value: string): void
  (e: 'reset'): void
}>()

const submitData = () => {
  emit('submit', 1, 'hello')
}
</script>

<template>
  <div class="counter-buttons">
    <button @click="$emit('increase', 1)" class="btn primary">Tambah (+1)</button>

    <button @click="$emit('increase', 5)" class="btn success">Tambah (+5)</button>

    <button @click="$emit('increase', -1)" class="btn warning">Kurang (-1)</button>

    <button @click="$emit('reset')" class="btn danger">Reset</button>

    <button @click="submitData" class="btn info">Submit Data</button>
  </div>
</template>

<style scoped>
.counter-buttons {
  display: flex;
  gap: 8px;
  margin: 1rem 0;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.8;
}

.primary {
  background: #42b883;
  color: white;
}

.success {
  background: #4caf50;
  color: white;
}

.warning {
  background: #ffc107;
  color: black;
}

.danger {
  background: #ff5252;
  color: white;
}

.info {
  background: #2196f3;
  color: white;
}
</style>
