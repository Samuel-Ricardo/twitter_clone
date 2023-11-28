import { CalledWithMock, DeepMockProxy } from 'jest-mock-extended';
import { USER_HOOKS_MODULE_MOCK } from './user.module';
import { useUsers } from '@/app/hooks/user/all.hook';
import { USER_HOOKS_REGISTRY_MOCK } from './user.registry';
import { ISimulatedUseUsersHook } from '@test/@types/simulate/user/hooks/all';
import { useSession } from 'next-auth/react';
import { MockedUseSession } from './session.hook';

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
};
