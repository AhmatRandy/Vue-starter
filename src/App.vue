<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="navbar">
      <div class="navbar-content">
        <h1 class="navbar-title">My Vue App</h1>
        <nav class="navbar-links">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink to="/others" class="nav-link">Others</RouterLink>
          <RouterLink to="/form" class="nav-link">Form</RouterLink>
          <RouterLink to="/async-component" class="nav-link">async component</RouterLink>
        </nav>
      </div>
    </header>

    <div class="content">
      <main class="main-content">
        <RouterView />
      </main>
    </div>

    <footer class="footer">
      <div class="footer-section">
        <h3>Contact Us</h3>
      </div>
    </footer>
  </div>
  x
</template>

<style>
body {
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
  margin: 0;
  background-color: #f5f7fa;
  color: #1a1a1a;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2563eb;
  margin: 0;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f3f4f6;
  color: #2563eb;
}

.content {
  display: flex;
  flex-grow: 1;
  margin-top: 64px;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: fit-content;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #4b5563;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.sidebar-link:hover {
  background-color: #f3f4f6;
  color: #2563eb;
}

.sidebar-link.router-link-active {
  background-color: #e0e7ff;
  color: #2563eb;
  font-weight: 500;
}

.main-content {
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  min-height: 500px;
}

.footer {
  background-color: #fff;
  color: #ffffff;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
}

.footer-section p {
  color: #cbd5e1;
}
.footer-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2563eb;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #334155;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    padding: 1rem;
  }

  .sidebar {
    width: 100%;
  }

  .navbar-content {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
