import { z } from 'zod';

export const catchZod = (zod: {
  error: z.ZodError<any>;
  input: any | undefined;
}) => {
  throw new Error(zod.error.message);
};
