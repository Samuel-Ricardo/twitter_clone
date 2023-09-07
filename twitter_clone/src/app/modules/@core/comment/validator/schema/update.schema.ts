import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const UpdateCommentSchema = z
  .object({
    id: z.string().catch(catchZod),
    body: z.string().catch(catchZod),
  })
  .catch(catchZod);
