import { UpdateCommentUseCase } from '@/app/modules/@core/comment/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockUpdateCommentUseCase = () => mockDeep<UpdateCommentUseCase>();
