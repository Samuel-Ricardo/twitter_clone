import { IPublishNotificationDTO } from '../../DTO/reactive/publish/create.dto';
import { IPublishNotificationDeleteDTO } from '../../DTO/reactive/publish/delete.dto';
import { IPublishNotificationViewedDTO } from '../../DTO/reactive/publish/view.dto';
import { ISubscribeNotificationCreatedDTO } from '../../DTO/reactive/subscribe/created.dto';
import { ISubscribeNotificationDeletedDTO } from '../../DTO/reactive/subscribe/deleted.dto';
import { ISubscribeNotificationViewedDTO } from '../../DTO/reactive/subscribe/viewed.dto';

export interface IReactiveNotificationGateway {
  publishNewNotification(
    data: IPublishNotificationDTO,
  ): void | any | Promise<void | any>;
  publishViewNotification(
    data: IPublishNotificationViewedDTO,
  ): void | any | Promise<void | any>;
  publishDeleteNotification(
    data: IPublishNotificationDeleteDTO,
  ): void | any | Promise<void | any>;

  subscribeToNotificationCreated(
    schedule: ISubscribeNotificationCreatedDTO,
  ): void | any | Promise<void | any>;
  subscribeToNotificationVisualized(
    schedule: ISubscribeNotificationViewedDTO,
  ): void | any | Promise<void | any>;
  subscribeToNotificationDeleted(
    schedule: ISubscribeNotificationDeletedDTO,
  ): void | any | Promise<void | any>;
}
