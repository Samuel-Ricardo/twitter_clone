import { injectable } from 'inversify';
import { IListenNotificationDeletedDTO } from '../../../DTO/observable/listen';
import { NotificationObservableSupport } from '../../../observable/observable.support';

@injectable()
export class ListenNotificationDeletedUseCase extends NotificationObservableSupport {
  async executeAsync(scheduled: IListenNotificationDeletedDTO) {
    return this.notification.listenNotificationDeleted(scheduled);
  }
}
