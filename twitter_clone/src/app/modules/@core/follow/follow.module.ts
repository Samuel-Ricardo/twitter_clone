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

const MODULE = new Container({ autoBindInjectable: true });

export const FOLLOW_MODULE = Container.merge(MODULE, GatewayModule);

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

FOLLOW_MODULE.bind(FOLLOW_REGISTRY.SERVICE).to(FollowService);
