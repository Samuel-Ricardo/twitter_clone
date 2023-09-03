import { SelectUserByIdUseCase } from '@/app/modules/@core/user/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockSelectUserByIdUseCase = () =>
  mockDeep<SelectUserByIdUseCase>();
