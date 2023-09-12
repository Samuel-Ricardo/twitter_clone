import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const commentSchema = z
  .object({
    id: z.string().catch(catchZod),
    body: z.string().catch(catchZod),
    authorId: z.string().catch(catchZod),
    postId: z.string().catch(catchZod),
    createdAt: z.string().or(z.date().catch(catchZod)),
    updatedAt: z.string().or(z.date().catch(catchZod)),
  })
  .catch(catchZod);
