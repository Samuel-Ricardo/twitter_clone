import { PostController } from '@/app/modules/@core/post';
import { mockDeep } from 'jest-mock-extended';

export const mockPostController = () => mockDeep<PostController>();
