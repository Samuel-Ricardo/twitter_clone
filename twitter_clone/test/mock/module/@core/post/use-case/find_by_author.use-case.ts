import { FindPostsByAuthorUseCase } from '@/app/modules/@core/post';
import { mockDeep } from 'jest-mock-extended';

export const mockFindPostByAuthorUseCase = () =>
  mockDeep<FindPostsByAuthorUseCase>();
