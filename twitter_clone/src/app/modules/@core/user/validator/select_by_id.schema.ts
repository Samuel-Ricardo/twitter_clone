import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const SelectUserByIdSchema = z
  .object({
    id: z.string().nonempty().catch(catchZod),
  })
  .catch(catchZod);
