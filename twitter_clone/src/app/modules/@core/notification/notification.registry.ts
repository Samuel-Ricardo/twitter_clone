export const NOTIFICATION_REGISTRY = {
  SERVICE: Symbol.for('module:notification.service'),
  USE_CASE: {
    CREATE: Symbol.for('module:notification.use-case.create'),
    DELETE: Symbol.for('module:notification.use-case.delete'),
    VIEW: Symbol.for('module:notification.use-case.view'),
    FIND: {
      BY: { USER: Symbol.for('module:notification.use-case.find.by.user') },
    },
  },
};
