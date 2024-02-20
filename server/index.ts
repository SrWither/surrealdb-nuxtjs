import { Nitro } from 'nitropack'
import { initDB } from './surrealdb';

export default async (_nitroApp: Nitro) => {
  initDB();
}
