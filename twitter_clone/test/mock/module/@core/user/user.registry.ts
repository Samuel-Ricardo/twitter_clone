export const USER_REGISTRY_MOCK = {
  CONTROLLER: {
    MOCK: Symbol.for('mock:module.user.controller'),
    SIMULATE: Symbol.for('mock:module.user.controller.simulated'),
  },
  SERVICE: {
    MOCK: Symbol.for('mock:module.user.service'),
    SIMULATE: Symbol.for('mock:module.user.service.simulated'),
  },
  USE_CASE: {
    CREATE: Symbol.for('mock:module.user.use-case.create'),
    UPDATE: Symbol.for('mock:module.user.use-case.update'),
    DELETE: Symbol.for('mock:module.user.use-case.delete'),
    GET: {
      ALL: Symbol.for('mock:module.user.use-case.list.all'),
      BY: {
        ID: Symbol.for('mock:module.user.use-case.select_by_id'),
      },
    },
  },
};
