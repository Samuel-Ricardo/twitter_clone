import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const CreateLikeSchema = z
  .object({
    userId: z.string(),
    likedId: z.string(),
  })
  .catch(catchZod);
