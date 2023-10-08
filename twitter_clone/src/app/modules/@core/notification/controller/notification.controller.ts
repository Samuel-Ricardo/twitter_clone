import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { NotificationService } from '../service/notification.service';

@injectable()
export class NotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    private readonly service: NotificationService,
  ) {}
}
