export const POST_REGISTRY = {
  USE_CASE: {
    CREATE: Symbol.for('post.use-case.create'),
    DELETE: Symbol.for('post.use-case.delete'),
    UPDATE: Symbol.for('post.use-case.update'),
    FIND: {
      ALL: Symbol.for('post.use-case.find.all'),
      BY: {
        AUTHOR: Symbol.for('post.use-case.find.by.author.id'),
        ID: Symbol.for('post.use-case.find.by.id'),
      },
    },
  },
};
