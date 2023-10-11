import { IFindNotificationsByUserDTO } from '../DTO';
import { NotificationGatewaySupport } from '../gateway/gateway.support';

export class FindNotificationByUserUseCase extends NotificationGatewaySupport {
  execute(user: IFindNotificationsByUserDTO) {
    return this.notification.swrGetByUser(user);
  }
  async executeAsync(user: IFindNotificationsByUserDTO) {
    return this.notification.findByUser(user);
  }
}
