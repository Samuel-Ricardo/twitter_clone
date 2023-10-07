import { IReactiveNotificationGateway } from '@/app/modules/@core/notification/gateway/reactive/notification.gateway';
import { SocketIOGateway } from '../generic/websocket.gateway';
import { IPublishNotificationDTO } from '@/app/modules/@core/notification/DTO/reactive/publish/create.dto';
import { SOCKET } from '@/app/modules/reactive/reactive.config';
import { IPublishNotificationViewedDTO } from '@/app/modules/@core/notification/DTO/reactive/publish/view.dto';
import { IPublishNotificationDeleteDTO } from '@/app/modules/@core/notification/DTO/reactive/publish/delete.dto';
import { ISubscribeNotificationCreatedDTO } from '@/app/modules/@core/notification/DTO/reactive/subscribe/created.dto';

export class SocketIONotificationGateway
  extends SocketIOGateway
  implements IReactiveNotificationGateway
{
  publishNewNotification(data: IPublishNotificationDTO) {
    this.publish({ event: SOCKET.NOTIFICATION.NEW, data });
  }

  publishViewNotification(data: IPublishNotificationViewedDTO) {
    this.publish({
      event: SOCKET.NOTIFICATION.VISUALIZE,
      data,
    });
  }
}
