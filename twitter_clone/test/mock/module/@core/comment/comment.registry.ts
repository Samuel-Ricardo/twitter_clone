export const COMMENT_REGISTRY_MOCK = {
  CONTROLLER: {
    MOCK: Symbol.for('mock:module.comment.controller'),
    SIMULATE: Symbol.for('mock:module.comment.controller.simulated'),
  },
  SERVICE: {
    MOCK: Symbol.for('mock:module.comment.service'),
    SIMULATE: Symbol.for('mock:module.comment.service.simulated'),
  },
  USE_CASE: {
    CREATE: Symbol.for('mock:module.comment.use-case.create'),
    UPDATE: Symbol.for('mock:module.comment.use-case.update'),
    DELETE: Symbol.for('mock:module.comment.use-case.delete'),
    FIND: {
      BY: {
        ID: Symbol.for('mock:module.comment.use-case.find.by.id'),
        POST: Symbol.for('mock:module.comment.use-case.find.by.post'),
        AUTHOR: Symbol.for('mock:module.comment.use-case.find.by.author'),
      },
    },
    OBSERVABLE: {
      EMIT: {
        CREATED: Symbol.for(
          'mock:module.comment.use-case.observable.emit.created',
        ),
      },
      LISTEN: {
        CREATED: Symbol.for(
          'mock:module.comment.use-case.observable.listen.created',
        ),
      },
    },
  },
};
