import { Container } from 'inversify';
import { USER_MODULE_MOCK } from '../../@core/user/user.module';
import { USER_HOOKS_REGISTRY_MOCK } from './user.registry';
import { mockUseUsers, simulateUseUsers } from './all.hook';
import { mockUseSession } from './session.hook';
import { mockUseCurrentUser, simulateUseCurrentUser } from './current.hook';
import { simulateUserHooks } from './user.hook';

const MODULE = new Container({ autoBindInjectable: true });

export const USER_HOOKS_MODULE_MOCK = Container.merge(MODULE, USER_MODULE_MOCK);

USER_HOOKS_MODULE_MOCK.bind(USER_HOOKS_REGISTRY_MOCK.ALL.MOCK).toDynamicValue(
  mockUseUsers,
);

USER_HOOKS_MODULE_MOCK.bind(
  USER_HOOKS_REGISTRY_MOCK.ALL.SIMULATE,
).toDynamicValue(simulateUseUsers);

USER_HOOKS_MODULE_MOCK.bind(
  USER_HOOKS_REGISTRY_MOCK.SESSION.MOCK,
).toDynamicValue(mockUseSession);

USER_HOOKS_MODULE_MOCK.bind(
  USER_HOOKS_REGISTRY_MOCK.CURRENT.MOCK,
).toDynamicValue(mockUseCurrentUser);

USER_HOOKS_MODULE_MOCK.bind(
  USER_HOOKS_REGISTRY_MOCK.CURRENT.SIMULATE,
).toDynamicValue(simulateUseCurrentUser);

USER_HOOKS_MODULE_MOCK.bind(USER_HOOKS_REGISTRY_MOCK.SIMULATE).toDynamicValue(
  simulateUserHooks,
);
