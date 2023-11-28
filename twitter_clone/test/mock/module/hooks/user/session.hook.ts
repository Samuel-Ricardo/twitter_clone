import { mockFn } from 'jest-mock-extended';
import { useSession } from 'next-auth/react';

const mockUseSession = () => mockFn<typeof useSession>();

jest.mock('next-auth/react', () => ({
  useSession: mockUseSession(),
}));

export { useSession, mockUseSession };
