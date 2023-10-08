import { Container } from 'inversify';
import { OBSERVABLE_MODULE } from '../../observable/observable.module';
import { GatewayModule } from '../../gateway/gateway.module';
import { NOTIFICATION_REGISTRY } from './notification.registry';
import { CreateNotificationUseCase } from './use-case/create.use-case';
import { ViewNotificationUseCase } from './use-case/view.use-case';
import { DeleteNotificationUseCase } from './use-case/delete.use-case';
import { FindNotificationByUserUseCase } from './use-case/findByUser.use-case';

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
