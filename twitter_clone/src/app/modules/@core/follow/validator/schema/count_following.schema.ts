import { catchZod } from '@/app/modules/util/zod';
import { z } from 'zod';

export const countFollowingSchema = z
  .object({
    followerId: z.string().catch(catchZod),
  })
  .catch(catchZod);
