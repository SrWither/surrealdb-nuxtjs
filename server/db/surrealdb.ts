import { Surreal } from 'surrealdb.js'

const db = new Surreal()

export const initDB = async () => {
  await db.connect('http://192.168.60.230:7435/rpc', {
    namespace: 'blog',
    database: 'blog'
  })
}

export default db
