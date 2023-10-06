import { EmitLikeCreatedUseCase } from '@/app/modules/@core/like/use-case/observable/emit/create.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockEmitLikeCreatedUseCase = () =>
  mockDeep<EmitLikeCreatedUseCase>();
