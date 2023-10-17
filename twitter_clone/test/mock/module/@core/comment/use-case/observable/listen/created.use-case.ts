import { ListenCommentUseCase } from '@/app/modules/@core/comment/use-case/observable/listen/created.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockListenCommentUseCase = () => mockDeep<ListenCommentUseCase>();
