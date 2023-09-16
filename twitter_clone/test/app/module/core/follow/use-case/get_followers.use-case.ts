import { GetFollowersUseCase } from '@/app/modules/@core/follow/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockGetFollowersUseCase = () => mockDeep<GetFollowersUseCase>();
