import { CountFollowingUseCase } from '@/app/modules/@core/follow/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockCountFollowingUseCase = () =>
  mockDeep<CountFollowingUseCase>();
