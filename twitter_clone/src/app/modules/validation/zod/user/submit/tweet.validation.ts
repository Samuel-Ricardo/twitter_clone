import { z } from 'zod';
import { maxFileSize } from '../rules/file/size.rule';
import { toBase64 } from '../transformers/file/toBase64.transformer';
import { File } from '../../../../../@types/file';

export const SubmitTweetSchema = z.object({
  body: z
    .string()
    .nonempty("Can't post an empty tweet")
    .trim()
    .min(1, { message: "Tweet can't be empty" }),
  image: z
    .string()
    .or(z.instanceof(File, { message: 'Must be an image file' }))
    .nullish()
    .refine(maxFileSize(5 * 1024 * 1024), 'File size must be less than 5MB')
    .transform(toBase64),
});

export type SubmitTweetData = z.infer<typeof SubmitTweetSchema>;
