export const FOLLOW_REGISTRY = {
  SERVICE: Symbol.for('MODULE:FOLLOW.SERVICE'),
  USE_CASE: {
    CREATE: Symbol.for('MODULE:FOLLOW.USE_CASE.CREATE'),
    DELETE: Symbol.for('MODULE:FOLLOW.USE_CASE.DELETE'),
    GET: {
      FOLLOWERS: Symbol.for('MODULE:FOLLOW.USE_CASE.GET.FOLLOWERS'),
      FOLLOWING: Symbol.for('MODULE:FOLLOW.USE_CASE.GET.FOLLOWING'),
    },
    COUNT: {
      FOLLOWERS: Symbol.for('MODULE:FOLLOW.USE_CASE.COUNT.FOLLOWERS'),
      FOLLOWING: Symbol.for('MODULE:FOLLOW.USE_CASE.COUNT.FOLLOWING'),
    },
  },
};