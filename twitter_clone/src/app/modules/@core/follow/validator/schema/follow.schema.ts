import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const followSchema = z
  .object({
    id: z.string().catch(catchZod),
    followerId: z.string().catch(catchZod),
    followingId: z.string().catch(catchZod),
    createdAt: z.date().catch(catchZod),
  })
  .catch(catchZod);
