import { INotificationObservable } from '@/app/modules/@core/notification/observable/notification.observable';
import { NodeObservable } from '../generic/generic.observable';
import { IListenDislikeDTO } from '@/app/modules/@core/like/DTO/observable/listen/dislike.dto';
import { IListenLikeDTO } from '@/app/modules/@core/like/DTO/observable/listen/like.dto';
import { IEmitNotificationDTO } from '@/app/modules/@core/notification/DTO/observable/emit/create.dto';

export class NodeNotificationObservable
  extends NodeObservable
  implements INotificationObservable
{
  emitNotification(notification: IEmitNotificationDTO) {
    this.emit(this.EVENTS.NOTIFICATION.CREATED, notification);
  }
}
