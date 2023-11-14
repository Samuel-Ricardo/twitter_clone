import { injectable } from 'inversify';
import { NotificationObservableSupport } from '../../../observable/observable.support';
import { INotificationDTO } from '../../../DTO';

@injectable()
export class EmitNotificationUseCase extends NotificationObservableSupport {
  execute(notification: INotificationDTO) {
    this.notification.emitNotification(notification);
  }
}
