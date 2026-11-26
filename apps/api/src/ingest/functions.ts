import { logger } from '../logger';
import { inngest } from './client';

export const importNotes = inngest.createFunction(
  { id: 'import-notes', triggers: [{ event: 'notes/import.requested' }] },
  async ({ event, step }) => {
    await step.run('log', () => {
      logger.info({ data: event.data }, 'start importu');
    });

    return { ok: true };
  }
);

export const functions = [importNotes];
