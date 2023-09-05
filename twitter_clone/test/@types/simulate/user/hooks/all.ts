import { useUsers } from '@/app/hooks/user/all.hook';
import { UserController } from '@/app/modules/@core/user/controller';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedUseUsersHook {
  hook: typeof useUsers;
  controller: DeepMockProxy<UserController>;
}
