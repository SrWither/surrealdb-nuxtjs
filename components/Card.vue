<script setup lang="ts">
defineProps<{
  title: string,
}>();
</script>

<template>
  <div class="bg-primary p-4 rounded-lg shadow-lg">
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <div>
      <slot />
    </div>
    <div class="flex justify-between mt-4">
      <slot name="footer"/>
    </div>
  </div>
</template>
