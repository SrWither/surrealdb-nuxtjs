<template>
  <NuxtLink to="/">Back</NuxtLink>
  <h1>Post: </h1>
  <h1>{{ data.id }}</h1>
  <h1>{{ data.title }}</h1>
  <h1>{{ data.description }}</h1>
  <h1>{{ data.content }}</h1>
</template>
<script setup>
const route = useRoute()
const postId = route.params.id
const { data } = await useFetch(`/api/posts/${postId}`)
</script>
