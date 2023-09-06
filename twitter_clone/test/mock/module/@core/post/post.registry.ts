export const POST_REGISTRY_MOCK = {
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
