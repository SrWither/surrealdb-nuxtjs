<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <nav class="bg-secondary p-3 px-4 m-2 rounded-xl shadow-xl flex justify-between items-center">
    <h1 class="font-bold text-xl">{{ title }}</h1>

    <ul class="flex space-x-3">
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
    </ul>
  </nav>
</template>
