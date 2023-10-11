import { injectable } from 'inversify';
import { ISubscribeNotificationViewedDTO } from '../../../DTO/reactive/subscribe/viewed.dto';
import { NotificationReactiveGatewaySupport } from '../../../gateway/reactive/gateway.support';

@injectable()
export class SubscribeNotificationViewedUseCase extends NotificationReactiveGatewaySupport {
  async executeAsync(schedule: ISubscribeNotificationViewedDTO) {
    return this.gateway.subscribeToNotificationVisualized(schedule);
  }
}
