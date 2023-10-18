import { EmitPostUseCase } from '@/app/modules/@core/post/use-case/observable/emit/created.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockEmitPostUseCase = () => mockDeep<EmitPostUseCase>();
