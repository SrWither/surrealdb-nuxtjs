<template>
  <div v-for="post in data" :key="post.id">
    <h1>{{ post.title }}</h1>
    <h1>{{ post.description }}</h1>
    <h1>{{ post.content }}</h1>
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/posts')
</script>
