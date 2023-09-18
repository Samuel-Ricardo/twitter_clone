import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const DeleteNotificationSchema = z
  .object({
    id: z.string(),
  })
  .catch(catchZod);
