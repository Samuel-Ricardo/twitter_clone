import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),

  name: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
  hasNotifications: z.boolean(),

  sessionToken: z.string().nullish(),
  bio: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  coverImage: z.string().nullish(),
  profileImage: z.string().nullish(),
});
