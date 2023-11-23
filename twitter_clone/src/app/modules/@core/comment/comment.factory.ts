import { COMMENT_MODULE } from './comment.module';
import { COMMENT_REGISTRY } from './comment.registry';
import { CommentController } from './controller/comment.controller';
import { CommentService } from './service/comment.service';
import {
  CreateCommentUseCase,
  UpdateCommentUseCase,
  FindUserCommentsUseCase,
  FindPostCommentsUseCase,
  DeleteCommentUseCase,
} from './use-case';
import { EmitCommentUseCase } from './use-case/observable/emit/created.use-case';
import { ListenCommentUseCase } from './use-case/observable/listen/created.use-case';

export const COMMENT_FACTORY = {
  MAIN: () => COMMENT_MODULE.get<CommentController>(COMMENT_REGISTRY.MAIN),
  CONTROLLER: () =>
    COMMENT_MODULE.get<CommentController>(COMMENT_REGISTRY.CONTROLLER),
  SERVICE: () => COMMENT_MODULE.get<CommentService>(COMMENT_REGISTRY.SERVICE),
  USE_CASE: {
    CREATE: () =>
      COMMENT_MODULE.get<CreateCommentUseCase>(
        COMMENT_REGISTRY.USE_CASE.CREATE,
      ),
    UPDATE: () =>
      COMMENT_MODULE.get<UpdateCommentUseCase>(
        COMMENT_REGISTRY.USE_CASE.UPDATE,
      ),
    DELETE: () =>
      COMMENT_MODULE.get<DeleteCommentUseCase>(
        COMMENT_REGISTRY.USE_CASE.DELETE,
      ),
    FIND: {
      BY: {
        POST: {
          ID: () =>
            COMMENT_MODULE.get<FindPostCommentsUseCase>(
              COMMENT_REGISTRY.USE_CASE.FIND.BY.POST.ID,
            ),
        },
        AUTHOR: {
          ID: () =>
            COMMENT_MODULE.get<FindUserCommentsUseCase>(
              COMMENT_REGISTRY.USE_CASE.FIND.BY.AUTHOR.ID,
            ),
        },
      },
    },
    OBSERVABLE: {
      EMIT: {
        CREATED: () =>
          COMMENT_MODULE.get<EmitCommentUseCase>(
            COMMENT_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED,
          ),
      },
      LISTEN: {
        CREATED: () =>
          COMMENT_MODULE.get<ListenCommentUseCase>(
            COMMENT_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED,
          ),
      },
    },
  },
};
