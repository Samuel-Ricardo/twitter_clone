import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const SetVisualizedSchema = z
  .object({
    id: z.string().catch(catchZod),
    visualizedAt: z.date().catch(catchZod),
  })
  .catch(catchZod);
