import { IPublishNotificationDTO } from '../../DTO/reactive/publish/create.dto';
import { IPublishNotificationDeleteDTO } from '../../DTO/reactive/publish/delete.dto';
import { IPublishNotificationViewedDTO } from '../../DTO/reactive/publish/view.dto';

export interface IReactiveNotificationGateway<C> {
  publishNewNotification(
    data: IPublishNotificationDTO<C>,
  ): void | any | Promise<void | any>;
  publishViewNotification(
    data: IPublishNotificationViewedDTO<C>,
  ): void | any | Promise<void | any>;
  publishDeleteNotification(
    data: IPublishNotificationDeleteDTO<C>,
  ): void | any | Promise<void | any>;

  subscribeToNotificationCreated(context: C): void | any | Promise<void | any>;
  subscribeToNotificationVisualized(
    context: C,
  ): void | any | Promise<void | any>;
  subscribeToNotificationDeleted(context: C): void | any | Promise<void | any>;
}
