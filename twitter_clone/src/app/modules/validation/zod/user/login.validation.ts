import { z } from 'zod';

export const userLoginSchema = z.object({
  email: z
    .string()
    .nonempty("Email can't be empty")
    .email('Please enter a valid email')
    .toLowerCase(),
  password: z
    .string()
    .nonempty("Password can't be empty")
    .min(6, 'Password must be at least 6 characters'),
});

export type UserLoginFormData = z.infer<typeof userLoginSchema>;
