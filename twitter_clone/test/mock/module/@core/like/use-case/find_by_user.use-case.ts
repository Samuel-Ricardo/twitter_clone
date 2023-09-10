import { FinduserLikesUseCase } from '@/app/modules/@core/like/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockFindUserLikesUseCase = () => mockDeep<FinduserLikesUseCase>();
