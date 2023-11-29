export const USER_HOOKS_REGISTRY_MOCK = {
  MOCK: Symbol.for('mock:user.hooks'),
  SIMULATE: Symbol.for('simulate:user.hooks'),
  ALL: {
    MOCK: Symbol.for('mock:user.hooks.all'),
    SIMULATE: Symbol.for('simulate:user.hooks.all'),
  },
  SESSION: {
    MOCK: Symbol.for('mock:user.hooks.session'),
    SIMULATE: Symbol.for('simulate:user.hooks.session'),
  },
  CURRENT: {
    MOCK: Symbol.for('mock:user.hooks.current'),
    SIMULATE: Symbol.for('simulate:user.hooks.current'),
  },
};
