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
import { FollowController } from '@/app/modules/@core/follow/controller';
import { ISimulatedFollowController } from '@test/@types/simulate/follow/controller';
import { EmitFollowUseCase } from '@/app/modules/@core/follow/use-case/observable/emit/created.use-case';
import { EmitUnfollowUseCase } from '@/app/modules/@core/follow/use-case/observable/emit/deleted.use-case';

export const FOLLOW_FACTORY_MOCK = {
  CONTROLLER: {
    MOCK: () =>
      FOLLOW_MODULE_MOCK.get<DeepMockProxy<FollowController>>(
        FOLLOW_REGISTRY_MOCK.CONTROLLER.MOCK,
      ),
    SIMULATE: () =>
      FOLLOW_MODULE_MOCK.get<ISimulatedFollowController>(
        FOLLOW_REGISTRY_MOCK.CONTROLLER.SIMULATE,
      ),
  },
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
    OBSERVABLE: {
      EMIT: {
        CREATED: () =>
          FOLLOW_MODULE_MOCK.get<DeepMockProxy<EmitFollowUseCase>>(
            FOLLOW_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.CREATED,
          ),
        DELETED: () =>
          FOLLOW_MODULE_MOCK.get<DeepMockProxy<EmitUnfollowUseCase>>(
            FOLLOW_REGISTRY_MOCK.USE_CASE.OBSERVABLE.EMIT.DELETED,
          ),
      },
    },
  },
};
