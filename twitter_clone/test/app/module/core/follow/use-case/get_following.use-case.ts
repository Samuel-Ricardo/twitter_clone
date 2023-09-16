import { GetFollowingUseCase } from '@/app/modules/@core/follow/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockGetFollowingUseCase = () => mockDeep<GetFollowingUseCase>();
