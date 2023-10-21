import { Container } from 'inversify';
import { USER_POLICY_REGISTRY } from './policy.registry';
import { EncryptUserDataPolicy } from './security/encrypt/user.policy';
import { DecryptUserDataPolicy } from './security/decrypt/user.policy';
import getDecorators from 'inversify-inject-decorators';
import { EncryptCreateUserDataPolicy } from './security/encrypt/create.policy';
import { DecryptCreateUserDataPolicy } from './security/decrypt/create.policy';

export const USER_POLICY_MODULE = new Container({ autoBindInjectable: true });

USER_POLICY_MODULE.bind(USER_POLICY_REGISTRY.SECURITY.ENCRYPT.DATA).to(
  EncryptUserDataPolicy,
);

USER_POLICY_MODULE.bind(USER_POLICY_REGISTRY.SECURITY.ENCRYPT.CREATE).to(
  EncryptCreateUserDataPolicy,
);

USER_POLICY_MODULE.bind(USER_POLICY_REGISTRY.SECURITY.DECRYPT.DATA).to(
  DecryptUserDataPolicy,
);

USER_POLICY_MODULE.bind(USER_POLICY_REGISTRY.SECURITY.DECRYPT.CREATE).to(
  DecryptCreateUserDataPolicy,
);

export const { lazyInject: injectUserPolicy } =
  getDecorators(USER_POLICY_MODULE);
