<template>
  <div>
    <h1>{{ data[0].title }}</h1>
    <h1>{{ data[0].content }}</h1>
    <h1>{{ data[0].description }}</h1>
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/posts')
</script>
