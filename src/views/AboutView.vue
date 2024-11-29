<script setup lang="ts">
import { ref } from 'vue'

// Enter key
const inputText = ref('')
const enterMessage = ref('')
const handleEnter = () => {
  enterMessage.value = `Teks "${inputText.value}" telah dikirim!`
  inputText.value = ''
}

// Tab key
const tabCount = ref(0)
const handleTab = () => {
  tabCount.value++
}

// Delete key
const deleteText = ref('')
const deleteCount = ref(0)
const handleDelete = () => {
  deleteCount.value++
}

// Esc key
const showModal = ref(false)
const escCount = ref(0)
// Gunakan event listener global untuk ESC
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && showModal.value) {
    showModal.value = false
    escCount.value++
  }
})

// Space key
const spaceCount = ref(0)
const handleSpace = () => {
  spaceCount.value++
}

// Arrow keys
const lastArrow = ref('')
const handleArrow = (direction: string) => {
  lastArrow.value = direction
}
</script>

<template>
  <div class="about">
    <h1>Key Aliases Demo</h1>
    <!-- Input dengan event enter -->
    <div class="demo-section">
      <h3>Enter Key Demo</h3>
      <input
        v-model="inputText"
        @keyup.enter="handleEnter"
        placeholder="Tekan Enter untuk mengirim..."
      />
      <p>Status: {{ enterMessage }}</p>
    </div>
    <!-- Input dengan event enter -->

    <!-- Tab navigation demo -->
    <div class="demo-section">
      <h3>Tab Key Demo</h3>
      <input @keyup.tab="handleTab" placeholder="Tekan Tab untuk pindah..." />
      <p>Tab pressed: {{ tabCount }} kali</p>
    </div>

    <!-- Delete/Backspace demo -->
    <div class="demo-section">
      <h3>Delete/Backspace Demo</h3>
      <input
        v-model="deleteText"
        @keyup.delete="handleDelete"
        placeholder="Tekan Delete/Backspace..."
      />
      <p>Karakter dihapus: {{ deleteCount }} kali</p>
    </div>
    <!-- Tab navigation demo -->

    <!-- Esc key demo -->
    <div class="demo-section">
      <h3>Escape Key Demo</h3>
      <div v-if="showModal" class="modal">
        <p>Tekan ESC untuk menutup</p>
        <button @click="showModal = false">Close</button>
      </div>
      <button @click="showModal = true">Buka Modal</button>
      <p>Modal ditutup dengan ESC: {{ escCount }} kali</p>
    </div>
    <!-- Esc key demo -->

    <!-- Space key demo -->
    <div class="demo-section">
      <h3>Space Key Demo</h3>
      <input @keyup.space="handleSpace" placeholder="Tekan spasi..." />
      <p>Spasi ditekan: {{ spaceCount }} kali</p>
    </div>
    <!-- Space key demo -->

    <!-- Arrow keys demo -->
    <div class="demo-section">
      <h3>Arrow Keys Demo</h3>
      <div
        class="arrow-box"
        @keyup.up="handleArrow('up')"
        @keyup.down="handleArrow('down')"
        @keyup.left="handleArrow('left')"
        @keyup.right="handleArrow('right')"
        tabindex="0"
      >
        <p>Tekan arrow keys</p>
        <p>Terakhir ditekan: {{ lastArrow }}</p>
      </div>
    </div>
    <!-- Arrow keys demo -->
  </div>
</template>

<style scoped>
.about {
  padding: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

input {
  padding: 8px;
  margin: 5px 0;
  width: 250px;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.arrow-box {
  width: 200px;
  height: 100px;
  border: 2px solid #ccc;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.arrow-box:focus {
  outline: 2px solid #007bff;
}
</style>
