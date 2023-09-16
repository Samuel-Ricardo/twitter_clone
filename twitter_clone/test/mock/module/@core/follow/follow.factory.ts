import { DeepMockProxy } from 'jest-mock-extended';
import { FOLLOW_MODULE_MOCK } from './follow.module';
import { FOLLOW_REGISTRY_MOCK } from './follow.registry';
import {
  CreateFollowUseCase,
  DeleteFollowUseCase,
  GetFollowersUseCase,
  GetFollowingUseCase,
  CountFollowersUseCase,
  CountFollowingUseCase,
} from '@/app/modules/@core/follow/use-case';
import { FollowService } from '@/app/modules/@core/follow/service';
import { ISimulatedFollowService } from '@test/@types/simulate/follow/service';

export const FOLLOW_FACTORY_MOCK = {
  SERVICE: {
    MOCK: () =>
      FOLLOW_MODULE_MOCK.get<DeepMockProxy<FollowService>>(
        FOLLOW_REGISTRY_MOCK.SERVICE.MOCK,
      ),
    SIMULATE: () =>
      FOLLOW_MODULE_MOCK.get<ISimulatedFollowService>(
        FOLLOW_REGISTRY_MOCK.SERVICE.SIMULATE,
      ),
  },
  USE_CASE: {
    CREATE: () =>
      FOLLOW_MODULE_MOCK.get<DeepMockProxy<CreateFollowUseCase>>(
        FOLLOW_REGISTRY_MOCK.USE_CASE.CREATE,
      ),
    DELETE: () =>
      FOLLOW_MODULE_MOCK.get<DeepMockProxy<DeleteFollowUseCase>>(
        FOLLOW_REGISTRY_MOCK.USE_CASE.DELETE,
      ),
    GET: {
      FOLLOWERS: () =>
        FOLLOW_MODULE_MOCK.get<DeepMockProxy<GetFollowersUseCase>>(
          FOLLOW_REGISTRY_MOCK.USE_CASE.GET.FOLLOWERS,
        ),
      FOLLOWING: () =>
        FOLLOW_MODULE_MOCK.get<DeepMockProxy<GetFollowingUseCase>>(
          FOLLOW_REGISTRY_MOCK.USE_CASE.GET.FOLLOWING,
        ),
    },
    COUNT: {
      FOLLOWERS: () =>
        FOLLOW_MODULE_MOCK.get<DeepMockProxy<CountFollowersUseCase>>(
          FOLLOW_REGISTRY_MOCK.USE_CASE.COUNT.FOLLOWERS,
        ),
      FOLLOWING: () =>
        FOLLOW_MODULE_MOCK.get<DeepMockProxy<CountFollowingUseCase>>(
          FOLLOW_REGISTRY_MOCK.USE_CASE.COUNT.FOLLOWING,
        ),
    },
  },
};
