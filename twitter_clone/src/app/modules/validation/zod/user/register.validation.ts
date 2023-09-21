import { z } from 'zod';

export const userRegisterSchema = z.object({
  email: z
    .string()
    .nonempty("Email can't be empty")
    .email('Please enter a valid email')
    .toLowerCase(),
  name: z
    .string()
    .nonempty("Name can't be empty")
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' '),
    ),
  username: z.string().nonempty("Username can't be empty"),
  password: z.string().nonempty("Password can't be empty").min(6),
});

export type UserRegisterFormData = z.infer<typeof userRegisterSchema>;
