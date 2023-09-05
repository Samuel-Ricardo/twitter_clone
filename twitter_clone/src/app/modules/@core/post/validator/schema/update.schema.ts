import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const UpdatePostSchema = z
  .object({
    id: z.string().catch(catchZod),
    body: z.string().catch(catchZod),
    image: z.string().optional().catch(catchZod),
  })
  .catch(catchZod);
