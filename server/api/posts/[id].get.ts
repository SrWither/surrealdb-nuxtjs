import db from '~/server/db/surrealdb';

async function getPost(id: string) {
  let [post] = await db.select(id);
  return post;
}

export default defineEventHandler(async (event) => {
  const postId = event.context.params?.id || ''
  return getPost(postId);
})
