export const SOCKET = {
  ANY: '*',
  ERROR: {
    APP: 'error.app',
  },

  START: {
    CONNECTION: 'start.connection',
  },

  CONNECT: 'connect',
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',

  HEALTH_CHECK: 'HEALTH_CHECK',
  HANDSHAKE: 'HANDSHAKE',

  NOTIFICATION: {
    NEW: 'new.notification',
    CREATED: 'notification.created',
    DELETE: 'delete.notification',
    DELETED: 'notification.deleted',
    VISUALIZE: 'visualize.notification',
    VISUALIZED: 'notification.visualized',
    TOGGLE: 'notification.toggle',
  },
};
