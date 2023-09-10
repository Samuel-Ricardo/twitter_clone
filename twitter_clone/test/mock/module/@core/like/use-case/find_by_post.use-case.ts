import { FindPostLikesUseCase } from '@/app/modules/@core/like/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockFindPostLikesUseCase = () => mockDeep<FindPostLikesUseCase>();
