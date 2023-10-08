import { injectable } from 'inversify';
import { NotificationReactiveGatewaySupport } from '../gateway/reactive/gateway.support';
import { IDeleteNotificationDTO } from '../DTO';

@injectable()
export class DeleteNotificationUseCase extends NotificationReactiveGatewaySupport {
  execute(notification: IDeleteNotificationDTO) {
    return this.gateway.publishDeleteNotification(notification);
  }
}
