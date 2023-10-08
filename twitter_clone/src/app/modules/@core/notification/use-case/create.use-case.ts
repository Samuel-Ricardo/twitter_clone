import { injectable } from 'inversify';
import { ICreateNotificationDTO } from '../DTO';
import { NotificationReactiveGatewaySupport } from '../gateway/reactive/gateway.support';

@injectable()
export class CreateNotificationUseCase extends NotificationReactiveGatewaySupport {
  execute(notification: ICreateNotificationDTO) {
    return this.gateway.publishNewNotification(notification);
  }
}
