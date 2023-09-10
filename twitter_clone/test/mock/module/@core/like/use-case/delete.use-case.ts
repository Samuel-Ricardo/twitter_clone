import { DeleteLikeUseCase } from '@/app/modules/@core/like/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockDeleteLikeUseCase = () => mockDeep<DeleteLikeUseCase>();
