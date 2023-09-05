import { POST_MODULE } from './post.module';
import { POST_REGISTRY } from './post.registry';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  FindAllPostUseCase,
  FindPostByIdUseCase,
  FindPostsByAuthorUseCase,
  UpdatePostUseCase,
} from './use-case';

export const POST_FACTORY = {
  USE_CASE: {
    CREATE: () =>
      POST_MODULE.get<CreatePostUseCase>(POST_REGISTRY.USE_CASE.CREATE),
    DELETE: () =>
      POST_MODULE.get<DeletePostUseCase>(POST_REGISTRY.USE_CASE.DELETE),
    UPDATE: () =>
      POST_MODULE.get<UpdatePostUseCase>(POST_REGISTRY.USE_CASE.UPDATE),
    FIND: {
      ALL: () =>
        POST_MODULE.get<FindAllPostUseCase>(POST_REGISTRY.USE_CASE.FIND.ALL),
      BY: {
        AUTHOR: {
          ID: () =>
            POST_MODULE.get<FindPostsByAuthorUseCase>(
              POST_REGISTRY.USE_CASE.FIND.BY.AUTHOR.ID,
            ),
        },
        ID: () =>
          POST_MODULE.get<FindPostByIdUseCase>(
            POST_REGISTRY.USE_CASE.FIND.BY.ID,
          ),
      },
    },
  },
};