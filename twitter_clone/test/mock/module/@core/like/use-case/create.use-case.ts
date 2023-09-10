import { CreateLikeUseCase } from '@/app/modules/@core/like/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockCreateLikeUseCase = () => mockDeep<CreateLikeUseCase>();
