import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const createFollowSchema = z
  .object({
    followerId: z.string().catch(catchZod),
    followingId: z.string().catch(catchZod),
  })
  .catch(catchZod);
