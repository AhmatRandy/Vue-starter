<script setup lang="ts">
defineProps<{
  title: string
  index: number
}>()
</script>

<template>
  <div class="container">
    <span>{{ title }}</span>
    <span>{{ title }}</span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 2px;
}
</style>
