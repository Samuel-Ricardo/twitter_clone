import {
  CreateLikeUseCase,
  FinduserLikesUseCase,
  FindPostLikesUseCase,
  FindCommentLikesUseCase,
  DeleteLikeUseCase,
} from '@/app/modules/@core/like/use-case';
import { LIKE_MODULE_MOCK } from './like.module';
import { LIKE_REGISTRY_MOCK } from './like.registry';
import { DeepMockProxy } from 'jest-mock-extended';
import { LikeService } from '@/app/modules/@core/like/service';
import { ISimulatedLikeService } from '@test/@types/simulate/like/service';

export const LIKE_FACTORY_MODULE_MOCK = {
  SERVICE: {
    MOCK: () =>
      LIKE_MODULE_MOCK.get<DeepMockProxy<LikeService>>(
        LIKE_REGISTRY_MOCK.SERVICE.MOCK,
      ),
    SIMULATE: () =>
      LIKE_MODULE_MOCK.get<ISimulatedLikeService>(
        LIKE_REGISTRY_MOCK.SERVICE.SIMULATE,
      ),
  },
  USE_CASE: {
    CREATE: () =>
      LIKE_MODULE_MOCK.get<DeepMockProxy<CreateLikeUseCase>>(
        LIKE_REGISTRY_MOCK.USE_CASE.CREATE,
      ),
    DELETE: () =>
      LIKE_MODULE_MOCK.get<DeepMockProxy<DeleteLikeUseCase>>(
        LIKE_REGISTRY_MOCK.USE_CASE.DELETE,
      ),
    FIND: {
      BY: {
        POST: () =>
          LIKE_MODULE_MOCK.get<DeepMockProxy<FindPostLikesUseCase>>(
            LIKE_REGISTRY_MOCK.USE_CASE.FIND.BY.POST,
          ),
        USER: () =>
          LIKE_MODULE_MOCK.get<DeepMockProxy<FinduserLikesUseCase>>(
            LIKE_REGISTRY_MOCK.USE_CASE.FIND.BY.USER,
          ),
        COMMENT: () =>
          LIKE_MODULE_MOCK.get<DeepMockProxy<FindCommentLikesUseCase>>(
            LIKE_REGISTRY_MOCK.USE_CASE.FIND.BY.COMMENT,
          ),
      },
    },
  },
};
