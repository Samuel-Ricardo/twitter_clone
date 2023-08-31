import { z } from 'zod';

export const catchZod = (zod: {
  error: z.ZodError<any>;
  input: any | undefined;
}) => {
  throw new Error(JSON.parse(zod.error.message));
};
