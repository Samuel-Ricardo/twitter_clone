export const UserRegistry = {
  USE_CASE: {
    CREATE: Symbol.for('user.use-case.create'),
    UPDATE: Symbol.for('user.use-case.update'),
    DELETE: Symbol.for('user.use-case.delete'),
    GET: {
      ALL: Symbol.for('user.use-case.get.all'),
      BY: {
        ID: Symbol.for('user.use-case.get.by.id'),
      },
    },
  },
};