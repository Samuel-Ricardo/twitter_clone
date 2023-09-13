import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const deleteFollowSchema = z
  .object({
    id: z.string().catch(catchZod),
  })
  .catch(catchZod);
