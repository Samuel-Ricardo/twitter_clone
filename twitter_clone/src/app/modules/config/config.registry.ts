import { CONFIG } from './app.config';

export const ConfigRegistry = {
  ...CONFIG,
  CONFIG: Symbol.for('app.module.config'),
  EVENT: Symbol.for('app.module.event'),
  SOCKET_EVENT: Symbol.for('app.module.socket.event'),
};
