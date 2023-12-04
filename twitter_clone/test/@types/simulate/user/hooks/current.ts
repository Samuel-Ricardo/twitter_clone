import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { UserController } from '@/app/modules/@core/user/controller';
import { MockedUseSession } from '@test/@types/hooks/user/session';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedUseCurrentUserHook {
  hook: typeof useCurrentUser;
  session: MockedUseSession;
  controller: DeepMockProxy<UserController>;
}
