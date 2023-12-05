import { DeepMockProxy } from 'jest-mock-extended';
import { UserController } from '@/app/modules/@core/user/controller';
import { useUsers } from '@/app/hooks/user/all.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { MockedUseSession } from '@test/@types/hooks/user/session';
import { useUser } from '@/app/hooks/user/one.hook';
import { useCreateUser } from '@/app/hooks/user/mutate/create.hook';
import { useMutation } from '@tanstack/react-query';

export interface ISimulatedUserHooks {
  all: typeof useUsers;
  current: typeof useCurrentUser;
  one: typeof useUser;
  session: MockedUseSession;
  mutation: jest.MockedFn<typeof useMutation>;
  mutate: {
    create: typeof useCreateUser;
  };
  controller: DeepMockProxy<UserController>;
}
