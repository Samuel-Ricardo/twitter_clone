import { injectable } from 'inversify';
import { IListenNotificationDTO } from '../../../DTO/observable/listen';
import { NotificationObservableSupport } from '../../../observable/observable.support';

@injectable()
export class ListenNotificationUseCase extends NotificationObservableSupport {
  execute(scheduled: IListenNotificationDTO) {
    this.notification.listenNotification(scheduled);
  }
}
