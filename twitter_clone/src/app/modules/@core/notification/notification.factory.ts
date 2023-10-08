import { NotificationController } from './controller/notification.controller';
import { ReactiveNotificationController } from './controller/reactive/notification.controller';
import { NOTIFICATION_MODULE } from './notification.module';
import { NOTIFICATION_REGISTRY } from './notification.registry';
import { SCOPE } from './notification.tag';
import { NotificationService } from './service/notification.service';
import { ReactiveNotificationService } from './service/reactive/notification.service';
import { CreateNotificationUseCase } from './use-case/create.use-case';
import { DeleteNotificationUseCase } from './use-case/delete.use-case';
import { FindNotificationByUserUseCase } from './use-case/findByUser.use-case';
import { ViewNotificationUseCase } from './use-case/view.use-case';

export const NOTIFICATION_FACTORY = {
  CONTROLLER: {
    MAIN: () =>
      NOTIFICATION_MODULE.getTagged<NotificationController>(
        NOTIFICATION_REGISTRY.CONTROLLER,
        SCOPE.TAG,
        SCOPE.MAIN,
      ),
    REACTIVE: () =>
      NOTIFICATION_MODULE.getTagged<ReactiveNotificationController>(
        NOTIFICATION_REGISTRY.CONTROLLER,
        SCOPE.TAG,
        SCOPE.REACTIVE,
      ),
  },
  SERVICE: {
    MAIN: () =>
      NOTIFICATION_MODULE.getTagged<ReactiveNotificationService>(
        NOTIFICATION_REGISTRY.SERVICE,
        SCOPE.TAG,
        SCOPE.MAIN,
      ),

    REACTIVE: () =>
      NOTIFICATION_MODULE.getTagged<NotificationService>(
        NOTIFICATION_REGISTRY.SERVICE,
        SCOPE.TAG,
        SCOPE.REACTIVE,
      ),
  },
  USE_CASE: {
    CREATE: () =>
      NOTIFICATION_MODULE.get<CreateNotificationUseCase>(
        NOTIFICATION_REGISTRY.USE_CASE.CREATE,
      ),
    VIEW: () =>
      NOTIFICATION_MODULE.get<ViewNotificationUseCase>(
        NOTIFICATION_REGISTRY.USE_CASE.VIEW,
      ),
    DELETE: () =>
      NOTIFICATION_MODULE.get<DeleteNotificationUseCase>(
        NOTIFICATION_REGISTRY.USE_CASE.DELETE,
      ),
    FIND: {
      BY: {
        USER: () =>
          NOTIFICATION_MODULE.get<FindNotificationByUserUseCase>(
            NOTIFICATION_REGISTRY.USE_CASE.FIND.BY.USER,
          ),
      },
    },
  },
};
