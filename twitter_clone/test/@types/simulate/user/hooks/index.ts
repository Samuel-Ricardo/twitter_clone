import { DeepMockProxy } from 'jest-mock-extended';
import { UserController } from '@/app/modules/@core/user/controller';
import { useUsers } from '@/app/hooks/user/all.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { MockedUseSession } from '@test/@types/hooks/user/session';

export interface ISimulatedUserHooks {
  all: typeof useUsers;
  current: typeof useCurrentUser;
  session: MockedUseSession;
  controller: DeepMockProxy<UserController>;
}
