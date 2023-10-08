import { INotificationObservable } from '@/app/modules/@core/notification/observable/notification.observable';
import { NodeObservable } from '../generic/generic.observable';
import { IEmitNotificationDTO } from '@/app/modules/@core/notification/DTO/observable/emit/create.dto';
import { IListenNotificationDTO } from '@/app/modules/@core/notification/DTO/observable/listen/created.dto';
import { IEmitNotificationViewedDTO } from '@/app/modules/@core/notification/DTO/observable/emit';
import { IListenNotificationViewedDTO } from '@/app/modules/@core/notification/DTO/observable/listen';

export class NodeNotificationObservable
  extends NodeObservable
  implements INotificationObservable
{
  emitNotification(notification: IEmitNotificationDTO) {
    this.emit(this.EVENTS.NOTIFICATION.CREATED, notification);
  }
  listenNotification(scheduled: IListenNotificationDTO) {
    this.listen(this.EVENTS.NOTIFICATION.CREATED, scheduled.action);
  }

  emitNotificationViewed(notification: IEmitNotificationViewedDTO) {
    this.emit(this.EVENTS.NOTIFICATION.VIEWED, notification);
  }

  listenNotificationViewed(scheduled: IListenNotificationViewedDTO) {
    this.listen(this.EVENTS.NOTIFICATION.VIEWED, scheduled.action);
  }
}
