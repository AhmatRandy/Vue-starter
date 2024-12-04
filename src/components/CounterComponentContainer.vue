<script setup lang="ts">
import { ref } from 'vue'
import CounterComponentButton from './CounterComponentButton.vue'

const count = ref(0)
const lastAction = ref('')
const history = ref<string[]>([])

const handleIncrease = (value: number) => {
  count.value += value
  const action = value > 0 ? 'ditambah' : 'dikurang'
  lastAction.value = `Counter ${action} ${Math.abs(value)}`
  history.value.push(lastAction.value)
}

const handleReset = () => {
  count.value = 0
  lastAction.value = 'Counter direset ke 0'
  history.value.push(lastAction.value)
}

const handleSubmit = (id: number, value: string) => {
  lastAction.value = `Data submitted: ID=${id}, Value=${value}`
  history.value.push(lastAction.value)
}
</script>

<template>
  <div class="counter-container">
    <h2>Emitting and Listening to Events</h2>

    <div class="counter-display">
      <h1>{{ count }}</h1>
    </div>

    <CounterComponentButton
      @increase="handleIncrease"
      @reset="handleReset"
      @submit="handleSubmit"
    />

    <div class="action-info" v-if="lastAction">
      <p>Aksi terakhir: {{ lastAction }}</p>
    </div>

    <div class="history-section">
      <h3>Riwayat Aksi:</h3>
      <ul>
        <li v-for="(action, index) in history" :key="index">
          {{ action }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.counter-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.counter-display {
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.counter-display h1 {
  font-size: 4rem;
  color: #42b883;
  margin: 0;
}

.action-info {
  margin: 1rem 0;
  padding: 1rem;
  background: #e3f2fd;
  border-radius: 4px;
  color: #1976d2;
}

.history-section {
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
}

.history-section h3 {
  color: #333;
  margin-top: 0;
}

.history-section ul {
  list-style-type: none;
  padding: 0;
}

.history-section li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  color: #666;
}

.history-section li:last-child {
  border-bottom: none;
}
</style>
