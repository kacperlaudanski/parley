import type { Health } from '@parley/shared';
import { Hono } from 'hono';

export const app = new Hono().basePath('/api');

app.get('/health', (c) => {
  const body: Health = { status: 'ok' };
  return c.json(body);
});
