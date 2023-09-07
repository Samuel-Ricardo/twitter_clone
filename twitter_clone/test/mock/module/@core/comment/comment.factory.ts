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

export const COMMENT_FACTORY_MOCK = {
  SERVICE: {
    MOCK: () => {},
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
