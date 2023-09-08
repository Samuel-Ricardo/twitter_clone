import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const findUserLikesSchema = z
  .object({
    userId: z.string().catch(catchZod),
  })
  .catch(catchZod);
