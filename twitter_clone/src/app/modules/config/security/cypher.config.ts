import { ENV } from '../env/app.env';

console.log({ KKKKEEEEYYYY: ENV.SECURITY.CYPHER.KEY });

export const CYPHER_CONFIG = {
  KEY: ENV.SECURITY.CYPHER.KEY,
  BREAKER: ENV.SECURITY.CYPHER.BREAKER,
  AUTH: {
    BREAKER: ENV.SECURITY.CYPHER.AUTH.BREAKER,
  },
  IV: {
    BREAKER: ENV.SECURITY.CYPHER.IV.BREAKER,
  },
  ALGORITHMS: {
    AES: {
      128: {
        GCM: 'aes-128-gcm',
        CBC: 'aes-128-cbc',
      },
      256: {
        GCM: 'aes-256-gcm',
        CBC: 'aes-256-cbc',
      },
    },
  },
};
