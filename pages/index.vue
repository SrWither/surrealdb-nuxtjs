<script setup lang="ts">
const { data } = await useFetch<Post[]>("/api/posts");
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-4 m-4">
      <div v-for="post in data" :key="post.id">
        <Card :title="post.title">
          {{ post.description }}

          <template #footer>
            <NuxtLink :to="`/${post.id}`">
              <Button label="Ver Más" />
            </NuxtLink>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
