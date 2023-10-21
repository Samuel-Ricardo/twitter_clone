export const USER_POLICY_REGISTRY = {
  SECURITY: {
    ENCRYPT: {
      DATA: Symbol.for('user.policy.encrypt.data'),
    },
    DECRYPT: {
      DATA: Symbol.for('user.policy.decrypt.data'),
    },
  },
};
