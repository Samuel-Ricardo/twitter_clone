import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { NotificationService } from '../service/notification.service';
import { ICreateNotificationDTO } from '../DTO';

@injectable()
export class NotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    private readonly service: NotificationService,
  ) {}

  create(notification: ICreateNotificationDTO) {
    this.service.create(notification);
  }
}
