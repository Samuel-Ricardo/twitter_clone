import { CommentService } from '@/app/modules/@core/comment/service/comment.service';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  FindPostCommentsUseCase,
  FindUserCommentsUseCase,
  UpdateCommentUseCase,
} from '@/app/modules/@core/comment/use-case';
import { FindCommentByIDUseCase } from '@/app/modules/@core/comment/use-case/find_by_id.use-case';
import { EmitCommentUseCase } from '@/app/modules/@core/comment/use-case/observable/emit/created.use-case';
import { ListenCommentUseCase } from '@/app/modules/@core/comment/use-case/observable/listen/created.use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedCommentService {
  service: CommentService;
  use_case: {
    create: DeepMockProxy<CreateCommentUseCase>;
    update: DeepMockProxy<UpdateCommentUseCase>;
    deleteComment: DeepMockProxy<DeleteCommentUseCase>;
    find: {
      by: {
        id: DeepMockProxy<FindCommentByIDUseCase>;
        post: DeepMockProxy<FindPostCommentsUseCase>;
        author: DeepMockProxy<FindUserCommentsUseCase>;
      };
    };
    observable: {
      emit: {
        created: DeepMockProxy<EmitCommentUseCase>;
      };
      Listen: {
        created: DeepMockProxy<ListenCommentUseCase>;
      };
    };
  };
}
