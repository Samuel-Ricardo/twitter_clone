import { UserService } from '@/app/modules/@core/user/service';
import { mockDeep } from 'jest-mock-extended';

export const mockUserService = () => mockDeep<UserService>();
