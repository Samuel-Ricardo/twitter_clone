import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { mockFn } from 'jest-mock-extended';

export interface IUseCurrentUserConfig {
  displayLogin?: boolean;
}

const a = mockFn<typeof useCurrentUser>();
export type UseCurrentUserMock = typeof a;
