import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { mockFn } from 'jest-mock-extended';

export const mockUseCurrentUser = () => mockFn<typeof useCurrentUser>();
