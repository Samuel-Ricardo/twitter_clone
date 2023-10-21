import { USER_POLICY_REGISTRY } from './policy/policy.registry';

export const UserRegistry = {
  MAIN: Symbol.for('user.module.main'),
  CONTROLLER: Symbol.for('user.controller'),
  SERVICE: Symbol.for('user.service'),
  USE_CASE: {
    CREATE: Symbol.for('user.use-case.create'),
    UPDATE: Symbol.for('user.use-case.update'),
    DELETE: Symbol.for('user.use-case.delete'),
    GET: {
      ALL: Symbol.for('user.use-case.get.all'),
      BY: {
        ID: Symbol.for('user.use-case.get.by.id'),
        CREDENTIALS: Symbol.for('user.use-case.get.by.credentials'),
        EMAIL: Symbol.for('user.use-case.get.by.email'),
      },
    },
  },
  POLICY: USER_POLICY_REGISTRY,
};
