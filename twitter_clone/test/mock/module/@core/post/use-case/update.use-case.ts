import { UpdatePostUseCase } from '@/app/modules/@core/post';
import { mockDeep } from 'jest-mock-extended';

export const mockUpdatePostUseCase = () => mockDeep<UpdatePostUseCase>();
