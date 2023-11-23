import { SCOPE } from '../../app.tag';
import { PostController } from './controller/post.controller';
import { POST_MODULE } from './post.module';
import { POST_REGISTRY } from './post.registry';
import { PostService } from './service';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  FindAllPostUseCase,
  FindPostByIdUseCase,
  FindPostsByAuthorUseCase,
  UpdatePostUseCase,
} from './use-case';
import { EmitPostUseCase } from './use-case/observable/emit/created.use-case';
import { ListenPostUseCase } from './use-case/observable/listen/created.use-case';

export const POST_FACTORY = {
  MAIN: () => POST_MODULE.get<PostController>(POST_REGISTRY.MAIN),
  CONTROLLER: () =>
    POST_MODULE.getTagged<PostController>(
      POST_REGISTRY.CONTROLLER,
      SCOPE.TAG,
      SCOPE.MAIN,
    ),
  SERVICE: () =>
    POST_MODULE.getTagged<PostService>(
      POST_REGISTRY.SERVICE,
      SCOPE.TAG,
      SCOPE.MAIN,
    ),
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
    OBSERVABLE: {
      EMIT: {
        CREATED: () =>
          POST_MODULE.get<EmitPostUseCase>(
            POST_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED,
          ),
      },
      LISTEN: {
        CREATED: () =>
          POST_MODULE.get<ListenPostUseCase>(
            POST_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED,
          ),
      },
    },
  },
};
