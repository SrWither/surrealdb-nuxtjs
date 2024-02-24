<script setup lang="ts">
defineProps<{
  label: string
}>();
</script>

<template>
  <button class="bg-secondary px-4 py-2 rounded-xl shadow-lg hover:bg-accent active:bg-background transition-colors">
    {{ label }}
  </button>
</template>
