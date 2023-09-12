import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const PostSchema = z
  .object({
    id: z.string().catch(catchZod),
    body: z.string().catch(catchZod),
    authorId: z.string().catch(catchZod),
    createdAt: z.string().or(z.date()).catch(catchZod),
    updatedAt: z.string().or(z.date()).catch(catchZod),
    image: z.string().optional().nullish().catch(catchZod),
  })
  .catch(catchZod);
