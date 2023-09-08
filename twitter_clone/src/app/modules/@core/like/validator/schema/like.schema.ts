import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const LikeSchema = z
  .object({
    id: z.string().catch(catchZod),
    userId: z.string().catch(catchZod),
    likedId: z.string().catch(catchZod),
    createdAt: z.date().catch(catchZod),
  })
  .catch(catchZod);
