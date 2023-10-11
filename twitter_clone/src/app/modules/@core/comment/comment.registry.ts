export const COMMENT_REGISTRY = {
  MAIN: Symbol.for('MODULE:COMMENT.MAIN'),
  REACTIVE: Symbol.for('MODULE:COMMENT.REACTIVE'),
  CONTROLLER: Symbol.for('MODULE:COMMENT.CONTROLLER'),
  SERVICE: Symbol.for('MODULE:COMMENT.SERVICE'),
  USE_CASE: {
    CREATE: Symbol.for('MODULE:COMMENT.USE_CASE.CREATE'),
    DELETE: Symbol.for('MODULE:COMMENT.USE_CASE.DELETE'),
    UPDATE: Symbol.for('MODULE:COMMENT.USE_CASE.UPDATE'),
    FIND: {
      BY: {
        ID: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.BY.ID'),
        AUTHOR: {
          ID: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.BY.AUTHOR.ID'),
        },
        POST: {
          ID: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.BY.POST.ID'),
        },
      },
    },
    OBSERVABLE: {
      EMIT: { CREATED: Symbol.for('MODULE:COMMENT.OBSERVABLE.EMIT.CREATED') },
      LISTEN: {
        CREATED: Symbol.for('MODULE:COMMENT.OBSERVABLE.LISTEN.CREATED'),
      },
    },
  },
};
