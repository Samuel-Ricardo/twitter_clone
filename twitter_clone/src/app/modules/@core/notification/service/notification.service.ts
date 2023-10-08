import { inject, injectable } from 'inversify';
import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  ISetNotificationVisualizedDTO,
} from '../DTO';
import { CreateNotificationUseCase } from '../use-case/create.use-case';
import { MODULE } from '@/app/modules/app.registry';
import { ViewNotificationUseCase } from '../use-case/view.use-case';
import { DeleteNotificationUseCase } from '../use-case/delete.use-case';
import { FindNotificationByUserUseCase } from '../use-case/findByUser.use-case';

@injectable()
export class NotificationService {
  constructor(
    @inject(MODULE.NOTIFICATION.USE_CASE.CREATE)
    private readonly createNotification: CreateNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.VIEW)
    private readonly viewNotification: ViewNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.DELETE)
    private readonly deleteNotification: DeleteNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.FIND.BY.USER)
    private readonly findNotificationByUser: FindNotificationByUserUseCase,
  ) {}

  create(notification: ICreateNotificationDTO) {
    this.createNotification.execute(notification);
  }

  view(notification: ISetNotificationVisualizedDTO) {
    this.viewNotification.execute(notification);
  }

  delete(notification: IDeleteNotificationDTO) {
    this.deleteNotification.execute(notification);
  }
}
