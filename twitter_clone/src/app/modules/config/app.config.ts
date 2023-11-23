import { ENV } from './env/app.env';
import { EVENT } from './event/event.config';
import { CYPHER_CONFIG } from './security/cypher.config';

export const CONFIG = {
  ...ENV,
  EVENT,
  SECURITY: {
    CYPHER: { ...CYPHER_CONFIG },
  },
};
