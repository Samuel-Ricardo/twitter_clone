import { z } from 'zod';
import { maxFileSize } from './rules/file/size.rule';
import { toBase64 } from './transformers/file/toBase64.transformer';
import { UppercaseFirstLetters } from './transformers/name.transformer';
import { File } from '@/app/@types/file';
import { mustBeValidFile } from './rules/file/type.rule';

export const userEditSchema = z.object({
  profileImage: z
    .string()
    .or(
      z.custom<File>(mustBeValidFile, {
        message: 'Avatar must be an image file',
      }),
    )
    .nullish()
    .refine(maxFileSize(1 * 1024 * 1024), 'File size must be less than 1MB')
    .transform(toBase64),
  coverImage: z
    .custom<File>(mustBeValidFile, {
      message: 'Cover image must be an image file',
    })
    .or(z.string())
    .nullish()
    .refine(maxFileSize(1 * 1024 * 1024), 'File size must be less than 1MB')
    .transform(toBase64),
  name: z
    .string()
    .nonempty("Name can't be empty")
    .min(3, 'Name must be at least 3 characters')
    .transform(UppercaseFirstLetters),
  username: z.string().nonempty("Username can't be empty"),
  bio: z.string().nullish(),
});

export type UserEditFormData = z.infer<typeof userEditSchema>;
