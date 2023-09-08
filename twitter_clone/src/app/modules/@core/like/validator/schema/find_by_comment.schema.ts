import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const findCommentLikesSchema = z
  .object({
    likedId: z.string().catch(catchZod),
  })
  .catch(catchZod);
