<template>
  <div>
    <h1>Posts: </h1>
    <div v-for="post in data" :key="post.id">
      <NuxtLink :to="`/${post.id}`">{{ post.id }}</NuxtLink>
      <h1>{{ post.title }}</h1>
      <h1>{{ post.description }}</h1>
      <h1>{{ post.content }}</h1>
    </div>
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/posts')
</script>
