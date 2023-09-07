import { DeepMockProxy } from 'jest-mock-extended';
import { COMMENT_MODULE_MOCK } from './comment.module';
import {
  CreateCommentUseCase,
  FindPostCommentsUseCase,
  DeleteCommentUseCase,
  UpdateCommentUseCase,
  FindUserCommentsUseCase,
} from '@/app/modules/@core/comment/use-case';
import { COMMENT_REGISTRY_MOCK } from './comment.registry';
import { PostService } from '@/app/modules/@core/post';
import { ISimulatedCommentService } from '@test/@types/simulate/comment/service';
import { CommentController } from '@/app/modules/@core/comment/controller/comment.controller';
import { ISimulatedCommentController } from '@test/@types/simulate/comment/controller';

export const COMMENT_FACTORY_MOCK = {
  CONTROLLER: {
    MOCK: () =>
      COMMENT_MODULE_MOCK.get<DeepMockProxy<CommentController>>(
        COMMENT_REGISTRY_MOCK.CONTROLLER.MOCK,
      ),
    SIMULATE: () =>
      COMMENT_MODULE_MOCK.get<ISimulatedCommentController>(
        COMMENT_REGISTRY_MOCK.CONTROLLER.SIMULATE,
      ),
  },
  SERVICE: {
    MOCK: () =>
      COMMENT_MODULE_MOCK.get<DeepMockProxy<PostService>>(
        COMMENT_REGISTRY_MOCK.SERVICE.MOCK,
      ),
    SIMULATE: () =>
      COMMENT_MODULE_MOCK.get<ISimulatedCommentService>(
        COMMENT_REGISTRY_MOCK.SERVICE.SIMULATE,
      ),
  },
  USE_CASE: {
    CREATE: () =>
      COMMENT_MODULE_MOCK.get<DeepMockProxy<CreateCommentUseCase>>(
        COMMENT_REGISTRY_MOCK.USE_CASE.CREATE,
      ),
    UPDATE: () =>
      COMMENT_MODULE_MOCK.get<DeepMockProxy<UpdateCommentUseCase>>(
        COMMENT_REGISTRY_MOCK.USE_CASE.UPDATE,
      ),
    DELETE: () =>
      COMMENT_MODULE_MOCK.get<DeepMockProxy<DeleteCommentUseCase>>(
        COMMENT_REGISTRY_MOCK.USE_CASE.DELETE,
      ),
    FIND: {
      BY: {
        POST: () =>
          COMMENT_MODULE_MOCK.get<DeepMockProxy<FindPostCommentsUseCase>>(
            COMMENT_REGISTRY_MOCK.USE_CASE.FIND.BY.POST,
          ),
        AUTHOR: () =>
          COMMENT_MODULE_MOCK.get<DeepMockProxy<FindUserCommentsUseCase>>(
            COMMENT_REGISTRY_MOCK.USE_CASE.FIND.BY.AUTHOR,
          ),
      },
    },
  },
};
