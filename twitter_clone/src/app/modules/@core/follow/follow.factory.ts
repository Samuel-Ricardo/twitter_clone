import { FollowController } from './controller';
import { FOLLOW_MODULE } from './follow.module';
import { FOLLOW_REGISTRY } from './follow.registry';
import { FollowService } from './service';
import {
  CountFollowersUseCase,
  CountFollowingUseCase,
  CreateFollowUseCase,
  DeleteFollowUseCase,
  GetFollowersUseCase,
  GetFollowingUseCase,
} from './use-case';
import { EmitFollowUseCase } from './use-case/observable/emit/created.use-case';
import { EmitUnfollowUseCase } from './use-case/observable/emit/deleted.use-case';
import { ListenFollowUseCase } from './use-case/observable/listen/created.use-case';
import { ListenUnfollowUseCase } from './use-case/observable/listen/deleted.use-case';

export const FOLLOW_FACTORY = {
  MAIN: () => FOLLOW_MODULE.get<FollowController>(FOLLOW_REGISTRY.CONTROLLER),
  CONTROLLER: () =>
    FOLLOW_MODULE.get<FollowController>(FOLLOW_REGISTRY.CONTROLLER),
  SERVICE: () => FOLLOW_MODULE.get<FollowService>(FOLLOW_REGISTRY.SERVICE),
  USE_CASE: {
    CREATE: () =>
      FOLLOW_MODULE.get<CreateFollowUseCase>(FOLLOW_REGISTRY.USE_CASE.CREATE),
    DELETE: () =>
      FOLLOW_MODULE.get<DeleteFollowUseCase>(FOLLOW_REGISTRY.USE_CASE.DELETE),
    GET: {
      FOLLOWERS: () =>
        FOLLOW_MODULE.get<GetFollowersUseCase>(
          FOLLOW_REGISTRY.USE_CASE.GET.FOLLOWERS,
        ),
      FOLLOWING: () =>
        FOLLOW_MODULE.get<GetFollowingUseCase>(
          FOLLOW_REGISTRY.USE_CASE.GET.FOLLOWING,
        ),
    },
    COUNT: {
      FOLLOWERS: () =>
        FOLLOW_MODULE.get<CountFollowersUseCase>(
          FOLLOW_REGISTRY.USE_CASE.COUNT.FOLLOWERS,
        ),
      FOLLOWING: () =>
        FOLLOW_MODULE.get<CountFollowingUseCase>(
          FOLLOW_REGISTRY.USE_CASE.COUNT.FOLLOWING,
        ),
    },
    OBSERVABLE: {
      EMIT: {
        CREATED: () =>
          FOLLOW_MODULE.get<EmitFollowUseCase>(
            FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED,
          ),
        DELETED: () =>
          FOLLOW_MODULE.get<EmitUnfollowUseCase>(
            FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.EMIT.DELETED,
          ),
      },
      LISTEN: {
        CREATED: () =>
          FOLLOW_MODULE.get<ListenFollowUseCase>(
            FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED,
          ),
        DELETED: () =>
          FOLLOW_MODULE.get<ListenUnfollowUseCase>(
            FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.DELETED,
          ),
      },
    },
  },
};
