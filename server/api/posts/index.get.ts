import db from '~/server/db/surrealdb';

const getPosts = async () => {
  let posts = await db.select("Posts");
  return posts;
}

export default defineEventHandler(async (_event) => {
  return getPosts();
})
