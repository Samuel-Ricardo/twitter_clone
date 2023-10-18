import { EmitFollowUseCase } from '@/app/modules/@core/follow/use-case/observable/emit/created.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockEmitFollowUseCase = () => mockDeep<EmitFollowUseCase>();
