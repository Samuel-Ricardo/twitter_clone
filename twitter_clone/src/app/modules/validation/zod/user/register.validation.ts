import { z } from 'zod';
import { UppercaseFirstLetters } from './transformers/name.transformer';

export const userRegisterSchema = z.object({
  email: z
    .string()
    .nonempty("Email can't be empty")
    .email('Please enter a valid email')
    .toLowerCase(),
  name: z
    .string()
    .nonempty("Name can't be empty")
    .min(3, 'Name must be at least 3 characters')
    .transform(UppercaseFirstLetters),
  username: z.string().nonempty("Username can't be empty"),
  password: z
    .string()
    .nonempty("Password can't be empty")
    .min(6, 'Password must be at least 6 characters'), //transform (pass => encript(pass))
});

export type UserRegisterFormData = z.infer<typeof userRegisterSchema>;
