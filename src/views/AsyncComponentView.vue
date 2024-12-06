<script setup lang="ts">
import { ref, defineAsyncComponent, watchEffect } from 'vue'

const AsyncComponent = defineAsyncComponent(() => import('../components/MyAsyncComponent.vue'))

const showAsyncComponent = ref(false)

watchEffect(() => {
  setTimeout(() => {
    showAsyncComponent.value = true
  }, 5000)
})
</script>

<template>
  <div>
    <h2>Async Component Example</h2>
    <div v-if="showAsyncComponent">
      <AsyncComponent />
    </div>
    <div v-else>
      <p>Loading component, please wait...</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: green;
}
</style>
