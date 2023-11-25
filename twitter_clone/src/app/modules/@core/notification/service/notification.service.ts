import { inject, injectable } from 'inversify';
import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IFindNotificationsByUserDTO,
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

  async create(notification: ICreateNotificationDTO) {
    return this.createNotification.execute(notification);
  }

  async view(notification: ISetNotificationVisualizedDTO) {
    return this.viewNotification.execute(notification);
  }

  async delete(notification: IDeleteNotificationDTO) {
    return this.deleteNotification.execute(notification);
  }

  findByUser(user: IFindNotificationsByUserDTO) {
    return { notifications: this.findNotificationByUser.execute(user) };
  }
}
