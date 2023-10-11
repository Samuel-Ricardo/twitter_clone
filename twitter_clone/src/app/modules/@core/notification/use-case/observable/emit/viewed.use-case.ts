import { injectable } from 'inversify';
import { NotificationObservableSupport } from '../../../observable/observable.support';
import { IEmitNotificationViewedDTO } from '../../../DTO/observable/emit';

@injectable()
export class EmitNotificationViewedUSeCase extends NotificationObservableSupport {
  async executeAsync(notification: IEmitNotificationViewedDTO) {
    return this.notification.emitNotificationViewed(notification);
  }
}
