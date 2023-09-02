import { catchZod } from '@/app/modules/util';
import { z } from 'zod';

export const UserSchema = z
  .object({
    id: z.string(),

    name: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),

    createdAt: z.string(),
    updatedAt: z.string(),
    hasNotifications: z.boolean(),

    sessionToken: z.string().nullish(),
    bio: z.string().nullish(),
    emailVerified: z.string().nullish(),
    image: z.string().nullish(),
    coverImage: z.string().nullish(),
    profileImage: z.string().nullish(),
  })
  .catch(catchZod);
