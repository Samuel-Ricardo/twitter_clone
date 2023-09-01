import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  ...process.env,

  API: {
    URL: process.env.API_URL || 'http://localhost:6000',
  },

  NEXT: {
    API: {
      URL: process.env.NEXT_API_URL || 'http://localhost:3000',
    },
  },
};
