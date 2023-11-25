import { CONFIG } from '../config/app.config';

export const log = ({
  context,
  message,
}: {
  context: string;
  message: string;
}) => console.log(`[${context}] | ${message}`);

let logger = {
  error: ({
    context,
    message,
    error,
  }: {
    context: string;
    message: string;
    error?: Error;
  }) => console.error(`[${Date.now()}] | [${context}] | ${message} `, error),
  info: (
    { context, message }: { context: string; message: string },
    ...data: any[]
  ) => console.log(`[${Date.now()}] | [${context}] | ${message}`, ...data),
  warn: ({ context, message }: { context: string; message: string }) =>
    console.warn(`[${Date.now()}] | [${context}] | ${message}`),
};

const disable = {
  error: ({
    context,
    message,
    error,
  }: {
    context: string;
    message: string;
    error?: Error;
  }) => {},
  info: (
    { context, message }: { context: string; message: string },
    ...data: any[]
  ) => {},
  warn: ({ context, message }: { context: string; message: string }) => {},
};

if (CONFIG.NODE_ENV !== 'development' && CONFIG.NODE_ENV !== 'test')
  logger = disable;

export { logger };
