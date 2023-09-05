import { useUsers } from '@/app/hooks/user/all.hook';
import { mockFn } from 'jest-mock-extended';

import { MODULES } from '@/app/modules';

jest.mock('../../../../../src/app/modules/@core/user/user.factory.ts');

export { useUsers, MODULES };

export const mockUseUsers = () => mockFn<typeof useUsers>();
