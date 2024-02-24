<script setup lang="ts">
const { data } = await useFetch<Post[]>("/api/posts");

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(date).toLocaleString('en-US', options)
}
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-4 m-4">
      <div v-for="post in data" :key="post.id">
        <Card :title="post.title">
          {{ post.description }}

          <template #footer>
            <div class="text-purple-500">
              {{formatDate(post.updated_at || new Date())}}
            </div>
            <NuxtLink :to="`/${post.id}`">
              <Button label="Ver Más" />
            </NuxtLink>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
