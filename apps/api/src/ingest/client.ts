import { Inngest } from 'inngest';

export const inngest = new Inngest({
  id: 'parley',
  isDev: process.env.NODE_ENV !== 'production',
});
