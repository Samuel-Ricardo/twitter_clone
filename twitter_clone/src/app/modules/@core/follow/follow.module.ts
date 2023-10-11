import { Container } from 'inversify';
import { GatewayModule } from '../../gateway/gateway.module';
import { FOLLOW_REGISTRY } from './follow.registry';
import {
  CreateFollowUseCase,
  DeleteFollowUseCase,
  GetFollowersUseCase,
  GetFollowingUseCase,
  CountFollowersUseCase,
  CountFollowingUseCase,
} from './use-case';
import { FollowService } from './service';
import { FollowController } from './controller';
import { EmitFollowUseCase } from './use-case/observable/emit/created.use-case';
import { ListenFollowUseCase } from './use-case/observable/listen/created.use-case';
import { EmitUnfollowUseCase } from './use-case/observable/emit/deleted.use-case';
import { ListenUnfollowUseCase } from './use-case/observable/listen/deleted.use-case';
import { OBSERVABLE_MODULE } from '../../observable/observable.module';
import { SCOPE } from './follow.tag';
import { ReactiveFollowService } from './service/reactive/follow.service';
import { ReactiveFollowController } from './controller/reactive/follow.controller';

const MODULE = new Container({ autoBindInjectable: true });

export const FOLLOW_MODULE = Container.merge(
  MODULE,
  OBSERVABLE_MODULE,
  GatewayModule,
);

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.CREATE).to(CreateFollowUseCase);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.DELETE).to(DeleteFollowUseCase);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.GET.FOLLOWERS).to(
  GetFollowersUseCase,
);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.GET.FOLLOWING).to(
  GetFollowingUseCase,
);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.COUNT.FOLLOWING).to(
  CountFollowingUseCase,
);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.COUNT.FOLLOWERS).to(
  CountFollowersUseCase,
);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED).to(
  EmitFollowUseCase,
);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED).to(
  ListenFollowUseCase,
);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.EMIT.DELETED).to(
  EmitUnfollowUseCase,
);
FOLLOW_MODULE.bind(FOLLOW_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.DELETED).to(
  ListenUnfollowUseCase,
);

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.SERVICE)
  .to(FollowService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.CONTROLLER)
  .to(FollowController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.MAIN).to(FollowController);

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.SERVICE)
  .to(ReactiveFollowService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.CONTROLLER)
  .to(ReactiveFollowController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.REACTIVE).to(ReactiveFollowController);
