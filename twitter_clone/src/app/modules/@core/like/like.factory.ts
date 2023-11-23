import { LikeController } from './controller';
import { LIKE_MODULE } from './like.module';
import { LIKE_REGISTRY } from './like.registry';
import { LikeService } from './service';
import {
  CreateLikeUseCase,
  FindCommentLikesUseCase,
  FindPostLikesUseCase,
  FinduserLikesUseCase,
  DeleteLikeUseCase,
} from './use-case';

export const LIKE_FACTORY = {
  MAIN: () => LIKE_MODULE.get<LikeController>(LIKE_REGISTRY.MAIN),
  CONTROLLER: () => LIKE_MODULE.get<LikeController>(LIKE_REGISTRY.CONTROLLER),
  SERVICE: () => LIKE_MODULE.get<LikeService>(LIKE_REGISTRY.SERVICE),
  USE_CASE: {
    CREATE: () =>
      LIKE_MODULE.get<CreateLikeUseCase>(LIKE_REGISTRY.USE_CASE.CREATE),
    DELETE: () =>
      LIKE_MODULE.get<DeleteLikeUseCase>(LIKE_REGISTRY.USE_CASE.DELETE),
    FIND: {
      BY: {
        POST: () =>
          LIKE_MODULE.get<FindPostLikesUseCase>(
            LIKE_REGISTRY.USE_CASE.FIND.BY.POST,
          ),
        USER: () =>
          LIKE_MODULE.get<FinduserLikesUseCase>(
            LIKE_REGISTRY.USE_CASE.FIND.BY.USER,
          ),
        COMMENT: () =>
          LIKE_MODULE.get<FindCommentLikesUseCase>(
            LIKE_REGISTRY.USE_CASE.FIND.BY.COMMENT,
          ),
      },
    },
  },
};
