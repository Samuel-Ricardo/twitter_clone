import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string().min(3).nonempty().catch(catchZod),
  username: z.string().min(1).nonempty().catch(catchZod),
  email: z.string().email().catch(catchZod),
  password: z.string().nonempty().catch(catchZod),
});
