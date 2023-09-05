import { Container } from 'inversify';
import { USER_MODULE_MOCK } from '../../@core/user/user.module';
import { USER_HOOKS_REGISTRY_MOCK } from './user.registry';
import { mockUseUsers, simulateUseUsers } from './all.hook';

const MODULE = new Container({ autoBindInjectable: true });

export const USER_HOOKS_MODULE_MOCK = Container.merge(MODULE, USER_MODULE_MOCK);

USER_HOOKS_MODULE_MOCK.bind(USER_HOOKS_REGISTRY_MOCK.ALL.MOCK).toDynamicValue(
  mockUseUsers,
);

USER_HOOKS_MODULE_MOCK.bind(
  USER_HOOKS_REGISTRY_MOCK.ALL.SIMULATE,
).toDynamicValue(simulateUseUsers);