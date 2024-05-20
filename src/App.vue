<script setup lang="ts">
  import VTaskBoard from '@/components/VTaskBoard.vue'
</script>

<template>
  <main>
    <VTaskBoard title="To Do"/>
    <VTaskBoard title="In Progress"/>
    <VTaskBoard title="Done"/>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    justify-content: space-between;
  }
</style>
