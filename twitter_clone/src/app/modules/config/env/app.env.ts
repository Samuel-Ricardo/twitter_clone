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
      IV: process.env.NEXT_PUBLIC_SECURITY_CYPHER_IV || '',
      KEY: process.env.NEXT_PUBLIC_SECURITY_CYPHER_KEY || '',
    },
  },
};
