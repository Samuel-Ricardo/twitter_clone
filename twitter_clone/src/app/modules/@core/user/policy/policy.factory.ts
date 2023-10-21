import { USER_POLICY_MODULE } from './policy.module';
import { USER_POLICY_REGISTRY } from './policy.registry';
import { DecryptUserDataPolicy } from './security/decrypt/data.policy';
import { EncryptUserDataPolicy } from './security/encrypt/data.policy';

export const USER_POLICY_FACTORY = {
  SECURITY: {
    ENCRYPT: {
      DATA: () =>
        USER_POLICY_MODULE.get<EncryptUserDataPolicy>(
          USER_POLICY_REGISTRY.SECURITY.ENCRYPT.DATA,
        ),
    },
    DECRYPT: {
      DATA: () =>
        USER_POLICY_MODULE.get<DecryptUserDataPolicy>(
          USER_POLICY_REGISTRY.SECURITY.DECRYPT.DATA,
        ),
    },
  },
};
