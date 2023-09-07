export const COMMENT_FACTORY_MOCK = {
  USE_CASE: {
    CREATE: Symbol.for('mock:module.@core.comment.use-case.create'),
    UPDATE: Symbol.for('mock:module.@core.comment.use-case.update'),
    DELETE: Symbol.for('mock:module.@core.comment.use-case.delete'),
    FIND: {
      BY: {
        POST: Symbol.for('mock:module.@core.comment.use-case.find.by.id'),
        AUTHOR: Symbol.for('mock:module.@core.comment.use-case.find.by.author'),
      },
    },
  },
};
