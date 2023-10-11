import { injectable } from 'inversify';
import { NotificationReactiveGatewaySupport } from '../../../gateway/reactive/gateway.support';
import { ISubscribeNotificationDeletedDTO } from '../../../DTO/reactive/subscribe/deleted.dto';

@injectable()
export class SubscribeNotificationDeletedUseCase extends NotificationReactiveGatewaySupport {
  async executeAsync(schedule: ISubscribeNotificationDeletedDTO) {
    return this.gateway.subscribeToNotificationDeleted(schedule);
  }
}
