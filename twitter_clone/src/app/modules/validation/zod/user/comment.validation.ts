import { z } from 'zod';

export const SubmitCommentSchema = z.object({
  body: z.string(),
});

export type SubmitCommentData = z.infer<typeof SubmitCommentSchema>;
