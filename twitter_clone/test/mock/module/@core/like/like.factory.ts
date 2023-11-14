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
import { LikeController } from '@/app/modules/@core/like/controller';
import { ISimulatedLikeController } from '@test/@types/simulate/like/controller';
import { EmitLikeCreatedUseCase } from '@/app/modules/@core/like/use-case/observable/emit/create.use-case';
import { EmitLikeDeletedUseCase } from '@/app/modules/@core/like/use-case/observable/emit/delete.use-case';

export const LIKE_FACTORY_MODULE_MOCK = {
  CONTROLLER: {
    MOCK: () =>
      LIKE_MODULE_MOCK.get<DeepMockProxy<LikeController>>(
        LIKE_REGISTRY_MOCK.CONTROLLER.MOCK,
      ),
    SIMULATE: () =>
      LIKE_MODULE_MOCK.get<ISimulatedLikeController>(
        LIKE_REGISTRY_MOCK.CONTROLLER.SIMULATE,
      ),
  },
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
    OBSERVABLE: {
      EMIT: {
        CREATED: () =>
          LIKE_MODULE_MOCK.get<DeepMockProxy<EmitLikeCreatedUseCase>>(
            LIKE_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.CREATED,
          ),
        DELETED: () =>
          LIKE_MODULE_MOCK.get<DeepMockProxy<EmitLikeDeletedUseCase>>(
            LIKE_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.DELETED,
          ),
      },
    },
  },
};
