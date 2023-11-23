export const USER_POLICY_REGISTRY = {
  SECURITY: {
    ENCRYPT: {
      DATA: Symbol.for('user.policy.encrypt.data'),
      CREATE: Symbol.for('user.policy.encrypt.create'),
    },
    DECRYPT: {
      DATA: Symbol.for('user.policy.decrypt.data'),
      CREATE: Symbol.for('user.policy.decrypt.create'),
    },
  },
};
