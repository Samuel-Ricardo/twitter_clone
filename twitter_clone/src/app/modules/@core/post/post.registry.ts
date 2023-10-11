export const POST_REGISTRY = {
  MAIN: Symbol.for('post.main'),
  CONTROLLER: Symbol.for('post.controller'),
  SERVICE: Symbol.for('post.service'),
  USE_CASE: {
    CREATE: Symbol.for('post.use-case.create'),
    DELETE: Symbol.for('post.use-case.delete'),
    UPDATE: Symbol.for('post.use-case.update'),
    FIND: {
      ALL: Symbol.for('post.use-case.find.all'),
      BY: {
        AUTHOR: {
          ID: Symbol.for('post.use-case.find.by.author.id'),
        },
        ID: Symbol.for('post.use-case.find.by.id'),
      },
    },
    OBSERVABLE: {
      EMIT: {
        CREATED: Symbol.for('post.use-case.observable.emit.created'),
      },
      LISTEN: {
        CREATED: Symbol.for('post.use-case.observable.listen.created'),
      },
    },
  },
};
