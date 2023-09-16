import { CountFollowersUseCase } from '@/app/modules/@core/follow/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockCountFollowersUseCase = () =>
  mockDeep<CountFollowersUseCase>();
