import { CreatePostUseCase } from '@/app/modules/@core/post';
import { mockDeep } from 'jest-mock-extended';

export const mockCreatePostUseCase = () => mockDeep<CreatePostUseCase>();
