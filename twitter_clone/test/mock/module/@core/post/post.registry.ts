export const POST_REGISTRY_MOCK = {
  SERVICE: {
    MOCK: Symbol.for('mock:modules.post.service'),
    SIMULATE: Symbol.for('simulate:modules.post.service'),
  },
  USE_CASE: {
    CREATE: Symbol.for('mock:modules.post.use-case.create'),
    UPDATE: Symbol.for('mock:modules.post.use-case.update'),
    DELETE: Symbol.for('mock:modules.post.use-case.delete'),
    FIND: {
      ALL: Symbol.for('mock:modules.post.use-case.find.all'),
      BY: {
        ID: Symbol.for('mock:modules.post.use-case.find.by.id'),
        AUTHOR: Symbol.for('mock:modules.post.use-case.find.by.author'),
      },
    },
  },
};
