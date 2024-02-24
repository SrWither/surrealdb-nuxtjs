<script setup>
const route = useRoute()
const postId = route.params.id
const { data } = await useFetch(`/api/posts/${postId}`)
</script>

<template>
  <div>
    <div class="flex flex-col justify-center items-center space-y-4 pt-2">
      <NuxtLink to="/">
        <Button label="Regresar" />
      </NuxtLink>
      <h1 class="font-bold text-4xl">{{ data.title }}</h1>
      <h4 class="text-lg">{{ data.description }}</h4>
    </div>
    <div class="m-4">
      <p>{{ data.content }}</p>
    </div>
  </div>
</template>
