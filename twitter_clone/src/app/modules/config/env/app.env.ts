import { config as loadEnvForTests } from 'dotenv';
loadEnvForTests({ path: '.env.local' });

export const ENV = {
  ...process.env,

  API: {
    URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004',
    SOCKET: {
      URL: process.env.NEXT_PUBLIC_API_SOCKET_URL || 'http://localhost:3004',
    },
  },

  JWT: {
    SECRET: process.env.NEXT_PUBLIC_JWT_SECRET || '',
  },

  NEXT: {
    API: {
      URL: process.env.NEXT_PUBLIC_NEXT_API_URL || 'http://localhost:3000',
    },
    AUTH: {
      SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || '',
    },
  },
  SECURITY: {
    CYPHER: {
      KEY: process.env.NEXT_PUBLIC_SECURITY_CYPHER_KEY || '',
      BREAKER: process.env.NEXT_PUBLIC_SECURITY_CYPHER_BREAKER || '',
      AUTH: {
        BREAKER: process.env.NEXT_PUBLIC_SECURITY_CYPHER_AUTH_BREAKER || '',
      },
      IV: {
        BREAKER: process.env.NEXT_PUBLIC_SECURITY_CYPHER_IV_BREAKER || '',
      },
    },
  },
};
