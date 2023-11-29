import { DeepMockProxy } from 'jest-mock-extended';
import { USER_HOOKS_MODULE_MOCK } from './user.module';
import { useUsers } from '@/app/hooks/user/all.hook';
import { USER_HOOKS_REGISTRY_MOCK } from './user.registry';
import { ISimulatedUseUsersHook } from '@test/@types/simulate/user/hooks/all';
import { MockedUseSession } from '@test/@types/hooks/user/session';
import { useCurrentUser } from './current.hook';
import { UseCurrentUserMock } from '@test/@types/hooks/user/current';

export const USER_HOOKS_FACTORY_MOCK = {
  ALL: {
    MOCK: () =>
      USER_HOOKS_MODULE_MOCK.get<DeepMockProxy<typeof useUsers>>(
        USER_HOOKS_REGISTRY_MOCK.ALL.MOCK,
      ),
    SIMULATE: () =>
      USER_HOOKS_MODULE_MOCK.get<ISimulatedUseUsersHook>(
        USER_HOOKS_REGISTRY_MOCK.ALL.SIMULATE,
      ),
  },
  SESSION: {
    MOCK: () =>
      USER_HOOKS_MODULE_MOCK.get<MockedUseSession>(
        USER_HOOKS_REGISTRY_MOCK.SESSION.MOCK,
      ),
  },
  CURRENT: {
    MOCK: () =>
      USER_HOOKS_MODULE_MOCK.get<UseCurrentUserMock>(
        USER_HOOKS_REGISTRY_MOCK.CURRENT.MOCK,
      ),
    SIMULATE: () =>
      USER_HOOKS_MODULE_MOCK.get<ISimulatedUseUsersHook>(
        USER_HOOKS_REGISTRY_MOCK.CURRENT.SIMULATE,
      ),
  },
};
