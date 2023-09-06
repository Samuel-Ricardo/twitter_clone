import { PostService } from '@/app/modules/@core/post';
import { mockDeep } from 'jest-mock-extended';

export const mockPostService = () => mockDeep<PostService>();
