import type { Health } from '@parley/shared';
import { Hono } from 'hono';
import { serve } from 'inngest/hono';

import { inngest } from './ingest/client';
import { functions } from './ingest/functions';

export const app = new Hono().basePath('/api');

app.get('/health', (c) => {
  const body: Health = { status: 'ok' };

  return c.json(body);
});

app.on(['GET', 'POST', 'PUT'], '/inngest', serve({ client: inngest, functions }));
