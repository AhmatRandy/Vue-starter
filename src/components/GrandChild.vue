<script setup lang="ts">
import { inject } from 'vue'

const message = inject('messageFormParent')
</script>

<template>
  <p>this is {{ message }}</p>
</template>
