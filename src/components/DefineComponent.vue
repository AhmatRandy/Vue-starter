<script setup lang="ts">
defineProps<{
  name: string
  age: number
}>()
</script>

<template>
  <div class="container">
    <span>{{ name }} - {{ age }}</span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 2px;
}
</style>
