import { Container } from 'inversify';
import { USER_POLICY_REGISTRY } from './policy.registry';
import { EncryptUserDataPolicy } from './security/encrypt/data.policy';
import { DecryptUserDataPolicy } from './security/decrypt/data.policy';

export const USER_POLICY_MODULE = new Container({ autoBindInjectable: true });

USER_POLICY_MODULE.bind(USER_POLICY_REGISTRY.SECURITY.ENCRYPT.DATA).to(
  EncryptUserDataPolicy,
);
USER_POLICY_MODULE.bind(USER_POLICY_REGISTRY.SECURITY.DECRYPT.DATA).to(
  DecryptUserDataPolicy,
);
