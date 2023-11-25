import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable, tagged } from 'inversify';
import { NotificationService } from '../service/notification.service';
import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IFindNotificationsByUserDTO,
  ISetNotificationVisualizedDTO,
} from '../DTO';
import { SCOPE } from '@/app/modules/app.tag';

@injectable()
export class NotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.MAIN)
    private readonly service: NotificationService,
  ) {}

  create(notification: ICreateNotificationDTO) {
    return this.service.create(notification);
  }

  view(notification: ISetNotificationVisualizedDTO) {
    return this.service.view(notification);
  }

  delete(notification: IDeleteNotificationDTO) {
    return this.service.delete(notification);
  }

  findByUser(user: IFindNotificationsByUserDTO) {
    return this.service.findByUser(user);
  }
}
