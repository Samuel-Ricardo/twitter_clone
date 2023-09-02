export const ENV = {
  ...process.env,

  API: {
    URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004',
  },

  NEXT: {
    API: {
      URL: process.env.NEXT_PUBLIC_NEXT_API_URL || 'http://localhost:3000',
    },
  },
};
