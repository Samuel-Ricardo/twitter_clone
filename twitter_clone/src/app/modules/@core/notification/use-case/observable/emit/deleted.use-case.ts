import { IEmitNotificationDeletedDTO } from '../../../DTO/observable/emit';
import { NotificationObservableSupport } from '../../../observable/observable.support';

export class EmitNotificationDeletedUseCase extends NotificationObservableSupport {
  async executeAsync(notification: IEmitNotificationDeletedDTO) {
    return this.notification.emitNotificationDeleted(notification);
  }
}
