import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const createNotificationSchema = z
  .object({
    userId: z.string(),
    type: z.string(),
    body: z.string(),
    eventId: z.string(),
  })
  .catch(catchZod);
