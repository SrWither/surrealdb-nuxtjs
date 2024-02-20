import db from '~/server/db/surrealdb';

async function getPosts() {
  let posts = await db.select("Posts");
  // console.log(posts)
  return posts;
}

export default defineEventHandler(async (event) => {
  return getPosts();
})
