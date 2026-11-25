import { serve } from '@hono/node-server';

import { app } from './app';
import { logger } from './logger';

const port = Number(process.env.PORT ?? 3000);

serve({ fetch: app.fetch, port }, (info) => {
  logger.info(`API działa na http://localhost:${String(info.port)}`);
});
