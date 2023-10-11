import { injectable } from 'inversify';
import { NotificationObservableSupport } from '../../../observable/observable.support';
import { IListenNotificationViewedDTO } from '../../../DTO/observable/listen';

@injectable()
export class ListenNotificationViewedUseCase extends NotificationObservableSupport {
  async executeAsync(notification: IListenNotificationViewedDTO) {
    this.notification.listenNotificationViewed(notification);
  }
}
