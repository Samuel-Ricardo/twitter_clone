export const log = ({
  context,
  message,
}: {
  context: string;
  message: string;
}) => console.log(`[${context}] | ${message}`);

export const logger = {
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
