export const NOTIFICATION_TAGS = {
  SCOPE: {
    TAG: Symbol.for('tag:notification.scope'),
    MAIN: Symbol.for('tag:notification.scope.main'),
    REACTIVE: Symbol.for('tag:notification.scope.reactive'),
  },
};

const { SCOPE } = NOTIFICATION_TAGS;

export { SCOPE };
