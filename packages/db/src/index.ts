import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';

export const createDb = (url: string): ReturnType<typeof drizzle<typeof schema>> => {
  const client = postgres(url, { prepare: false });

  return drizzle(client, { schema });
}
