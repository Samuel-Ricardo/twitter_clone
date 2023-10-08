import { injectable } from 'inversify';
import { NotificationReactiveGatewaySupport } from '../../../gateway/reactive/gateway.support';
import { ISubscribeNotificationCreatedDTO } from '../../../DTO/reactive/subscribe/created.dto';

@injectable()
export class SubscribeNotificationUseCase extends NotificationReactiveGatewaySupport {
  execute(schedule: ISubscribeNotificationCreatedDTO) {
    this.gateway.subscribeToNotificationCreated(schedule);
  }
}
