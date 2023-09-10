export const LIKE_REGISTRY_MOCK = {
  SERVICE: {
    MOCK: Symbol.for('mock:like.service'),
    SIMULATE: Symbol.for('simulate:like.service'),
  },
  USE_CASE: {
    CREATE: Symbol.for('mock:like.use-case.create'),
    DELETE: Symbol.for('mock:like.use-case.delete'),
    FIND: {
      BY: {
        POST: Symbol.for('mock:like.use-case.find.by.post'),
        USER: Symbol.for('mock:like.use-case.find.by.user'),
        COMMENT: Symbol.for('mock:like.use-case.find.by.comment'),
      },
    },
  },
};
