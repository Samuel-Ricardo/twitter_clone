import { Container } from 'inversify';
import { OBSERVABLE_MODULE } from '../../observable/observable.module';
import { GatewayModule } from '../../gateway/gateway.module';
import { NOTIFICATION_REGISTRY } from './notification.registry';
import { CreateNotificationUseCase } from './use-case/create.use-case';
import { ViewNotificationUseCase } from './use-case/view.use-case';
import { DeleteNotificationUseCase } from './use-case/delete.use-case';
import { FindNotificationByUserUseCase } from './use-case/findByUser.use-case';
import { NotificationService } from './service/notification.service';
import { ReactiveNotificationService } from './service/reactive/notification.service';
import { SCOPE } from './notification.tag';
import { NotificationController } from './controller/notification.controller';
import { ReactiveNotificationController } from './controller/reactive/notification.controller';
import { EmitNotificationUseCase } from './use-case/observable/emit/created.use-case';
import { ListenNotificationUseCase } from './use-case/observable/listen/created.use-case';
import { ListenNotificationViewedUseCase } from './use-case/observable/listen/viewed.use-case';
import { ListenNotificationDeletedUseCase } from './use-case/observable/listen/deleted.use-case';
import { LIKE_MODULE } from '../like/like.module';
import { POST_MODULE } from '../post';
import { COMMENT_MODULE } from '../comment';
import { UserModule } from '../user/user.module';
import { FOLLOW_MODULE } from '../follow/follow.module';
import { SubscribeNotificationUseCase } from './use-case/reactive/subscribe/created.use-case';
import { SubscribeNotificationViewedUseCase } from './use-case/reactive/subscribe/viewed.use-case';
import { SubscribeNotificationDeletedUseCase } from './use-case/reactive/subscribe/deleted.use-case';
import { EmitNotificationViewedUSeCase } from './use-case/observable/emit/viewed.use-case';
import { EmitNotificationDeletedUseCase } from './use-case/observable/emit/deleted.use-case';

const MODULE = new Container({ autoBindInjectable: true });

export const NOTIFICATION_MODULE = Container.merge(
  MODULE,
  OBSERVABLE_MODULE,
  GatewayModule,
  LIKE_MODULE,
  POST_MODULE,
  COMMENT_MODULE,
  UserModule,
  FOLLOW_MODULE,
);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.USE_CASE.CREATE).to(
  CreateNotificationUseCase,
);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.USE_CASE.VIEW).to(
  ViewNotificationUseCase,
);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.USE_CASE.DELETE).to(
  DeleteNotificationUseCase,
);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.USE_CASE.FIND.BY.USER).to(
  FindNotificationByUserUseCase,
);

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.REACTIVE.SUBSCRIBE.CREATED,
)
  .to(SubscribeNotificationUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.REACTIVE.SUBSCRIBE.VIEWED,
)
  .to(SubscribeNotificationViewedUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.REACTIVE.SUBSCRIBE.DELETED,
)
  .to(SubscribeNotificationDeletedUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED)
  .to(EmitNotificationUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED,
)
  .to(ListenNotificationUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.VIEWED,
)
  .to(ListenNotificationViewedUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.DELETED,
)
  .to(ListenNotificationDeletedUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.EMIT.VIEWED)
  .to(EmitNotificationViewedUSeCase)
  .inSingletonScope();
NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.EMIT.DELETED)
  .to(EmitNotificationDeletedUseCase)
  .inSingletonScope();

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.SERVICE)
  .to(NotificationService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.SERVICE)
  .to(ReactiveNotificationService)
  .inSingletonScope()
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.CONTROLLER)
  .to(NotificationController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.CONTROLLER)
  .to(ReactiveNotificationController)
  .inSingletonScope()
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.MAIN).to(NotificationController);
NOTIFICATION_MODULE.bind(NOTIFICATION_REGISTRY.REACTIVE)
  .to(ReactiveNotificationController)
  .inSingletonScope();
