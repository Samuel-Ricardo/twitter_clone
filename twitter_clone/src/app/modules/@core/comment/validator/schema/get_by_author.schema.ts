import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const GetUserCommentsSchema = z
  .object({
    authorId: z.string().catch(catchZod),
  })
  .catch(catchZod);
