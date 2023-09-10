import { LikeService } from '@/app/modules/@core/like/service';
import { mockDeep } from 'jest-mock-extended';

export const mockLikeService = () => mockDeep<LikeService>();
