import { MODULE } from '../../../../app.registry';
import { inject, injectable } from 'inversify';
import { type IReactiveNotificationGateway } from './notification.gateway';

@injectable()
export abstract class NotificationReactiveGatewaySupport {
  constructor(
    @inject(MODULE.GATEWAY.REACTIVE.SOCKET.IO.NOTIFICATION)
    protected readonly gateway: IReactiveNotificationGateway,
  ) {}
}
