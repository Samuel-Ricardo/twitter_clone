import { UserController } from '@/app/modules/@core/user/controller';
import { mockDeep } from 'jest-mock-extended';

export const mockUserController = () => mockDeep<UserController>();
