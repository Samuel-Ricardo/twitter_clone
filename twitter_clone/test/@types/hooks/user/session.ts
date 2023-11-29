import { mockFn } from 'jest-mock-extended';
import { useSession } from 'next-auth/react';

const a = mockFn<typeof useSession>();
export type MockedUseSession = typeof a;
