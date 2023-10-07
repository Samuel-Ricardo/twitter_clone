import { inject, injectable } from 'inversify';
import { type INotificationGateway } from './notification.gateway';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class NotificationGatewaySupport {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.NOTIFICATION)
    protected notification: INotificationGateway,
  ) {}
}
