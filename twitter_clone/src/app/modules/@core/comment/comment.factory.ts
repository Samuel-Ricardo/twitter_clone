import { COMMENT_MODULE } from './comment.module';
import { COMMENT_REGISTRY } from './comment.registry';
import {
  CreateCommentUseCase,
  UpdateCommentUseCase,
  FindUserCommentsUseCase,
  FindPostCommentsUseCase,
  DeleteCommentUseCase,
} from './use-case';

export const COMMENT_FACTORY = {
  USE_CASE: {
    CREATE: COMMENT_MODULE.get<CreateCommentUseCase>(
      COMMENT_REGISTRY.USE_CASE.CREATE,
    ),
    UPDATE: COMMENT_MODULE.get<UpdateCommentUseCase>(
      COMMENT_REGISTRY.USE_CASE.UPDATE,
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
  },
};
