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

const MODULE = new Container({ autoBindInjectable: true });

export const NOTIFICATION_MODULE = Container.merge(
  MODULE,
  OBSERVABLE_MODULE,
  GatewayModule,
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
  NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED,
).to(EmitNotificationUseCase);

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED,
).to(ListenNotificationUseCase);

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.VIEWED,
).to(ListenNotificationViewedUseCase);

NOTIFICATION_MODULE.bind(
  NOTIFICATION_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.DELETED,
).to(ListenNotificationDeletedUseCase);

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
