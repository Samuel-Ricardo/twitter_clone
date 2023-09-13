import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const getFollowersSchema = z
  .object({
    followingId: z.string().catch(catchZod),
  })
  .catch(catchZod);
