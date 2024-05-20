<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import VTaskBoard from '@/components/VTaskBoard.vue'
  import { useTaskStore } from '@/stores/task'

  const taskStore = useTaskStore()

  const { todoList, inprogList, doneList } = storeToRefs(taskStore)
</script>

<template>
  <main>
    <VTaskBoard :tasks="todoList" title="To Do"/>
    <VTaskBoard :tasks="inprogList" title="In Progress"/>
    <VTaskBoard :tasks="doneList" title="Done"/>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    justify-content: space-between;
  }
</style>
