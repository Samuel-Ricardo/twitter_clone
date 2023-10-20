import { ENV } from '../env/app.env';

export const CYPHER_CONFIG = {
  IV: ENV.SECURITY.CYPHER.IV,
  KEY: ENV.SECURITY.CYPHER.KEY,
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
