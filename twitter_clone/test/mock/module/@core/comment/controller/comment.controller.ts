import { CommentController } from '@/app/modules/@core/comment/controller/comment.controller';
import { mockDeep } from 'jest-mock-extended';

export const mockCommentController = () => mockDeep<CommentController>();
