export const COMMENT_REGISTRY = {
  CONTROLLER: Symbol.for('MODULE:COMMENT.CONTROLLER'),
  SERVICE: Symbol.for('MODULE:COMMENT.SERVICE'),
  USE_CASE: {
    CREATE: Symbol.for('MODULE:COMMENT.USE_CASE.CREATE'),
    DELETE: Symbol.for('MODULE:COMMENT.USE_CASE.DELETE'),
    UPDATE: Symbol.for('MODULE:COMMENT.USE_CASE.UPDATE'),
    FIND: {
      BY: {
        AUTHOR: {
          ID: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.BY.AUTHOR.ID'),
        },
        POST: {
          ID: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.BY.POST.ID'),
        },
      },
    },
  },
};
