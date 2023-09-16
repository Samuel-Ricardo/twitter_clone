import { GATEWAY_MODULE_MOCK } from '@test/mock/module/gateway/gateway.module';
import { Container } from 'inversify';
import { FOLLOW_REGISTRY_MOCK } from './follow.registry';
import {
  mockCreateFollowUseCase,
  mockDeleteFollowUseCase,
  mockGetFollowersUseCase,
  mockGetFollowingUseCase,
  mockCountFollowersUseCase,
  mockCountFollowingUseCase,
} from './use-case';
import {
  mockFollowService,
  simulateFollowService,
} from './service/follow.service';
import {
  mockFollowController,
  simulateFollowController,
} from './controller/follow.controller';

const MODULE = new Container({ autoBindInjectable: true });

export const FOLLOW_MODULE_MOCK = Container.merge(MODULE, GATEWAY_MODULE_MOCK);

FOLLOW_MODULE_MOCK.bind(FOLLOW_REGISTRY_MOCK.USE_CASE.CREATE).toDynamicValue(
  mockCreateFollowUseCase,
);

FOLLOW_MODULE_MOCK.bind(FOLLOW_REGISTRY_MOCK.USE_CASE.DELETE).toDynamicValue(
  mockDeleteFollowUseCase,
);

FOLLOW_MODULE_MOCK.bind(
  FOLLOW_REGISTRY_MOCK.USE_CASE.GET.FOLLOWERS,
).toDynamicValue(mockGetFollowersUseCase);

FOLLOW_MODULE_MOCK.bind(
  FOLLOW_REGISTRY_MOCK.USE_CASE.GET.FOLLOWING,
).toDynamicValue(mockGetFollowingUseCase);

FOLLOW_MODULE_MOCK.bind(
  FOLLOW_REGISTRY_MOCK.USE_CASE.COUNT.FOLLOWING,
).toDynamicValue(mockCountFollowingUseCase);

FOLLOW_MODULE_MOCK.bind(
  FOLLOW_REGISTRY_MOCK.USE_CASE.COUNT.FOLLOWERS,
).toDynamicValue(mockCountFollowersUseCase);

FOLLOW_MODULE_MOCK.bind(FOLLOW_REGISTRY_MOCK.SERVICE.MOCK).toDynamicValue(
  mockFollowService,
);

FOLLOW_MODULE_MOCK.bind(FOLLOW_REGISTRY_MOCK.SERVICE.SIMULATE).toDynamicValue(
  simulateFollowService,
);

FOLLOW_MODULE_MOCK.bind(FOLLOW_REGISTRY_MOCK.CONTROLLER.MOCK).toDynamicValue(
  mockFollowController,
);

FOLLOW_MODULE_MOCK.bind(
  FOLLOW_REGISTRY_MOCK.CONTROLLER.SIMULATE,
).toDynamicValue(simulateFollowController);
