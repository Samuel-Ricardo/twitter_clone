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

export const FOLLOW_FACTORY = {
  SERVICE: FOLLOW_MODULE.get<FollowService>(FOLLOW_REGISTRY.SERVICE),
  USE_CASE: {
    CREATE: FOLLOW_MODULE.get<CreateFollowUseCase>(
      FOLLOW_REGISTRY.USE_CASE.CREATE,
    ),
    DELETE: FOLLOW_MODULE.get<DeleteFollowUseCase>(
      FOLLOW_REGISTRY.USE_CASE.DELETE,
    ),
    GET: {
      FOLLOWERS: FOLLOW_MODULE.get<GetFollowersUseCase>(
        FOLLOW_REGISTRY.USE_CASE.GET.FOLLOWERS,
      ),
      FOLLOWING: FOLLOW_MODULE.get<GetFollowingUseCase>(
        FOLLOW_REGISTRY.USE_CASE.GET.FOLLOWING,
      ),
    },
    COUNT: {
      FOLLOWERS: FOLLOW_MODULE.get<CountFollowersUseCase>(
        FOLLOW_REGISTRY.USE_CASE.COUNT.FOLLOWERS,
      ),
      FOLLOWING: FOLLOW_MODULE.get<CountFollowingUseCase>(
        FOLLOW_REGISTRY.USE_CASE.COUNT.FOLLOWING,
      ),
    },
  },
};
