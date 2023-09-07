export const COMMENT_REGISTRY = {
  USE_CASE: {
    CREATE: Symbol.for('MODULE:COMMENT.USE_CASE.CREATE'),
    DELETE: Symbol.for('MODULE:COMMENT.USE_CASE.DELETE'),
    UPDATE: Symbol.for('MODULE:COMMENT.USE_CASE.UPDATE'),
    FIND: {
      ALL: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.ALL'),
      BY: {
        AUTHOR: {
          ID: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.BY.AUTHOR.ID'),
        },
        ID: Symbol.for('MODULE:COMMENT.USE_CASE.FIND.BY.ID'),
      },
    },
  },
};
