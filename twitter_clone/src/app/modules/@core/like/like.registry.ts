export const LIKE_REGISTRY = {
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
  },
};
