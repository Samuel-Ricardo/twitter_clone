import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { UserController } from '@/app/modules/@core/user/controller';
import { DeepMockProxy, mockFn } from 'jest-mock-extended';
import { useSession } from 'next-auth/react';

const a = mockFn<typeof useSession>();

export interface ISimulatedUseCurrentUserHook {
  hook: typeof useCurrentUser;
  session: typeof a;
  controller: DeepMockProxy<UserController>;
}
