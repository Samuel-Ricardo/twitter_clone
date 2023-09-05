import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const FindPostByIdSchema = z.object({
  id: z.string().nonempty().catch(catchZod),
});
