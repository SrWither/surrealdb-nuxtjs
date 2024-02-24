import db from '~/server/db/surrealdb';

const login = async (email: string, password: string): Promise<string | null> => {
  try {
    const token = await db.signin({
      namespace: 'blog',
      database: 'blog',
      scope: 'Auth',
      email: email,
      password: password
    })

    return token
  } catch (e) {
    console.error(e)
    return null
  }
}

export default defineEventHandler(async (event) => {
  const body: AuthBody = await readBody(event)
  return login(body.email, body.password);
})
