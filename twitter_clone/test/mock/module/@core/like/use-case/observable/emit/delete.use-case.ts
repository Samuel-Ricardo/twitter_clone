import { EmitLikeDeletedUseCase } from '@/app/modules/@core/like/use-case/observable/emit/delete.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockEmitLikeDeletedUseCase = () =>
  mockDeep<EmitLikeDeletedUseCase>();
