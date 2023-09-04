import { useUsers } from '@/app/hooks/user/all.hook';
import { mockFn } from 'jest-mock-extended';

export const mockUseUsers = () => mockFn<typeof useUsers>();
