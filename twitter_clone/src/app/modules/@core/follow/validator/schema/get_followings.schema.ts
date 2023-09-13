import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const getFollowingsSchema = z
  .object({
    followerId: z.string().catch(catchZod),
  })
  .catch(catchZod);
