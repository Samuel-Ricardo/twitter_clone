import { CommentService } from '@/app/modules/@core/comment/service/comment.service';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  FindPostCommentsUseCase,
  FindUserCommentsUseCase,
  UpdateCommentUseCase,
} from '@/app/modules/@core/comment/use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedCommentService {
  service: CommentService;
  use_case: {
    create: DeepMockProxy<CreateCommentUseCase>;
    update: DeepMockProxy<UpdateCommentUseCase>;
    deleteComment: DeepMockProxy<DeleteCommentUseCase>;
    find: {
      by: {
        post: DeepMockProxy<FindPostCommentsUseCase>;
        author: DeepMockProxy<FindUserCommentsUseCase>;
      };
    };
  };
}
