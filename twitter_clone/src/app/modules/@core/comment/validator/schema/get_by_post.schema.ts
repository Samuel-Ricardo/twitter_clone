import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const findCommentByPostSchema = z
  .object({
    postId: z.string().catch(catchZod),
  })
  .catch(catchZod);
