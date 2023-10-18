import { EmitUnfollowUseCase } from '@/app/modules/@core/follow/use-case/observable/emit/deleted.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockEmitUnfollowUseCase = () => mockDeep<EmitUnfollowUseCase>();
