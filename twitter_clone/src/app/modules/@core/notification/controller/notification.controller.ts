import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { NotificationService } from '../service/notification.service';
import { ICreateNotificationDTO, ISetNotificationVisualizedDTO } from '../DTO';

@injectable()
export class NotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    private readonly service: NotificationService,
  ) {}

  create(notification: ICreateNotificationDTO) {
    return this.service.create(notification);
  }

  view(notification: ISetNotificationVisualizedDTO) {
    return this.service.view(notification);
  }
}
