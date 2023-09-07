import { FindUserCommentsUseCase } from '@/app/modules/@core/comment/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockDeepFindUserCommentsUseCase = () =>
  mockDeep<FindUserCommentsUseCase>();
