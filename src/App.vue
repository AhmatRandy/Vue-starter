<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="navbar">
      <h1>test vue</h1>
    </header>
    <div class="content">
      <aside class="sidebar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </aside>
      <main class="main-content">
        <RouterView />
      </main>
    </div>
    <footer class="footer">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.content {
  display: flex;
  flex-grow: 1;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-content {
  flex-grow: 1;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>
