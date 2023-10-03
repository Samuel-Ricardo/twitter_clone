import { z } from 'zod';

export const SubmitCommentSchema = z.object({
  body: z
    .string()
    .nonempty("Comment can't be empty")
    .trim()
    .min(1, { message: "Comment can't be empty" }),
});

export type SubmitCommentData = z.infer<typeof SubmitCommentSchema>;
