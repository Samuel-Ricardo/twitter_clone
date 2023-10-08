export const LIKE_REGISTRY = {
  CONTROLLER: Symbol.for('LIKE_CONTROLLER'),
  SERVICE: Symbol.for('LIKE_SERVICE'),
  USE_CASE: {
    CREATE: Symbol.for('LIKE_USE_CASE_CREATE'),
    DELETE: Symbol.for('LIKE_USE_CASE_DELETE'),
    FIND: {
      BY: {
        POST: Symbol.for('LIKE_USE_CASE_FIND_BY_POST'),
        COMMENT: Symbol.for('LIKE_USE_CASE_FIND_BY_COMMENT'),
        USER: Symbol.for('LIKE_USE_CASE_FIND_BY_USER'),
      },
    },
    OBSERVABLE: {
      EMIT: {
        CREATE: Symbol.for('LIKE_OBSERVABLE_EMIT_CREATE'),
        DELETE: Symbol.for('LIKE_OBSERVABLE_EMIT_DELETE'),
      },
      LISTEN: {
        POST: {
          CREATED: Symbol.for('LIKE_OBSERVABLE_LISTEN_POST_CREATED'),
          DELETED: Symbol.for('LIKE_OBSERVABLE_LISTEN_POST_DELETED'),
        },
        COMMENT: {
          CREATED: Symbol.for('LIKE_OBSERVABLE_LISTEN_COMMENT_CREATED'),
          DELETED: Symbol.for('LIKE_OBSERVABLE_LISTEN_COMMENT_DELETED'),
        },
      },
    },
  },
};
