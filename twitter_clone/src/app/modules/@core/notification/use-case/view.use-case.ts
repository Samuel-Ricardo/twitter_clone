import { injectable } from 'inversify';
import { NotificationReactiveGatewaySupport } from '../gateway/reactive/gateway.support';
import { ISetNotificationVisualizedDTO } from '../DTO';

@injectable()
export class ViewNotificationUseCase extends NotificationReactiveGatewaySupport {
  execute(notification: ISetNotificationVisualizedDTO) {
    return this.gateway.publishViewNotification(notification);
  }
}
