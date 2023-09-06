import { FindPostByIdUseCase } from '@/app/modules/@core/post';
import { mockDeep } from 'jest-mock-extended';

export const mockFindPostById = () => mockDeep<FindPostByIdUseCase>();
