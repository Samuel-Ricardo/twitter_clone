import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const findPostLikesSchema = z
  .object({
    likedId: z.string().catch(catchZod),
  })
  .catch(catchZod);
