import { FindCommentByIDUseCase } from '@/app/modules/@core/comment/use-case/find_by_id.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockFindCommentByIdUseCase = () =>
  mockDeep<FindCommentByIDUseCase>();
