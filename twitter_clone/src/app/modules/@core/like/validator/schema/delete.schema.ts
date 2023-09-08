import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const DeleteLikeSchema = z
  .object({
    id: z.string().catch(catchZod),
  })
  .catch(catchZod);
