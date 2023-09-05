import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const CreatePostSchema = z.object({
  authorId: z.string().nonempty().catch(catchZod),
  body: z.string().nonempty().catch(catchZod),
  image: z.string().optional().nullish().catch(catchZod),
});
