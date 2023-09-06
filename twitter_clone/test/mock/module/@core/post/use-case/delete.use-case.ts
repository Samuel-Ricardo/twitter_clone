import { DeletePostUseCase } from '@/app/modules/@core/post';
import { mockDeep } from 'jest-mock-extended';

export const mockDeletePostUseCase = () => mockDeep<DeletePostUseCase>();
