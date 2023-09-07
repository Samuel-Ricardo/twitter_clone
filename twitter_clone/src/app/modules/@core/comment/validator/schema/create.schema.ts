import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const createCommentSchema = z
  .object({
    body: z.string(),
    authorId: z.string(),
    postId: z.string(),
  })
  .catch(catchZod);
