import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const selectUserByEmailSchema = z
  .object({
    email: z.string().email('Please enter a valid email').toLowerCase(),
  })
  .catch(catchZod);
