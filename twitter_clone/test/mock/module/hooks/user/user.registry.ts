export const USER_HOOKS_REGISTRY_MOCK = {
  ALL: {
    MOCK: Symbol.for('mock:user.hooks.all'),
    SIMULATE: Symbol.for('simulate:user.hooks.all'),
  },
  SESSION: {
    MOCK: Symbol.for('mock:user.hooks.session'),
    SIMULATE: Symbol.for('simulate:user.hooks.session'),
  },
};
