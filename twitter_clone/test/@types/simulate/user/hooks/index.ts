import { DeepMockProxy } from 'jest-mock-extended';
import { UserController } from '@/app/modules/@core/user/controller';
import { useUsers } from '@/app/hooks/user/all.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { MockedUseSession } from '@test/@types/hooks/user/session';
import { useUser } from '@/app/hooks/user/one.hook';

export interface ISimulatedUserHooks {
  all: typeof useUsers;
  current: typeof useCurrentUser;
  one: typeof useUser;
  session: MockedUseSession;
  controller: DeepMockProxy<UserController>;
}
