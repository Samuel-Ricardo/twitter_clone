import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const getNotificationByUserSchema = z
  .object({
    userId: z.string(),
  })
  .catch(catchZod);
